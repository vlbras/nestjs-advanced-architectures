import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateUserCommand } from './commands/create-user.command';

import { User } from '#users/domain/user.model';

@Injectable()
export class UserFacade {
  public constructor(private readonly commandBud: CommandBus) {}

  public async create(command: CreateUserCommand): Promise<User> {
    return this.commandBud.execute(command);
  }

  public findAll(): string {
    return `This action returns all users`;
  }
}
