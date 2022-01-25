const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Client } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const {
      oldPass, newPass, newPass2,
    } = req.body;
    // console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++', req.body);
    const admin = await Client.findOne({
      where: {
        login: 'Admin',
      },
    });
    // console.log('=============== pass', oldPass, newPass);
    const isCorrectPassword = await bcrypt.compare(oldPass, admin.password);
    if (newPass !== newPass2) {
      res.json({
        message: 'Введённые пароли не совпадают',
      });
      return;
    }

    if (isCorrectPassword) {
      const hashPass = await bcrypt.hash(newPass, 8);

      const changePass = await Client.update(
        {
          password: hashPass,
        },
        {
          where: {
            login: 'Admin',
          },
        },
      );
      res.json({
        message: 'Пароль успешно изменён',
      });
    } else {
      res.json({
        message: 'Неверный пароль',
      });
    }

    // const reservations = await Reservation.findAll();
    // alert('pass change');
    // res.json(true);
  });

module.exports = router;

// user = await User.findOne({ where: { email } });
