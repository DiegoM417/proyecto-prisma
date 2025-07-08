const express = require('express');
const router = express.Router();
const {
  createTodo,
  getTodosByUser,
  getTodoById,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

router.post('/:userId/todos', createTodo);
router.get('/:userId/todos', getTodosByUser);
router.get('/:userId/todos/:todoId', getTodoById);
router.put('/:userId/todos/:todoId', updateTodo);
router.delete('/:userId/todos/:todoId', deleteTodo);

module.exports = router;