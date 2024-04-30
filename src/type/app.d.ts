export interface IRegister {
  fullname: string;
  email: string;
  username: string;
  password: string;
}

export type authMiddlewareData = {
  id: string;
};

export interface IProfile {
  bio?: string;
  avatar?: string;
  cover?: string;
  userId?: number;
}

export interface IUserProfile{
  username?: string;
  fullname?:string
  bio?: string;
  cover?: string;
  avatar?: string;
}

export interface IThread {
  id?: number;
  content?: string;
  userId: number;
  threadId?: number;
}
