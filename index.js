const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = [
    {
        name: 'Alex',
        age: 20,
        id: 1,
    },
    {
        name: 'Anna',
        age: 40,
        id: 2
    },
    {
        name: 'Bakk',
        age: 32,
        id: 3
    }
];

app.get('/users', (req, res) => {
    res.status(200).send(
        JSON.stringify(users)
    );
});

app.post('/users', (req, res) => {
    const {body: newUserData} = req;

    users.push({
        ...newUserData,
        id: Date.now()
    });

    res.status(201).send({status: 'OK'});
});

app.delete('/users/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter(u => u.id !== parseInt(id));

    res.status(200).send({status: 'OK'});
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});