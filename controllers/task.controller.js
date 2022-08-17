const client = require('../config/db')

async function getTasks(req, res) {
  const { id } = req.params
  const tasks = await client.query(`SELECT * FROM "Tasks" WHERE todo_id = ${id} ORDER BY id`)

  res.json(tasks.rows)
}

async function deleteTask(req, res) {
  const { id, task_id } = req.params
  await client.query(`DELETE FROM "Tasks" WHERE id = ${task_id}`)
  const tasks = await client.query(`SELECT * FROM "Tasks" WHERE todo_id = ${id} ORDER BY id`)

  res.json(tasks.rows)
}

async function addTask(req, res) {
  const { id } = req.params
  const { description, due_date, priority } = req.body
  const existingTask = await client.query(`SELECT * FROM "Tasks" where description = '${description}' and todo_id='${id}'`)
  if (existingTask.rows.length === 0) {
    await client.query(`INSERT INTO "Tasks" (description, due_date, priority, todo_id, completed) VALUES('${description}', '${due_date}', '${priority}', '${id}', '${false}')`)
    const tasks = await client.query(`SELECT * FROM "Tasks" WHERE todo_id = ${id} ORDER BY id`)

    res.json(tasks.rows)
  }

  res.status(422).send({ message: "Description already exist!" })
}

async function getTask(req, res) {
  const { task_id } = req.params
  const task = await client.query(`SELECT * FROM "Tasks" WHERE id = ${task_id}`)

  res.json(task.rows[0])
}

async function updateTask(req, res) {
  const { id, task_id } = req.params
  const { description, due_date, priority, completed } = req.body
  if (completed) {
    await client.query(`UPDATE "Tasks" SET completed = '${true}' WHERE id = ${task_id}`)
  } else {
    await client.query(`UPDATE "Tasks" SET description = '${description}', due_date = '${due_date}', priority = '${priority}' WHERE id = ${task_id}`)
  }
  const tasks = await client.query(`SELECT * FROM "Tasks" WHERE todo_id = ${id} ORDER BY id`)

  res.json(tasks.rows)
}

async function getAllTasks(req, res) {
  const allTasks = await client.query(`SELECT * FROM "Tasks" ORDER BY id`)

  res.json(allTasks.rows)
}

module.exports = {
  getTasks,
  deleteTask,
  addTask,
  getTask,
  updateTask,
  getAllTasks
}