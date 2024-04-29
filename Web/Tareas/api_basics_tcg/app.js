//Gabriel Muñoz Luna - A01028774
//29/04/2024
//API
"use strict"

import express from 'express'; 

const app = express();

const port = 5000;

let card_list = [
{
  "id": "1",
  "name": "Fireball",
  "mana_cost": 5,
  "type": "damage",
  "amount": 7
},
{
  "id": "2",
  "name": "Healing Potion",
  "mana_cost": 3,
  "type": "heal",
  "amount": 4
}
]

app.use(express.json()); // middleware para permitir o uso do JSON

/*app.get("/name", (req, res) => {
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
})*/

//Puerto
app.listen(port, () => {
    console.log(`Running on port ${port}`);
    });

//Obtener todas las cartas
app.get('/cardsreq', (req, res) => {
  if(card_list.length === 0){
    res.status(200).send('No cards')
  } else {
    res.status(200).send(card_list)
  }
})

//Solicitar carta por id
app.get('/cardsreq/:id', (req, res) => {
  const id = req.params.id;
  const card = card_list.find(card => card.id === id);
  if(!card){
    res.status(404).send('Card not found')
  } else {
    res.status(200).send(card)
  }
})

//Añadir carta
app.post('/cardsadd', (req, res) => {
  let newId=1;
  if(card_list.length > 0){
    newId = card_list[card_list.length-1].id + 1;
  }
  const newCard={id: newId, ...req.body};
  card_list.push(newCard);
  res.status(201).send('Card added')
});

//Borrar carta
app.delete('/cardsdel/:id', (req, res) => {
  const id = req.params.id;
  const card = card_list.find(card => card.id === id);
  if (!card) {
    res.status(404).send('Card not found')
  } else {
    card_list = card_list.filter(card => card.id !== id);
    res.status(200).send('Card deleted')
  }
})

//Actualizar carta
app.put('/cardsupd/:id', (req, res) => {
  const id = req.params.id;
  const card = card_list.find(card => card.id === id);
  if (!card) {
    res.status(404).send('Card not found')
  } else {
    const new_card = req.body;
    if(new_card.id){
      res.status(400).send('Cannot update id')
    } else {
      card_list = card_list.map(card => {
        if(card.id === id){
          return {...card, ...new_card}
        } else {
          return card
        }
      })
      res.status(200).send('Card updated')
    }
  }
})