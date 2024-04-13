import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { UserCreatedEvent } from '#users/domain/events/user-created.event';
import { UserViewRepository } from '#users/infrastructure/repositories';

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
  public constructor(public readonly userRepository: UserViewRepository) {}

  public async handle(event: UserCreatedEvent): Promise<void> {
    await this.userRepository.upsert(event.user);
  }
}
