require('dotenv').config();
const express = require('express');
const app = express();

const usersRoutes = require('./routes/usersroutes');
const todosRoutes = require('./routes/todosRoutes.js');

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/users', todosRoutes); // Rutas de tareas también por /users

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 El archivo index.js SÍ se está ejecutando.`);
});
