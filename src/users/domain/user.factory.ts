import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { Indicator } from './models';
import { User } from './models/user.model';

@Injectable()
export class UserFactory {
  public create(data: { email: string; indicators: Omit<Indicator, 'id' | 'userId'>[] }): User {
    const userId = randomUUID();
    const indicators = data.indicators.map(indicator => this.createIndicator(indicator, userId));
    return {
      id: userId,
      email: data.email,
      indicators,
    };
  }

  private createIndicator(data: Omit<Indicator, 'id' | 'userId'>, userId: string): Indicator {
    return {
      id: randomUUID(),
      userId,
      ...data,
    };
  }
}
