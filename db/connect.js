const mongoose = require('mongoose');

const connectDB = async (url) => {
	try{
		await mongoose.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Database is connected');
	} catch(err) {
		console.error(err);
	}
}

module.exports = connectDB;