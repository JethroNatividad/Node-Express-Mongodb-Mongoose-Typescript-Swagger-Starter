import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: Number,
			default: 0,
		},
		blogs: {
			type: [],
			default: false,
		},
		about: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
);

export default mongoose.model('User', userSchema);
