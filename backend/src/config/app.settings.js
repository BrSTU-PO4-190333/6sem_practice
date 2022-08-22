require('dotenv').config();

const appSettings = {
  APP__HOST: process.env.APP__HOST,
  APP__PORT: process.env.APP__PORT,

  APP__JWT_SECRET: process.env.APP__JWT_SECRET,
  APP__JWT_ACCESS_TOKEN_EXPIRES_IN:
    process.env.APP__JWT_ACCESS_TOKEN_EXPIRES_IN,
  APP__JWT_REFRESH_TOKEN_EXPIRES_IN:
    process.env.APP__JWT_REFRESH_TOKEN_EXPIRES_IN,

  SEQUELIZE__DIALECT: process.env.SEQUELIZE__DIALECT,
  SEQUELIZE__HOST: process.env.SEQUELIZE__HOST,
  SEQUELIZE__USERNAME: process.env.SEQUELIZE__USERNAME,
  SEQUELIZE__PASSWORD: process.env.SEQUELIZE__PASSWORD,
  SEQUELIZE__DATABASE: process.env.SEQUELIZE__DATABASE,
};

module.exports = appSettings;
