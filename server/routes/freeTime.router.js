const route = require('express').Router();
const { Reservation } = require('../db/models');

route.get('/:id', async (req, res) => {
  const date = req.params.id;
  // console.log('=============>>>> date', date);
  const reservations = await Reservation.findAll({
    where: {
      date,
    },
    raw: true,
  });
  res.json(reservations);
  // console.log('================>>>> resrevations', reservations);
});

module.exports = route;
