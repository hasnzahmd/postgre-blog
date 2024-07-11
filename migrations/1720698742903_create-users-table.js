export function up(pgm) {
    pgm.createTable('users', {
        id: 'id',
        username: { type: 'text', notNull: true, unique: true },
        email: { type: 'text', notNull: true, unique: true },
        password: { type: 'text', notNull: true },
        created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
    });
}

export function down(pgm) {
    pgm.dropTable('users');
}
