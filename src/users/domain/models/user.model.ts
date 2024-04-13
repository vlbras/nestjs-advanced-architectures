import { Indicator } from './indicator.model';

export type User = {
  id: string;
  email: string;
  indicators: Indicator[];
};
