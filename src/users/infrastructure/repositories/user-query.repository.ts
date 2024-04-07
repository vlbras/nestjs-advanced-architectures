import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { UserViewEntity } from '../schemas/user-view.schema';

import { UserView } from '#users/domain/models';

@Injectable()
export class UserQueryRepository {
  public constructor(
    @InjectModel(UserViewEntity.name)
    private userModel: Model<UserViewEntity>,
  ) {}

  public async findAll(filter: FilterQuery<UserViewEntity> = {}): Promise<UserView[]> {
    const users = await this.userModel.find(filter).lean().exec();
    return users.map(this.mapEntityToModel);
  }

  public async upsert(user: Pick<UserView, 'id'> & Partial<UserView>): Promise<void> {
    await this.userModel.findOneAndUpdate({ _id: user.id }, user, {
      upsert: true,
    });
  }

  private mapEntityToModel(entity: UserViewEntity): UserView {
    return {
      id: entity._id,
      email: entity.email,
    };
  }
}
