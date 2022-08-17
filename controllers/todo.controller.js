const client = require('../config/db')

async function getTodos(req, res) {
  const todos = await client.query(`SELECT * FROM "Todos" ORDER BY id`)

  res.json(todos.rows)
}

async function addTodo(req, res) {
  const { name } = req.body
  const existingTodo = await client.query(`SELECT * FROM "Todos" where name = '${name}'`)
  if (existingTodo.rows.length === 0) {
    await client.query(`INSERT INTO "Todos" (name) VALUES('${name}')`)
    const todos = await client.query(`SELECT * FROM "Todos" ORDER BY id`)

    res.json(todos.rows)
  }

  res.status(422).send({ message: "Name already exist!" })
}

async function deleteTodo(req, res) {
  const { id } = req.params
  await client.query(`DELETE FROM "Todos" WHERE id = ${id}`)
  const todos = await client.query(`SELECT * FROM "Todos" ORDER BY id`)

  res.json(todos.rows)
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo
}