// import mongoose
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },

    description:{
        type: String,
    },

    ingredients:[
        {
            name:{
                type: String,
                required: true,
            },

            quantity:{
                type:String,
            },
        },
    ],

    steps:[{
        stepNumber:{ 
            type: Number,
            required: true,
        },

        instruction:{
            type: String,
            required: true,
        },
    },
    ],

    category:{
        type: String,
        enum: ['Breakfast', 'Lunch', 'Dinner'],
        default: "other",
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },

    updatedAt:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Recipe", recipeSchema, "recipes");