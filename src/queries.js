const pool = require('./db.js');

const createUser = async (username, email, password) => {
    const result = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, password]
    );
    return result.rows[0];
};

const getUsers = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

const createBlog = async (title, content, author_id) => {
    const result = await pool.query(
        'INSERT INTO blogs (title, content, author_id) VALUES ($1, $2, $3) RETURNING *',
        [title, content, author_id]
    );
    return result.rows[0];
};

const getBlogs = async () => {
    const result = await pool.query('SELECT * FROM blogs');
    return result.rows;
};

module.exports = { createUser, getUsers, createBlog, getBlogs };
