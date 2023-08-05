const express = require('express');
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require('../controllers/workoutController');
const checkLogin = require('../middleware/checkLogin');
const router = express.Router();

router.get('/', checkLogin, getWorkouts);
router.get('/:id', checkLogin, getWorkout);
router.post('/', checkLogin, createWorkout);
router.delete('/:id', checkLogin, deleteWorkout);
router.put('/:id', checkLogin, updateWorkout);

module.exports = router;
