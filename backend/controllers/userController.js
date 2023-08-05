const User = require('../models/userModel');

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // create a token
    const token = User.createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);
    // create a token
    const token = User.createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const getSingleUser = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await User.findById(id);
//     if (!user) {
//       throw new Error(`User ${id} does not exist`);
//     }
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// };

module.exports = { signupUser, loginUser };
