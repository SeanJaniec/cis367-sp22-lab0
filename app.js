const express = require('express');
const app = express();

const hostname = "localhost";
const port = 3000;

app.get('/', (req, res)=> {
    res.send("Hey, it works!");
});

// Query String Parameters
//greet?name=Sean&year=2002
app.get('/greet', (req, res)=> {

    let name = req.query.name.toUpperCase();
    let year = req.query.year.toUpperCase();
    year = 2022 - year
    res.send(`<h1>Hello, ${name}! You are ${year - 1} or ${year} years old. </h1>`);

});

// Route Parameters
// /pokemon/pikachu
app.get('/math/:num1/:operation/:num2', (req, res)=> {

    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let operation = req.params.operation;
    let result = 0;

    if(operation == 'times')
    {
        result = num1 * num2;
    }
    else if(operation == 'plus')
    {
        result = num1 + num2;
    }
    else if(operation == 'minus')
    {
        result = num1 - num2;
    }
    else(operation == 'divide')
    {
        result = num1 / num2;
    }

    res.send(`<h1> ${result} </h1>`);

});


app.listen(port, ()=> {
    console.log(`Listening on http://${hostname}:${port} ...`);
});