module.exports = {
    development: {
        username: 'root',
        password: 'dev@test',
        database: 'sequelize_starter',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: '0',
    },
    test: {
        username: 'your_db_username',
        password: 'your_db_password',
        database: 'your_project_name_test',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: '0',
    },
    production: {
        username: 'your_db_username',
        password: 'your_db_password',
        database: 'your_project_name_production',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: '0',
    },
};