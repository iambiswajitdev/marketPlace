import "./assets/css/styel.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as API from "./helpers/api";

import Footer from "./components/footer";
import MegaMenu from "./components/megaMenu";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Verification from "./pages/verification";
import ForgotPassword from "./pages/forgotPassword";
import VendorLogin from "./pages/vendor/login";
//REDUX
import { useDispatch } from "react-redux";

//USER
import Account from "./pages/user/account";
import Address from "./pages/user/address";
import ConfirmPassword from "./pages/confirmPassword";
import PanCard from "./pages/user/panCard";
import Order from "./pages/user/order";
import Cart from "./pages/cart";
import SingleProduct from "./pages/product/singleProduct";
import Wishlist from "./pages/user/wishlist";
import VendorRegister from "./pages/vendor/register";
import DashBoard from "./pages/vendor/dashBoard";

function App() {
  const dispatch = useDispatch();

  const getStaticProps = async () => {
    try {
      const response = await API.category();
      if (response.status === 200) {
        let category = [];
        response.data.data.map((item) => {
          return category.push(item);
        });
        dispatch({
          type: "CATEGORY",
          payload: {
            category: category,
          },
        });
      }
    } catch (e) {}
  };

  getStaticProps();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MegaMenu />
          <Home />
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/vendor/login">
          <VendorLogin />
        </Route>
        <Route path="/vendor/register">
          <VendorRegister />
        </Route>
        <Route path="/email_verification">
          <Verification />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/confirm-password">
          <ConfirmPassword />
        </Route>
        <Route path="/account">
          <MegaMenu />
          <Account />
          <Footer />
        </Route>
        <Route path="/address">
          <MegaMenu />
          <Address />
          <Footer />
        </Route>
        <Route path="/pan-card-information">
          <MegaMenu />
          <PanCard />
          <Footer />
        </Route>
        <Route path="/orders">
          <MegaMenu />
          <Order />
          <Footer />
        </Route>

        <Route path="/wishlist">
          <MegaMenu />
          <Wishlist />
          <Footer />
        </Route>

        <Route path="/cart">
          <MegaMenu />
          <Cart />
          <Footer />
        </Route>

        <Route path="/product">
          <MegaMenu />
          <SingleProduct />
          <Footer />
        </Route>
        <Route path="/vendor/dashBoard">
          <DashBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
