const express = require('express');
const { Pool } = require('pg');
const cors = require("cors");
const app = express();
const port = 3001;

const pool = new Pool({
    host: "localhost",
    user: "superuser",
    password: "12345",
    database: "3x3_inside",
    port: 5432,
});

app.use(express.json()); //Parse JSON requests
app.use(cors());

//Register Request
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    await pool.query('INSERT INTO userspage (username, email, password) VALUES ($1, $2, $3)', [username, email, password]);

    if (err) {
        console.error('Error al crear el usuario');
        res.status(500).json({ err: 'Error al crear el usuario' });
    } else {
        res.json({ message: 'Usuario creado con exito', admin: newAdmin });
    }

    res.json({ message: 'Usuario registrado exitosamente' });
});

//Login Request
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const result = await pool.query('SELECT * FROM userspage WHERE email = $1 AND password = $2', [email, password]);

    if (result.rows.length > 0) {
        res.json({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});

//Comtact Form Post
app.post("/contact", async (req, res) => {
    const { username, email, subject, description } = req.body;

    await pool.query('INSERT INTO contact (username, email, subject, description) VALUES ($1, $2, $3, $4)', [username, email, subject, description]);

    if (err) {
        console.error('Error al mandar el formulario');
        res.status(500).json({ err: 'Error al mandar el formulario' });
    } else {
        res.json({ message: 'Formulario enviado con exito' });
    }

    res.json({ message: 'Formulario enviado exitosamente' });
})


//SERVER LISTEN
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
