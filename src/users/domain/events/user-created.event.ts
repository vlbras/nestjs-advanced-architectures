import { User } from '../user.model';

export class UserCreatedEvent {
  public constructor(public readonly user: User) {}
}
