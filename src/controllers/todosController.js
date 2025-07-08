import prisma from '../prismaClient.js';

// Crear tarea para un usuario
const createTodo = async (req, res) => {
  const { userId } = req.params;
  const { label, completed } = req.body;

  try {
    const todo = await prisma.todo.create({
      data: {
        label,
        completed,
        user: { connect: { id: parseInt(userId) } },
      },
    });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la tarea', details: err.message });
  }
};

// Obtener todas las tareas de un usuario
const getTodosByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const todos = await prisma.todo.findMany({
      where: { userId: parseInt(userId) },
    });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las tareas', details: err.message });
  }
};

// Obtener una tarea específica
const getTodoById = async (req, res) => {
  const { userId, todoId } = req.params;

  try {
    const todo = await prisma.todo.findFirst({
      where: {
        id: parseInt(todoId),
        userId: parseInt(userId),
      },
    });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la tarea', details: err.message });
  }
};

// Actualizar una tarea
const updateTodo = async (req, res) => {
  const { userId, todoId } = req.params;
  const { label, completed } = req.body;

  try {
    const todo = await prisma.todo.updateMany({
      where: {
        id: parseInt(todoId),
        userId: parseInt(userId),
      },
      data: {
        label,
        completed,
      },
    });
    res.json({ message: 'Tarea actualizada', data: todo });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la tarea', details: err.message });
  }
};

// Eliminar una tarea
const deleteTodo = async (req, res) => {
  const { userId, todoId } = req.params;

  try {
    await prisma.todo.deleteMany({
      where: {
        id: parseInt(todoId),
        userId: parseInt(userId),
      },
    });
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la tarea', details: err.message });
  }
};

module.exports = {
  createTodo,
  getTodosByUser,
  getTodoById,
  updateTodo,
  deleteTodo,
};