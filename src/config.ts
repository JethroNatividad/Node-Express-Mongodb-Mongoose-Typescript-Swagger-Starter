import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Database
declare var process: {
	env: {
		MONGODB_URI: string;
	};
};

export const databaseConfig = () => {
	mongoose.connect(
		process.env.MONGODB_URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		},
		() => console.log('> Database connected')
	);
};
