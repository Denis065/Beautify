const route = require('express').Router();
const { Rewiew } = require('../db/models');

route.put('/', async (req, res) => {
  const { id } = req.body.obj;
  const { name } = req.body.obj;
  const { text } = req.body.obj;
  // Rewiew.destroy({ where: { id }, raw: true })
  //   .then((delReview) => res.status(201).json({ delReview, id }))
  //   .catch((error) => res.status(500).json(error));
  // // return res.json({ deleted: true }) POCHEMY V ETOJ STROKE ???
  try {
    // eslint-disable-next-line no-unused-vars
    const changed = await Rewiew.update({ name, text, isValid: 'true' }, { where: { id }, raw: true });
    const changed1 = await Rewiew.findOne({ where: { id }, raw: true });
    return res.json({ changed1 });
  } catch (error) {
    console.error(error);

    return res.status(401).json({ status: false });
  }
});
module.exports = route;
