import { Module } from '@nestjs/common';

import { UserApplicationModule } from './application/user-application.module';
import { UsersController } from './presenters/users.controller';

@Module({
  imports: [UserApplicationModule],
  controllers: [UsersController],
})
export class UsersModule {}
