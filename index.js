require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const StudentRoute = require('./routes/route');
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>Welcome User</h1>');
});

app.use('/api/v1/student', StudentRoute);

const start = async () => {
	try{
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Server at http://localhost:${port}`);
		});
	} catch(err) {
		console.error(err);
	}
}

start();