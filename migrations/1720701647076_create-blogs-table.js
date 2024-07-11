// migrations/20240711150000.create-blogs-table.js
export function up(pgm) {
    pgm.createTable('blogs', {
        id: { type: 'serial', primaryKey: true },
        title: { type: 'text', notNull: true },
        content: { type: 'text', notNull: true },
        author_id: {
            type: 'integer',
            references: 'users(id)', // Assuming there's a users table with an id column
            onDelete: 'cascade',
        },
        created_at: {
            type: 'timestamp',
            default: pgm.func('current_timestamp'),
            notNull: true,
        },
    });

    // Create an index on the author_id column for faster lookups
    pgm.createIndex('blogs', 'author_id');
}

export function down(pgm) {
    pgm.dropIndex('blogs', 'author_id');
    pgm.dropTable('blogs');
}
