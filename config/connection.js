const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  // ennv file was not working so put in my incredibly encrpyted password for mysql
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, 'password', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
