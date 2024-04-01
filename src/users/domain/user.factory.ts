import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { User } from './models/user.model';

@Injectable()
export class UserFactory {
  public create(data: Omit<User, 'id'>): User {
    return {
      id: randomUUID(),
      ...data,
    };
  }
}
