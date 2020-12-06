import { Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import bcrypt from 'bcryptjs';

import { validateSignup, validateSignin } from './joiValidation';

export const signup = async (req: Request, res: Response) => {
	try {
		const { error } = validateSignup(req.body);
		if (error) throw error;
		const { email, password, username, about } = req.body;
		// check if email exists
		const emailExist = await User.findOne({ email });
		if (emailExist) throw new Error('Email already exists');

		// hash password
		const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
		const newUser = new User({
			email,
			username,
			about,
			password: hashedPassword,
		});
		newUser.save((err, { _id, username }: any) => {
			if (err) throw err;
			const token = jwt.sign({ _id, username }, 'supersecretkey');
			return res.json({
				message: 'New user created',
				token,
			});
		});
	} catch (error) {
		if (error)
			return res.json({
				error: error.message,
			});
	}
};
export const signin = async (req: Request, res: Response) => {
	try {
		const { error } = validateSignin(req.body);
		if (error) throw error;
		const { email, password } = req.body;
		// check if user exists
		const user: any = await User.findOne({ email });
		if (!user) throw new Error('Email not found');

		// compare passwords
		const isValid = bcrypt.compareSync(password, user.password);
		if (!isValid) throw new Error('Invalid Password');
		const { _id, username } = user;
		const token = jwt.sign({ _id, username }, 'supersecretkey');

		return res.json({
			message: 'success',
			token,
		});
	} catch (error) {
		if (error)
			return res.json({
				error: error.message,
			});
	}
};

export const requireSignIn = expressJwt({
	userProperty: 'user',
	secret: 'supersecretkey',
	algorithms: ['HS256'],
});
