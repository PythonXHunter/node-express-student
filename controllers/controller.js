const Student = require('../models/model');

const getStudents = async (req, res) => {
	// const students = await Student.find();
	// res.status(200)
	// 	.json({ objectLength: students.length, students });
	try {
		await Student.find()
			.then((allStudents) => {
				res.status(200)
					.json({
						success: true,
						allStudents
					})
			}).catch((err) => {
				res.status(404)
					.json({
						success: false,
						message: "Can not find",
						error: err
					})
			})
	} catch(err) {
		res.status(500)
			.json({
				success: false,
				message: "Internal Server Error",
				error: err.message
			})
	}
}

const createStudent = async (req, res) => {
	// const student = await Student.create(req.body);
	try {
	const studentData = await req.body;
	const student = await Student.create(studentData)
		.then((createdStudent) => {
			if(!createdStudent){
				return res.status(400)
					.json({
						success: false,
						message: "Student creation failed",
						error: "Unable to create student"
					})
			}
			else {
				res.status(201)
					.json({
						success: true,
						createdStudent
					})
			}
		}).catch((err) => {
			res.status(404)
				.json({
					success: false,
					error: err.message
				})
		})
	} catch(err) {
		res.status(500)
			.json({
				success: false,
				message: "Internal server error"
			})
	}
	// res.status(201).json({ student, msg: "Success!" });
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