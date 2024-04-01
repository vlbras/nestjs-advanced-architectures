import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersController } from '../presenters/users.controller';

import { UserFactory } from '#users/domain/user.factory';
import { UserInfrastructureModule } from '#users/infrastructure/user-infrastructure.module';

@Module({
  imports: [UserInfrastructureModule],
  controllers: [UsersController],
  providers: [UsersService, UserFactory],
})
export class UsersModule {}
