const express = require('express');
const port = 5000;
const movieRoute = require('./routers/movieRouter');
const app = express();

//DB connection
require('./connection/db');

//Body-parser
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/', movieRoute);

//Listening Server
app.listen(port, () => {
  console.log(`Server start on port: http://localhost:${port}`);
});
