const route = require('express').Router();
const { masterService } = require('../db/models');
const { Master } = require('../db/models');

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const masters = await masterService.findAll({
    where: {
      serviceId: id,
    },
    raw: true,
  });

  const mastersIds = masters.map((el) => el.masterId);
  const itogMasters = [];

  for (const id of mastersIds) {
    const masterok = await Master.findOne({
      where: {
        id,
      },
      raw: true,
    });
    itogMasters.push(masterok);
  }
  res.json(itogMasters);
});

module.exports = route;
