const router = require('express').Router();
const { Service } = require('../db/models');
const { masterService } = require('../db/models');

router.route('/:masterId')
  .get(async (req, res) => {
    const { masterId } = req.params;
    try {
      const masterServices = await masterService.findAll();
      const newServices = [];
      const services = await Service.findAll();
      for (let i = 0; i < masterServices.length; i += 1) {
        for (let j = 0; j < services.length; j += 1) {
          if (masterServices[i].masterId === +masterId) {
            if (services[j].id === masterServices[i].serviceId) {
              newServices.push(services[j]);
            }
          }
        }
      }

      res.json(newServices);
    } catch (error) {
      res.json({ message: error.message });
    }
  });

module.exports = router;
