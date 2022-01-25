const route = require('express').Router();
const { Service } = require('../db/models');

route.get('/:id', (req, res) => {
  const { id } = req.params;
  Service.findAll({
    where: {
      categoryId: id,
    },
    raw: true,
  }).then((services) => {
    res.json(services);
  })
    .catch((error) => console.log(error));
});

module.exports = route;
