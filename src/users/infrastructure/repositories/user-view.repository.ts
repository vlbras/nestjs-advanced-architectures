import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { UserViewMapper } from '../mappers/user-view.mapper';
import { UserViewEntity } from '../schemas/user-view.schema';

import { UserView } from '#users/domain/models';

@Injectable()
export class UserViewRepository {
  public constructor(
    @InjectModel(UserViewEntity.name)
    private userModel: Model<UserViewEntity>,
  ) {}

  public async findAll(filter: FilterQuery<UserViewEntity> = {}): Promise<UserView[]> {
    const users = await this.userModel.find(filter).lean().exec();
    return users.map(UserViewMapper.mapEntityToModel);
  }

  public async upsert(user: Pick<UserView, 'id'> & Partial<UserView>): Promise<void> {
    await this.userModel.updateOne({ _id: user.id }, UserViewMapper.mapModelToEntity(user), { upsert: true });
  }
}
