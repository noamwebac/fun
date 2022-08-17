const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    'testnode',
    'root',
    'Root123$',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const Base = sequelize.define("base", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      release_date: {
        type: DataTypes.DATEONLY,
      },
      subject: {
        type: DataTypes.INTEGER,
      }
});

sequelize.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
 