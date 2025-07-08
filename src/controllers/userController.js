import prisma from '../prismaClient.js';

export const createUser = async (req, res) => {
  const { username, email } = req.body;
  const user = await prisma.user.create({ data: { username, email } });
  res.json(user);
};

export const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: Number(req.params.id) } });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { username, email } = req.body;
  const { id } = req.params;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { username, email }
  });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.delete({ where: { id: Number(id) } });
  res.json({ message: 'Usuario eliminado', user });
};