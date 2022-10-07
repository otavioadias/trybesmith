import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string-empty': '"username" is required',
  }),
  password: Joi.string().required().messages({
    'string-empty': '"password" is required',
  }),
});

const productsSchema = Joi.object({
  name: Joi.string().required().min(3).messages({
    'string-type': '"name" must be a string',
    'string-empty': '"name" is required',
    'string-min': '"name" length must be at least 3 characters long',
  }),
  amount: Joi.string().required().min(3).messages({
    'string-type': '"amount" must be a string',
    'string-empty': '"amount" is required',
    'string-min': '"amount" length must be at least 3 characters long',
  }),
});

const userSchema = Joi.object({
  username: Joi.string().required().min(3).messages({
    'string-type': '"username" must be a string',
    'string-empty': '"username" is required',
    'string-min': '"username" length must be at least 3 characters long',
  }),
  classe: Joi.string().required().min(3).messages({
    'string-type': '"classe" must be a string',
    'string-empty': '"classe" is required',
    'string-min': '"classe" length must be at least 3 characters long',
  }),
  level: Joi.number().required().min(1).messages({
    'number-type': '"level" must be a number',
    'number-empty': '"level" is required',
    'number-min': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().required().min(8).messages({
    'string-type': '"password" must be a string',
    'string-empty': '"password" is required',
    'string-min': '"password" length must be at least 8 characters long',
  }),
});

export default {
  loginSchema,
  productsSchema,
  userSchema,
};