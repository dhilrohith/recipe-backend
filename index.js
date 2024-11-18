// import mongoose
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

// connect to mongose
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to database");

    // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server started @ http://localhost:3001`);
        });
    })
    .catch((error) => {
        console.log("Connection lost");
        console.log(error);
    })