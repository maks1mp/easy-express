const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [
    {
        name: 'Alex',
        age: 20,
    },
    {
        name: 'Anna',
        age: 40
    },
    {
        name: 'Bakk',
        age: 32,
    }
];

app.get('/users', (req, res) => {
    res.status(200).send(
        JSON.stringify(users)
    );
});

app.post('/users', (req, res) => {
    const {body: newUserData} = req;

    users.push(newUserData);

    res.status(201).send({status: 'OK'});
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});