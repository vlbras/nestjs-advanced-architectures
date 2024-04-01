import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateUserCommand } from './create-user.command';

import { UserFactory } from '#users/domain/user.factory';
import { User } from '#users/domain/user.model';
import { UserCommandRepository } from '#users/infrastructure/repositories';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
  public constructor(
    private readonly userCommandRepository: UserCommandRepository,
    private readonly userFactory: UserFactory,
  ) {}

  public async execute(command: CreateUserCommand): Promise<User> {
    const user = this.userFactory.create(command.data);
    return this.userCommandRepository.save(user);
  }
}
