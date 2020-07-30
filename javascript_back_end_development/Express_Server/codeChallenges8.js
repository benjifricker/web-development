const express = require('express');
const app = express();

// mountainsRouter
const mountainsRouter = express.Router();
app.use('/mountains', mountainsRouter);

const mountains = ['denali', 'olympus', 'kilimanjaro', 'matterhorn'];

mountainsRouter.get('/', (req, res, next) => {
  res.send(mountains);
});

// mountainRangesRouter
const mountainRangesRouter = express.Router();
app.use('/mountain-ranges', mountainRangesRouter);

const mountainRanges = ['alps', 'andes', 'himalayas', 'rockies'];

mountainRangesRouter.get('/', (req, res, next) => {
  res.send(mountainRanges);
});

// PORT and app.listen()
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
