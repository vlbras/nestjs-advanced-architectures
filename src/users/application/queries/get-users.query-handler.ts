import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GetUsersQuery } from './get-users.query';

import { UserView } from '#users/domain/models';
import { UserViewRepository } from '#users/infrastructure/repositories';

@QueryHandler(GetUsersQuery)
export class GetAlarmsQueryHandler implements IQueryHandler<GetUsersQuery, UserView[]> {
  public constructor(private readonly userRepository: UserViewRepository) {}

  public async execute(query: GetUsersQuery): Promise<UserView[]> {
    return this.userRepository.findAll(query);
  }
}
