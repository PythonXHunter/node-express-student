const Student = require('../models/model');

const getStudents = async (req, res) => {
	const students = await Student.find({});
	res.status(200).json({ objectLength: students.length, students });
}

const createStudent = async (req, res) => {
	const student = await Student.create(req.body);
	res.status(201).json({ student, msg: "Success!" });
}

const getStudent = async (req, res) => {
	const { id: studentID } = req.params;
	const student = await Student.findById({ _id: studentID});
	res.status(200).json({ student });
}

const updateStudent = async (req, res) => {
	const { id: studentID } = req.params;
	const student = await Student.findByIdAndUpdate(
		{ _id: studentID },
		req.body, 
	);
	res.status(200).json({ student , msg: "Success!"});
}

const deleteStudent = async (req, res) => {
	const { id: studentID } = req.params;
	const student = await Student.findByIdAndDelete({ _id: studentID});
	res.status(200).json({ student, msg: "Success!"});
}

module.exports = {
	getStudents,
	createStudent,
	getStudent,
	updateStudent,
	deleteStudent,
}