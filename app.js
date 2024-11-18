// import express
const express = require('express');
const recipeRouter = require('./routers/recipeRoutes');

// creat an express app
const app = express();

// add middleware to parse JSON
app.use(express.json());

// define the root route
app.use('/api/v1/recipes', recipeRouter);

// export the app
module.exports = app;