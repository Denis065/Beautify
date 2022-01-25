const router = require('express').Router();
// const { mastersAT } = require('../../client/src/redux/actionTypes/mastersAT');
// const { Service } = require('../db/models');
const { masterService } = require('../db/models');
const { Master } = require('../db/models');

router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const masterServices = await masterService.findAll({
        where: {
          serviceId: id,
        },
        raw: true,
      });
      let masters = [];
      const ids = masterServices.map((el) => el.masterId);

      for (const id of ids) {
        const master = await Master.findOne({
          where: {
            id,
          },
          raw: true,
        });

        masters.push(master);
      }

      res.json(masters);
    } catch (error) {
      res.json({ message: error.message });
    }
  });

// const masters = [];
// const services = await Service.findAll();
// for (let i = 0; i < masterServices.length; i += 1) {
//   for (let j = 0; j < services.length; j += 1) {
//     if (masterServices[i].masterId === +masterId) {
//       if (services[j].id === masterServices[i].serviceId) {
//         newServices.push(services[j]);
//       }
//     }
//   }
// }

// res.json(newServices);
//     res.json(masterServices);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

module.exports = router;
