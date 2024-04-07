import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities';
import { UserCommandRepository, UserQueryRepository } from './repositories';
import { UserViewEntity, UserViewSchema } from './schemas/user-view.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    MongooseModule.forFeature([{ name: UserViewEntity.name, schema: UserViewSchema }]),
  ],
  providers: [UserCommandRepository, UserQueryRepository],
  exports: [UserCommandRepository, UserQueryRepository],
})
export class UserInfrastructureModule {}
