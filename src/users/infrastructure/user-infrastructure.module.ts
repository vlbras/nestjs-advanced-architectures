import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities';
import { UserCommandRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserCommandRepository],
  exports: [UserCommandRepository],
})
export class UserInfrastructureModule {}
