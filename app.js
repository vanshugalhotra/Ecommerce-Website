require('dotenv').config();
require('express-async-errors'); // our error handler, 

const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');
const connectDB = require('./db/connect');
const notFound = require('./middlewares/not_found');
const errorHandlerMiddleware = require('./middlewares/errorHandler');

const app = express();

// adding the static folder
app.use(express.static(path.join(__dirname, "Public")));

app.use(express.json())

app.use('/api/v1/products', productsRouter);

app.use(notFound); // using the notFound middleware
app.use(errorHandlerMiddleware);



// home page route
app.get('/', (req, res) => {
    res.status(200).render("index.html");
}
);

const port = 3000;

const start = async () => {
    try { // if connection is successfull then and only then we will start the server
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    }

    catch (error) {
        console.log(error);
    }
}

start()