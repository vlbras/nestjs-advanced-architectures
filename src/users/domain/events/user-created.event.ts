import { User } from '../models/user.model';

export class UserCreatedEvent {
  public constructor(public readonly user: User) {}
}
