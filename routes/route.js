const router = require('express').Router();

const {
	getStudents,
	createStudent,
	getStudent,
	updateStudent,
	deleteStudent,
} = require('../controllers/controller');

router.get('/', getStudents);
router.post('/', createStudent);
router.get('/:id', getStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;