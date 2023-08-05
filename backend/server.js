require('dotenv').config();

const express = require('express');
const connectDB = require('./db/connectDB');
const userRoutes = require('./routes/userRouter');
const workoutRoutes = require('./routes/workoutRouter');
const Workout = require('./models/workoutModel');
const cors = require('cors');

// express app
const app = express();
app.use(cors());

// middleware
app.use(express.json());
const PORT = process.env.PORT || 5000;

// routes
app.use('/api/user', userRoutes);
app.use('/api/workouts', workoutRoutes);

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
  connectDB();
});
