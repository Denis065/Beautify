const route = require('express').Router();
const { Reservation } = require('../db/models');
const { Service } = require('../db/models');

route.post('/', async (req, res) => {
  const price = await Service.findOne({
    where: {
      id: req.body.serviceId,
    },
    raw: true,
  });
// console.log('==========>>> price', price.price);
  req.body.price = price.price;

  Reservation.create(req.body);
  res.status(201);
});

module.exports = route;
