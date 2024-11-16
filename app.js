// import express
const express = require('express');
const recipeRouter = require('./routers/recipeRoutes');

// creat an express app
const app = express();

// define the root route
app.use("/",recipeRouter);

// export the app
module.exports = app;