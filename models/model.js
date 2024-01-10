const { Schema, model } = require('mongoose');

const StudentSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	phone_number: {
		type: Number,
	},
	address: {
		type: String,
	},
});

module.exports = model('Student', StudentSchema);