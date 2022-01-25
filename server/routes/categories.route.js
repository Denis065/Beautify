const router = require('express').Router();
const { Category } = require('../db/models');
const { Service } = require('../db/models');

router.route('/')
  .get((req, res) => {
    Category.findAll()
      .then((categories) => res.json(categories))
      .catch((error) => console.log(error));
  });
router.route('/:id')
  .get((req, res) => {
    const { params } = req;
    const { id } = params;
    Service.findAll({
      where: {
        categoryId: id,
      },
      raw: true,
    })
      .then((allServices) => {
        res.json(allServices);
      })
      .catch((error) => console.log(error));
  });
module.exports = router;
