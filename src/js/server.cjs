
const express = require('express');
const { Pool } = require('pg');
const cors = require("cors");
const app = express();
const port = 3001;

//CHANGE PASSWORD
const pool = new Pool({
    host: "localhost",
    user: "superuser",
    password: "12345",
    database: "3x3_inside",
    port: 5432,
});

app.use(express.json()); //Parse JSON requests
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


//Random id generator
function getRandomID(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id;

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length);
        id += chars.charAt(index);
    }
    return id;
}
function getActualDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
}


// Register Request
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const generated_id = getRandomID(7);

    try {
        await pool.query('INSERT INTO users (user_id, username, email, password) VALUES ($1, $2, $3, $4)', [generated_id, username, email, password]);
        res.json({ message: 'Usuario creado con éxito', admin: newAdmin });
    } catch (error) {
        console.error('Error al crear el usuario', error);
        res.status(500).json({ err: 'Error al crear el usuario' });
    }
});

//Login Request
app.post('/login', async (req, res) => {
    const { email } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length > 0) {
            const user = result.rows[0];
            // Return the hashed password along with other user information
            res.json({ hashedPassword: user.password, message: 'User found' });
        } else {
            res.status(401).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error finding user', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Contact Form Post
app.post("/contact", async (req, res) => {
    const { subject, description, solve_date } = req.body;

    const generated_id = getRandomID(7);
    const actualDate = getActualDate();

    try {
        await pool.query('INSERT INTO incidents (incident_id, subject, incidence_description, incident_start_date, incident_solve_date) VALUES ($1, $2, $3, $4, $5)', [generated_id, subject, description, actualDate, solve_date]);
        res.json({ message: 'Form sended correctly' });
    } catch (error) {
        console.error('Error sending the form', error);
        res.status(500).json({ err: 'Error sending the form' });
    }
});

// Profile update
app.put("/update-profile", async (req, res) => {
    const { name, surname, username, country, age, height } = req.body;

    const generated_id = getRandomID(7);

    try {
        await pool.query("UPDATE players SET player_id = $1, real_name = $2, surname = $3, country = $4, age = $5, height = $6 WHERE username = $7", [generated_id, name, surname, country, age, height, username ] )
        res.json({ message: 'User data updated correctly' });
    } catch (error) {
        console.error('Error updating the data', error);
        res.status(500).json({ err: 'Error updating the data' });
    }
});


//SERVER LISTEN
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
