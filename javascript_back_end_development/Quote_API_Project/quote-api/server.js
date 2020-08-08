const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/', (req, res) => {
  if (req.query.person) {
    let quoteByPerson = quotes.filter(quote => quote.person === req.query.person);
    res.send({
      quotes: quoteByPerson
    });
  }
  else {
    res.send({
      quotes: quotes
    });
  }
});

app.get('/api/quotes/random', (req, res) => {
  let randomQuote = getRandomElement(quotes);
  res.send({
    quote: randomQuote
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
