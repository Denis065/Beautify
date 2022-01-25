const router = require('express').Router();

router
  .get('/', (req, res) => {
    res.clearCookie('user_sid');
    req.session.destroy();
    res.json({ message: 'успешный sign out' });
  });

module.exports = router;
