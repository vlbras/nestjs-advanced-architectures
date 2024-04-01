import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  public create(createUserDto: CreateUserDto): string {
    return 'This action adds a new user';
  }

  public findAll(): string {
    return `This action returns all users`;
  }

  public findOne(id: number): string {
    return `This action returns a #${id} user`;
  }

  public update(id: number, updateUserDto: UpdateUserDto): string {
    return `This action updates a #${id} user`;
  }

  public remove(id: number): string {
    return `This action removes a #${id} user`;
  }
}
