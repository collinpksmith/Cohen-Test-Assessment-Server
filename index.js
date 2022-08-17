const express = require('express');
const cors = require('cors')
const app = express();
const todoRoutes = require('./routes/todo.routes')
const taskRoutes = require('./routes/task.routes')

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(todoRoutes)
app.use(taskRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);