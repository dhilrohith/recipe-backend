// import express
const express = require('express');

// creat an express app
const app = express();

// define the root route
app.get("/",(request,response)=>{
    response.json({message:"hello, world!"});
});

// export the app
module.exports = app;