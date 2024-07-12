// migrations/20240711150000_create-blogs-table.js
module.exports = {
    up: (pgm) => {
        pgm.createTable('blogs', {
            id: 'id',
            title: { type: 'text', notNull: true },
            content: { type: 'text', notNull: true },
            author_id: {
                type: 'integer',
                references: 'users(id)',
                onDelete: 'cascade',
            },
            created_at: {
                type: 'timestamp',
                default: pgm.func('current_timestamp'),
                notNull: true,
            },
        });
        pgm.createIndex('blogs', 'author_id');
    },

    down: (pgm) => {
        pgm.dropIndex('blogs', 'author_id');
        pgm.dropTable('blogs');
    }
};
