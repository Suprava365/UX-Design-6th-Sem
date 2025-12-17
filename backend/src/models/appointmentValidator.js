const Joi = require('joi');

const createSchema = Joi.object({
  doctorId: Joi.string().required(),

  patient: Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().allow(''),
    email: Joi.string().email().allow('')
  }).required(),

 date: Joi.string()
  .pattern(/^\d{4}-\d{2}-\d{2}$/)
  .required()
  .messages({
    'string.pattern.base': 'Date must be in YYYY-MM-DD format'
  }),


  startTime: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),

  endTime: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),

  notes: Joi.string().allow('')
});

module.exports = { createSchema };
