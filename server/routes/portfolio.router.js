const router = require('express').Router();
const { Master } = require('../db/models');

router.route('/')
  .get((req, res) => {
    Master.findAll()
      .then((allMasters) => res.json(allMasters))
      .catch((error) => console.log(error));
  });

module.exports = router;
