const swaggerAutogen = require('swagger-autogen')();
const doc = require('./config/swagger');

const outputFile = './swagger.json';
const endpoints = ['./index.js'];

swaggerAutogen(outputFile, endpoints, doc);