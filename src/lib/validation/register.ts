import joi from "joi";
import { IRegister } from "../../type/app";

export const registerValidataion = joi.object<IRegister>({
  fullname: joi.string().required(),
  email: joi.string().email().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});
