const router = require('express').Router();
const { Reservation } = require('../db/models');

router.route('/')
  .delete(async (req, res) => {
    const { id } = req.body;
    await Reservation.destroy({ where: { id } });
    const reservations = await Reservation.findAll();
    // console.log(reservations);
    res.json(reservations);
  });

module.exports = router;
