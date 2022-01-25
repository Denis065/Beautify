import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav.jsx'
import Home from "./components/Home/Home.jsx";
import Categories from "./components/Categories/Categories.jsx";
import ServiceList from "./components/ServiceList/ServiceList.jsx"
import MasterList from "./components/MasterList/MasterList.jsx"
import TimeList from "./components/TimeList/TimeList.jsx"
import About from "./components/About/About.jsx"
import Review from "./components/Review/Review.jsx"
import Admin from "./components/AdminForm/AdminForm.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Portfolio from "./components/Portfolio/Portfolio.jsx"
import PortfolioCard from "./components/PortfolioCard/PortfolioCard.jsx"
import AdminCabinet from "./components/AdminCabinet/AdminCabinet.jsx";
import ReservationCategories from './components/ReservationCAtegories/ReservationCategories.jsx';
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Profile from "./components/Profile/Profile"
import AdminMasters from './components/AdminMasters/AdminMasters.jsx';
import AdminReview from './components/AdminReview/AdminReview.jsx';
import AdminChangePass from './components/AdminChangePass/AdminChangePass.jsx';
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SESSION_FETCH' })
  })


  return (
    <BrowserRouter>
      <Nav />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/categories">
          <Categories />
        </Route>

        <Route exact path="/categories/:categoryname/:id">
          <ServiceList />
        </Route>

        <Route exact path="/categories/:categoryname/:service/:id">
          <MasterList />
        </Route>

        <Route exact path="/categories/:categoryname/:service/:master">
          <TimeList />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/reviews">
          <Review />
        </Route>

        <Route exact path="/adminform">
          <Admin />
        </Route>

        <Route exact path="/admincabinet">
          <AdminCabinet />
        </Route>

        <Route exact path="/adminmasters">
          <AdminMasters />
        </Route>

        <Route exact path="/adminreview">
          <AdminReview />
        </Route>

        <Route exact path="/adminchangepass">
          <AdminChangePass />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/signin">
          <SignIn />
        </Route>

        <Route exact path="/portfolio">
          <Portfolio />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/portfolio/:masterId">
          <PortfolioCard />
        </Route>
        <Route exact path="/reservation">
          <ReservationCategories />
        </Route>
      </Switch>


      <Contact />

    </BrowserRouter>
  );
}

export default App;
