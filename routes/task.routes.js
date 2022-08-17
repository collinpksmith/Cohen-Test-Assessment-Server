const express = require('express')
const router = express.Router()
const taskCtrl = require('../controllers/task.controller')

router.route('/task')
  .get(taskCtrl.getAllTasks)

router.route('/task/:id')
  .get(taskCtrl.getTasks)
  .post(taskCtrl.addTask)

router.route('/task/:id/:task_id')
  .delete(taskCtrl.deleteTask)
  .put(taskCtrl.updateTask)

router.route('/tasks/:task_id')
  .get(taskCtrl.getTask)

module.exports = router
