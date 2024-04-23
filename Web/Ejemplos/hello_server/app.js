"use strict"


import express from 'express'; 

const app = express();

const port = 5000;

let card_list = []

app.use(express.json()); // middleware para permitir o uso do JSON


app.get("/name", (req, res) => {
    const salute = "Hello from server";
    console.log(req.query)
    res.status(200).send(salute);
});

app.get("/hello/:name", (req, res)=> {
    console.log(req.params);
    const salute = `Hello, ${req.params.name}!!`;
    res.status(200).send(salute);
});

app.post('/cards', (req, res) => {
  console.log(req.body);
  card_list.push(req.body);
  res.status(200).send('Card added')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
    });
