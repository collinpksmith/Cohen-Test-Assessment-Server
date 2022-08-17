const express = require('express')
const router = express.Router()
const todoCtrl = require('../controllers/todo.controller')

router.route('/todos')
  .get(todoCtrl.getTodos)
  .post(todoCtrl.addTodo)

router.route('/todos/:id')
  .delete(todoCtrl.deleteTodo)

module.exports = router
