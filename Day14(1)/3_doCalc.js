const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/calc', (req, res) => {
  res.render('calc');
});

app.post('/calc', (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;
  res.render('calc', { num1, num2, result });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});