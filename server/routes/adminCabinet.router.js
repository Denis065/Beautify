const router = require('express').Router();
const { Master, Service } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const masters = await Master.findAll({
      raw: true,
    });
    const services = await Service.findAll({
      raw: true,
    });

    res.json({ masters, services });
  });

module.exports = router;
