// migrations/20240711150000_create-users-table.js
module.exports = {
    up: (pgm) => {
        pgm.createTable('users', {
            id: 'id',
            username: { type: 'text', notNull: true, unique: true },
            email: { type: 'text', notNull: true, unique: true },
            password: { type: 'text', notNull: true },
            created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
        });
    },
    down: (pgm) => {
        pgm.dropTable('users');
    }
};
