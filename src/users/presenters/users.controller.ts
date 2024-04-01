import { Controller, Get, Post, Body } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from '../application/users.service';

import { CreateUserCommand } from '#users/application/commands';
import { User } from '#users/domain/user.model';

@Controller('users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(new CreateUserCommand(createUserDto));
  }

  @Get()
  public findAll(): string {
    return this.usersService.findAll();
  }
}
