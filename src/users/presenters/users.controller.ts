import { Controller, Get, Post, Body } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UserFacade } from '../application/user.facade';

import { CreateUserCommand } from '#users/application/commands';
import { UserView, User } from '#users/domain/models';

@Controller('users')
export class UsersController {
  public constructor(private readonly userFacade: UserFacade) {}

  @Post()
  public create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userFacade.create(new CreateUserCommand(createUserDto));
  }

  @Get()
  public findAll(): Promise<UserView[]> {
    return this.userFacade.findAll();
  }
}
