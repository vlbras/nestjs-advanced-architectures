import { UserViewEntity } from '../schemas/user-view.schema';

import { UserView } from '#users/domain/models';

export class UserViewMapper {
  public static mapEntityToModel(entity: UserViewEntity): UserView {
    return {
      id: entity._id,
      email: entity.email,
      indicators: entity.indicators.map(indicator => ({
        id: indicator._id,
        name: indicator.name,
        value: indicator.value,
      })),
    };
  }

  public static mapModelToEntity(model: DeepPartial<UserView>): DeepPartial<UserViewEntity> {
    return {
      ...(model.id && { _id: model.id }),
      ...(model.email && { email: model.email }),
      ...(model.indicators && {
        indicators: model.indicators?.map(indicator => ({
          ...(indicator?.id && { _id: indicator.id }),
          ...(indicator?.name && { name: indicator.name }),
          ...(indicator?.value !== undefined && { value: indicator.value }),
        })),
      }),
    };
  }
}

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
