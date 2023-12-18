import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

const pool = new pg.Pool({
    host: "localhost",
    user: "superuser",
    password: "12345",
    database: "3x3_inside",
    port: 5432,
});

app.use(express.json()); // Add this line to parse JSON requests

// Import routes using CommonJS syntax
import routes from './routes.js';
routes(app, pool);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
