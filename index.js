const connectDB = require('./db/connect');
const express = require('express');
const tasks = require('./routes/task');
var cors = require('cors');
const app = express();
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/errorHandler');

// app.use(express.static());
app.use(express.json());
app.use(cors());

app.use('/api/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 5500;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log('server is listening on port', port));
  } catch (error) {
    console.log(error);
  }
};
start();
