import Joi from 'joi';

export const validateSignup = (data: {
	username: string;
	email: string;
	password: string;
	about: string;
}) => {
	const schema = Joi.object({
		username: Joi.string().required().min(2),
		email: Joi.string().required().min(6).email(),
		password: Joi.string().required().min(6),
		about: Joi.string(),
	});
	return schema.validate(data);
};
export const validateSignin = (data: { email: string; password: string }) => {
	const schema = Joi.object({
		email: Joi.string().required().min(6).email(),
		password: Joi.string().required().min(6),
	});
	return schema.validate(data);
};
