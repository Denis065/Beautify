const router = require('express').Router();

// пока не работает
router.route('/')
  .get(async (req, res) => {
    if (req.session.user) {
      if (req.session.user.isAdmin) {
        res.json({ authClient: true, isAdmin: true });
      } else {
        res.json({ authClient: true, isAdmin: false });
      }
    } else {
      res.json({ authClient: false });
    }
  });

module.exports = router;
