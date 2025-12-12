const Joi = require('joi');


const createSchema = Joi.object({
doctorId: Joi.string().required(),
patient: Joi.object({
name: Joi.string().required(),
phone: Joi.string().optional().allow(''),
email: Joi.string().email().optional().allow('')
}).required(),
startAt: Joi.date().required(),
endAt: Joi.date().greater(Joi.ref('startAt')).required(),
notes: Joi.string().optional().allow('')
});


module.exports = { createSchema };