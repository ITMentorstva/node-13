
const { pool } = require("./mysql");

async function createUser(name, email, password) {
    await pool.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
        name, email, password
    ]);
}

async function getAllUsers() {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

async function userExists(email) {
    const [rows] = await pool.query("SELECT id FROM users WHERE email = ? LIMIT 1", [email]);
    return rows.length > 0;
}


module.exports = { createUser, getAllUsers, userExists };