const route = require('express').Router();
const { Rewiew } = require('../db/models');

route.get('/', (req, res) => {
  Rewiew.findAll()

    .then((rewiews) => res.json(rewiews))
    .catch((error) => console.log(error));
});

// route.get('/rew', (req, res) => {
//   res.send('sdfgh');
// });

module.exports = route;
