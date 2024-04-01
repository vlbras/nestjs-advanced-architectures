import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { UserQueryEntity } from '../schemas/user-query.schema';

import { UserView } from '#users/domain/user-view.model';

@Injectable()
export class UserQueryRepository {
  public constructor(
    @InjectModel(UserQueryEntity.name)
    private userModel: Model<UserQueryEntity>,
  ) {}

  public async findAll(filter: FilterQuery<UserQueryEntity> = {}): Promise<UserView[]> {
    const users = await this.userModel.find(filter).lean().exec();
    return users.map(this.mapEntityToModel);
  }

  public async upsert(user: Pick<UserView, 'id'> & Partial<UserView>): Promise<void> {
    await this.userModel.findOneAndUpdate({ _id: user.id }, user, {
      upsert: true,
    });
  }

  private mapEntityToModel(entity: UserQueryEntity): UserView {
    return {
      id: entity._id,
      email: entity.email,
    };
  }
}
