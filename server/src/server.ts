import express from "express";

const app = express();

app.get('/users', (req, res) => {

    res.json([
        'Alex',
        'Santos',
        'Souza'
    ])
});



app.listen(3333);

