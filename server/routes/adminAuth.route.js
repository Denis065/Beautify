const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Reservation } = require('../db/models');
const { Client } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { login, password } = req.body;
    const findAdmin = await Client.findOne({
      where: {
        login,
      },
    });
    if (findAdmin) {
      const isCorrectPassword = await bcrypt.compare(password, findAdmin.password);
      if (!isCorrectPassword) {
        res.json({
          answer: true,
          checked: true,
          checkAdmin: true,
          checkPass: false,
          message: 'Не верный пароль',
        });
        return;
      }
      req.session.user = {
        id: findAdmin.id,
        login: findAdmin.login,
        telephone: findAdmin.telephone,
        signedUp: true,
        isAdmin: true,
      };
      res.json({
        authClient: true,
        isAdmin: true,
      });
      return;
    }
    res.json({
      answer: true,
      checked: true,
      checkAdmin: false,
      checkPass: false,
      message: 'Не верный пользователь',
    });
  });

module.exports = router;
