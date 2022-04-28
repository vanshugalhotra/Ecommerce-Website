const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

// adding the static folder
app.use(express.static('./Public'));

app.get('/', (req, res)=>{

    res.status(200).send("<h1>Hello World!</h1>");
});

app.listen(port, ()=>{
    console.log(`Server is listening on localhost:${port} ........`);  
});