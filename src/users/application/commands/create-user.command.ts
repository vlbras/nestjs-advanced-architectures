export class CreateUserCommand {
  public constructor(public readonly data: CreateUserCommandData) {}
}

export type CreateUserCommandData = {
  email: string;
};
