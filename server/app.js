const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Filestore = require('session-file-store')(session);

const cors = require('cors');

const app = express();

const PORT = process.env.PORT ?? 3001;

const testRoute = require('./routes/test.route');

const reviewsRoute = require('./routes/reviews.route');
const categoriesRoute = require('./routes/categories.route');
const portfolioRouter = require('./routes/portfolio.router');
const portfolioCRouter = require('./routes/portfolioC.router');
const servicesReserv = require('./routes/servicesReserv.route');
const mastersReserv = require('./routes/mastersReserv.router');
const createReserv = require('./routes/createReserv.router');
const adminReservationRouter = require('./routes/adminReservations.route');
const mastersRouter = require('./routes/masters.router');
const adminAuthRouter = require('./routes/adminAuth.route');
const clientRouter = require('./routes/client.route');
const signinRouter = require('./routes/signin.route');
const sessionRouter = require('./routes/session.route');
const signoutRouter = require('./routes/signout.route');
const freeTimeRouter = require('./routes/freeTime.router');
const cabinetRouter = require('./routes/cabinet.route');
const adminChangeReservatioinRouter = require('./routes/adminChangeReservation.route');
const adminDeleteUser = require('./routes/adminDeleteUser.route');
const resDelete = require('./routes/resDelete.route');
const adminAllMasters = require('./routes/adminAllMasters.route');
const adminDeleteMaster = require('./routes/adminDeleteMaster.route');
const adminPassChange = require('./routes/AdminPassChange.router');
const adminCabinet = require('./routes/adminCabinet.router');
const editReviewRouter = require('./routes/editreview.route');

const sessionMiddleware = require('./middlewares/sessions');

const sessionConfig = {
  store: new Filestore(),
  name: 'user_sid',
  secret: process.env.SECRET ?? 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60, // 1 час
    httpOnly: true,
  },
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(session(sessionConfig));
app.use(sessionMiddleware);
app.use(cors({
  origin: 'http://localhost:3000/',
  credentials: true,
  origin: 'http://localhost:3000',
}));

app.use('/reviews', reviewsRoute);
app.use('/portfolio', portfolioRouter);
app.use('/categories', categoriesRoute);
app.use('/masters', mastersRouter);
app.use('/portfolio', portfolioCRouter);
app.use('/admincabinet', adminReservationRouter);
app.use('/signup', clientRouter);
app.use('/servicesreserv', servicesReserv);
app.use('/mastersreserv', mastersReserv);
app.use('/createreserv', createReserv);
app.use('/cabinet', clientRouter);
app.use('/signin', signinRouter);
app.use('/adminform', adminAuthRouter);
app.use('/session', sessionRouter);
app.use('/signout', signoutRouter);
app.use('/freetime', freeTimeRouter);
app.use('/profile', cabinetRouter);
app.use('/adminchangereservation', adminChangeReservatioinRouter);
app.use('/deleteuser', adminDeleteUser);
app.use('/deleteres', resDelete);
app.use('/allmasters', adminAllMasters);
app.use('/deletemaster', adminDeleteMaster);
app.use('/adminpasschange', adminPassChange);
app.use('/masters_services', adminCabinet);
app.use('/editreview', editReviewRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Сервер слушает порт', PORT);
});
