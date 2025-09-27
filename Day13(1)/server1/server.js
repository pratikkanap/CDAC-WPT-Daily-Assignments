const express = require('express');
const users1 = require('./MOCK_DATA.json');
const port = 3000;
const app = express();

app.get('/users', (req,res)=>{
    res.json(users1);
});
console.log("Start the Script");
app.listen(port)
{
    console.log("Server Started");
}