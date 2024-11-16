// import express
const express = require('express');

// create an express router
const recipeRouter = express.Router();

recipeRouter.get("/",(request, response)=>{
    response.json({message:"route sucessfull"});
});

// export the router
module.exports = recipeRouter;