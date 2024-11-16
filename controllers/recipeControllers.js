// import Recipe Model(database)
const Recipe = require('../models/recipe')

// create recipe controllers
const recipeController = {

    getAllRecipes: async (request, response)=>{
        try{

            const recipes = await Recipe.find();
            response.status(200).json(recipes);

        } catch(error){
            response.status(500).json({
                message: error.message
            });
        }
    },

    getRecipesById: async (request, response)=>{
        try{
            // get id from request params
            const {id} = request.params;

            // get the recipe details from the id
            const recipe = await Recipe.findById(id);

            // check if the recipeid fetched
            if(!recipe){
               return response.status(404).json({
                    message:"Recipe is not Fetched"
                })
            }
            // return the recipe
            response.status(200).json(recipe);
        } catch(error){
            response.status(500).json({
                message:error.message
            });
        }
    },

    createRecipe: async (request, response)=>{
        try{
            //extract the recipe details from the request body
            const{title, description, ingredients, steps, category} = request.body;

            // create a new object with a extracted details
            const newRecipe = new Recipe({
                title,
                description,
                ingredients,
                steps,
                category
            });

            // save the new recipe object to the database
            const savedRecipe = await newRecipe.save();

            // send a 201 status code and the new recipe object
            response.status(201).json({message:"Created a new recipe successfully"})

        } catch(error){
            response.status(500).json({
                message:error.message
            });
        }
    },

    updateRecipe: async (request, response)=>{
        try{
            // get recipe id from request params
            const {id} = await request.params;

            // extract the fields from the request body
            const{title, description, ingredients, steps, category} = await request.body;

            // found the match recipe from recipe id
            const recipe = await Recipe.findById(id);

            // change the values
            Object.assign(recipe,{title, description, ingredients, steps, category});

            // save the updated recipe
            await recipe.save();

            // send a status message
            response.status(200).json({
                message:"Updated Successfully"
            });

        } catch(error){
            response.status(500).json({
                message:error.message
            });
        }
    },

    deleteRecipe: async(request, response)=>{
        try{
            // get the id from request parameters 
            const {id} = request.params;

            // delete the recipe using the id
            const recipe = await Recipe.findByIdAndDelete(id);

            if(!recipe){
                return response.status(404).json({
                    message:"Recipe Not Found"
                });
            }

            // send a status code
            response.status(200).json({
                message:"Recipe Deleted Successfully"
            });
        } catch(error){
            response.status(500).json({
                message:error.message
            });
        }
    }
}

module.exports = recipeController