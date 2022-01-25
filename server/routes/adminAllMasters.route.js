const router = require('express').Router();
const { Master } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const masters = await Master.findAll();
    console.log(masters);
    res.json(masters);
  });

module.exports = router;
