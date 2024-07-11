import { createUser, getUsers, createBlog, getBlogs } from './queries.js';
import pool from './db.js';

const run = async () => {
    try {
        // Create a new user
        const newUser = await createUser('hassan', 'hassan@gmail.com', 'password123');
        console.log('New User:', newUser);

        // Fetch all users
        const users = await getUsers();
        console.log('All Users:', users);

        // Create a new blog
        const newBlog = await createBlog('My First Blog', 'Hello World!', newUser.id);
        console.log('New Blog:', newBlog);

        // Fetch all blogs
        const blogs = await getBlogs();
        console.log('All Blogs:', blogs);

    } catch (error) {
        console.error('Error running queries:', error);
    } finally {
        pool.end();
    }
};

run();
