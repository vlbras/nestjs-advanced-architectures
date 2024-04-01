import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../entities';

import { User } from '#users/domain/user.model';

@Injectable()
export class UserCommandRepository {
  public constructor(
    @InjectRepository(UserEntity)
    private readonly alarmRepository: Repository<UserEntity>,
  ) {}

  public async save(user: User): Promise<User> {
    return this.alarmRepository.save(user);
  }
}
