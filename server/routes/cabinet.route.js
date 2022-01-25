const router = require('express').Router();
const { Reservation } = require('../db/models');
const { Master } = require('../db/models');
const { Service } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const reservations = await Reservation.findAll({
        where: {
          clientNumber: req.session.user.telephone,
        },
      });
      console.log(reservations, 'user telephone');

      const masters = await Master.findAll();

      const services = await Service.findAll();

      res.json({ reservations, masters, services });
    } catch (error) {
      res.json({ message: error.message });
    }
  });

module.exports = router;
