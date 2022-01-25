const router = require('express').Router();
const { Reservation, Master, Service } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const {
      id,
      clientName,
      clientNumber,
      master,
      service,
      date,
      time,
    } = req.body;

    const findService = await Service.findOne({
      where: {
        name: service,
      },
    });
    const findMaster = await Master.findOne({
      where: {
        name: master,
      },
    });

    const serviceId = findService.id;
    const servicePrice = findService.price;

    const masterId = findMaster.id;

    const updatedTable = await Reservation.update(
      {
        clientName,
        clientNumber,
        masterId,
        serviceId,
        date,
        time,
        price: +servicePrice,
      },
      {
        where: {
          id,
        },
      },
    );
    const reservations = await Reservation.findAll();
    res.json(reservations);
  });

module.exports = router;
