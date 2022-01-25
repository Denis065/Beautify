module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.id = req.session.user.id;
    res.locals.login = req.session.user.login;
    res.locals.telephone = req.session.user.telephone;
    res.locals.signedUp = req.session.user.signedUp;
    res.locals.isAdmin = req.session.user.isAdmin;
    res.locals.isSession = req.session.user.isSession;
  } else {
    res.locals.isSession = false;
  }
  next();
};
