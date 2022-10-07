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

export default {
  loginSchema,
  productsSchema,
};