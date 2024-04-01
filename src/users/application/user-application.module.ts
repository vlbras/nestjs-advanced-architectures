import { Module } from '@nestjs/common';

import { CreateUserCommandHandler } from './commands';
import { UserFacade } from './user.facade';

import { UserFactory } from '#users/domain/user.factory';
import { UserInfrastructureModule } from '#users/infrastructure/user-infrastructure.module';

@Module({
  imports: [UserInfrastructureModule],
  providers: [
    UserFacade,
    UserFactory,

    /* command handlers */
    CreateUserCommandHandler,
  ],
  exports: [UserFacade],
})
export class UserApplicationModule {}
