import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { CreateUserCommand } from './create-user.command';

import { UserCreatedEvent } from '#users/domain/events/user-created.event';
import { User } from '#users/domain/models';
import { UserFactory } from '#users/domain/user.factory';
import { UserCommandRepository } from '#users/infrastructure/repositories';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
  public constructor(
    private readonly userRepository: UserCommandRepository,
    private readonly userFactory: UserFactory,
    private readonly eventBus: EventBus,
  ) {}

  public async execute(command: CreateUserCommand): Promise<User> {
    const user = this.userFactory.create(command.data);
    const newUser = await this.userRepository.save(user);
    this.eventBus.publish(new UserCreatedEvent(newUser));
    return newUser;
  }
}
