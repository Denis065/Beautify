const route = require('express').Router();
const { Rewiew } = require('../db/models');

route.get('/', (req, res) => {
  Rewiew.findAll()

    .then((reviews) => res.json(reviews))
    .catch((error) => console.log(error));
});

route.post('/', (req, res) => {
  Rewiew.create(req.body.obj)
    .then((newReview) => res.status(201).json(newReview))
    .catch((error) => res.status(500).json(error));
});

route.delete('/:id', async (req, res) => {
  const { params } = req;
  const { id } = params;
  // Rewiew.destroy({ where: { id }, raw: true })
  //   .then((delReview) => res.status(201).json({ delReview, id }))
  //   .catch((error) => res.status(500).json(error));
  // // return res.json({ deleted: true }) POCHEMY V ETOJ STROKE ???
  try {
    // eslint-disable-next-line no-unused-vars
    const deleted = await Rewiew.destroy({ where: { id }, raw: true });
    console.log(deleted, 'DAAAAA');
    return res.json({ deleted: true, id });
  } catch (error) {
    console.error(error);

    return res.status(401).json({ deleted: false });
  }
});

route.put('/:id', async (req, res) => {
  const { params } = req;
  const { id } = params;
  // Rewiew.destroy({ where: { id }, raw: true })
  //   .then((delReview) => res.status(201).json({ delReview, id }))
  //   .catch((error) => res.status(500).json(error));
  // // return res.json({ deleted: true }) POCHEMY V ETOJ STROKE ???
  try {
    // eslint-disable-next-line no-unused-vars
    const changed = await Rewiew.update({ isValid: 'true' }, { where: { id }, raw: true });
    return res.json({ changed: true, id });
  } catch (error) {
    console.error(error);

    return res.status(401).json({ changed: false });
  }
});

route.put('/:name', async (req, res) => {
  const { params } = req;
  const { id } = req.body.obj;
  const { name } = params;
  const { text } = req.body.obj;
  // Rewiew.destroy({ where: { id }, raw: true })
  //   .then((delReview) => res.status(201).json({ delReview, id }))
  //   .catch((error) => res.status(500).json(error));
  // // return res.json({ deleted: true }) POCHEMY V ETOJ STROKE ???
  try {
    // eslint-disable-next-line no-unused-vars
    const changed = await Rewiew.update({ name, text, isValid: 'true' }, { where: { id }, raw: true });
    return res.json({ changed });
  } catch (error) {
    console.error(error);

    return res.status(401).json({ status: false });
  }
});
module.exports = route;
