import { Injectable } from '@nestjs/common';

import { CreateUserCommand } from './commands/create-user.command';

import { UserFactory } from '#users/domain/user.factory';
import { User } from '#users/domain/user.model';
import { UserCommandRepository } from '#users/infrastructure/repositories';

@Injectable()
export class UsersService {
  public constructor(
    private readonly userCommandRepository: UserCommandRepository,
    private readonly userFactory: UserFactory,
  ) {}

  public async create(command: CreateUserCommand): Promise<User> {
    const user = this.userFactory.create(command.data);
    return this.userCommandRepository.save(user);
  }

  public findAll(): string {
    return `This action returns all users`;
  }
}
