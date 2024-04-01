import { Module } from '@nestjs/common';

import { CreateUserCommandHandler } from './commands';
import { UserCreatedEventHandler } from './event-handlers';
import { GetAlarmsQueryHandler } from './queries';
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

    /* query handlers */
    GetAlarmsQueryHandler,

    /* event handlers */
    UserCreatedEventHandler,
  ],
  exports: [UserFacade],
})
export class UserApplicationModule {}
