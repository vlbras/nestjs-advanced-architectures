export class CreateUserCommand {
  public constructor(public readonly data: CreateUserCommandData) {}
}

export type CreateUserCommandData = {
  email: string;
  indicators: CreateIndicatorCommandData[];
};

type CreateIndicatorCommandData = {
  name: string;
  value: number;
};
