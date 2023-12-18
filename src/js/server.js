const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
    host: "localhost",
    user: "superuser",
    password: "12345",
    database: "3x3_inside",
    port: 5432,
});

app.use(express.json()); // Add this line to parse JSON requests

//Register Request
app.post('/register', async (req, res) => {
    const { userId, username, realName, email, password } = req.body;

    // Ejemplo de inserción en la base de datos
    const result = await pool.query('INSERT INTO users (user_id, username, real_name, email, password) VALUES ($1, $2, $3, $4, $5)', [userId, username, realName, email, password]);

    res.json({ message: 'Usuario registrado exitosamente' });
});

//Login Request
app.get('/login', async (req, res) => {
    const { email, password } = req.body;

    // Ejemplo de consulta en la base de datos para autenticar
    const result = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);

    if (result.rows.length > 0) {
        res.json({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
