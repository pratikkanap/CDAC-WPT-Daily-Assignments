const express = require('express')
const users1 = require('./MOCK_DATA.json')
const port = 5000;
const app = express()

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id); 
    const user = users1.find(
        user => user.id === id
    )
    return res.json(user);
});
app.listen(port)
console.log("Start Script ");
    