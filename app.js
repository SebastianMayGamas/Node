import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import petcareRoute from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Corrige aquí: elimina 'petcare' del prefijo de ruta
app.use(petcareRoute);

try {
  await db.authenticate();
  console.log('Conexión exitosa a la base de datos');
} catch (error) {
  console.error('Error al conectar a la base de datos:', error);
}

app.get('/', (req, res) => {
  res.send('¡Hola desde la raíz!');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
