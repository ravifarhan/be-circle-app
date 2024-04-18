export interface IRegister {
  fullname: string;
  email: string;
  username: string;
  password: string;
}

export type authMiddlewareData = {
  id: string;
}

export interface IProfile{
  bio?: string;
  avatar?: string;
  cover?: string;
  userId?: number;
}