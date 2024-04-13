export type UserView = {
  id: string;
  email: string;
  indicators: UserIndicatorView[];
};

type UserIndicatorView = {
  id: string;
  name: string;
  value: number;
};
