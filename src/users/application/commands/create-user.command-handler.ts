import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { CreateUserCommand } from './create-user.command';

import { UserCreatedEvent } from '#users/domain/events/user-created.event';
import { UserFactory } from '#users/domain/user.factory';
import { User } from '#users/domain/user.model';
import { UserCommandRepository } from '#users/infrastructure/repositories';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
  public constructor(
    private readonly userCommandRepository: UserCommandRepository,
    private readonly userFactory: UserFactory,
    private readonly eventBus: EventBus,
  ) {}

  public async execute(command: CreateUserCommand): Promise<User> {
    const user = this.userFactory.create(command.data);
    const newUser = await this.userCommandRepository.save(user);
    this.eventBus.publish(new UserCreatedEvent(newUser));
    return newUser;
  }
}
