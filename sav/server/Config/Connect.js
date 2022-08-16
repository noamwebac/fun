const { Sequelize } = require('Sequelize');

const connect = new Sequelize('testnode', 'root', 'Root123$', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    await Sequelize.authentificate();
    console.log('Connected');
} catch (erro) {
    console.log('Not connected');
}