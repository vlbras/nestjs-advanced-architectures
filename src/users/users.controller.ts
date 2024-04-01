import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post()
  public create(@Body() createUserDto: CreateUserDto): string {
    return this.usersService.create(createUserDto);
  }

  @Get()
  public findAll(): string {
    return this.usersService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): string {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): string {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): string {
    return this.usersService.remove(+id);
  }
}
