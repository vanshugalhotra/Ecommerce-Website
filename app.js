const express = require('express');
const path = require('path');
const home = require('./routes/home');
const connectDB = require('./db/connect');
require('dotenv').config();

const app = express();
const port = 5500;

// adding the static folder
app.use(express.static(path.join(__dirname, "Public")));

app.use('/', home); // * adding the home route

// connecting to the database
const start = async ()=>{
    try{ // if connection is successfull then and only then we will start the server
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    }

    catch(error){
        console.log(error);
    }
}

start()