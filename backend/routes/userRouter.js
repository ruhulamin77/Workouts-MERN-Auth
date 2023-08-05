const express = require('express');
const {
  signupUser,
  loginUser,
  getSingleUser,
} = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
// router.get('/:id', getSingleUser);

module.exports = router;
