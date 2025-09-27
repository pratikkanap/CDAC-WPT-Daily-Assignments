const express = require('express');
const users1 = require('./MOCK_DATA.json');
const port = 3000;
const app = express();

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users1.find(
        user => user.id === id
    );
    return res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users1.findIndex(
        user => user.id === id
    );
    if (userIndex !== 1) {
        users1.splice(userIndex, 1);
        return res.json(
            { 
                message: "User deleted successfully." 
            });
    } else {
        return res.status(404).json(
            { message: "User not found." }
        );
    }
});
app.get('/users', (req, res) => {
    return res.json(users1);
});

app.listen(port, () => {
    console.log("Server started");
});