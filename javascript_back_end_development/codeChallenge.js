const express = require('express');

const app = express();

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];

app.get('/sausages', (req, res, next) => {
  res.send(sausageTypes);
});

const PORT = process.env.PORT || 4001;

app.listen(PORT);
