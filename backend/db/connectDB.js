const mongoose = require('mongoose');

// connect to db
const connectDB = async () => {
  const URI = process.env.DB_URI;
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Db connection established!');
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connectDB;
