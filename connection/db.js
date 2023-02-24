const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = mongoose
  .connect('mongodb://localhost:27017/movie-api')
  .then(() => console.log('DB connect successfully'))
  .catch((err) => console.log({ Error: err.message }));
