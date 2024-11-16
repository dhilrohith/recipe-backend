// import express
const express = require('express');
const recipeController = require('../controllers/recipeControllers');

// create an express router
const recipeRouter = express.Router();

// define crud routes
recipeRouter.get("/",recipeController.getAllRecipes);
recipeRouter.get("/:id", recipeController.getRecipesById);
recipeRouter.post("/", recipeController.createRecipe);
recipeRouter.put("/:id", recipeController.updateRecipe);
recipeRouter.delete("/:id", recipeController.deleteRecipe);

// export the router
module.exports = recipeRouter;