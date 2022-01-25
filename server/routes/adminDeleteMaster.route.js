const router = require('express').Router();
const { Master } = require('../db/models');
const { masterService } = require('../db/models');
const { Reservation } = require('../db/models');

router.route('/')
  .delete(async (req, res) => {
    const { id } = req.body;
    await masterService.destroy({ where: { masterId: id } });
    await Reservation.destroy({ where: { masterId: id } });
    await Master.destroy({ where: { id } });
    const masters = await Master.findAll();
    res.json(masters);
  });

module.exports = router;
