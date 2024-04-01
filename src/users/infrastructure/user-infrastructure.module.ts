import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities';
import { UserCommandRepository, UserQueryRepository } from './repositories';
import { UserQueryEntity, UserQuerySchema } from './schemas/user-query.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    MongooseModule.forFeature([{ name: UserQueryEntity.name, schema: UserQuerySchema }]),
  ],
  providers: [UserCommandRepository, UserQueryRepository],
  exports: [UserCommandRepository, UserQueryRepository],
})
export class UserInfrastructureModule {}
