require("dotenv-safe/config");

module.exports = {
    development: {
      username: process.env.DATABASE,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      dialect: process.env.DIALECT
    },
  
    test: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      dialect: process.env.DIALECT
    },
    
    production: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      dialect: process.env.DIALECT
    }
  }