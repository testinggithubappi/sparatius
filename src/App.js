import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MasterLayout from "./layouts/frontend/MasterLayout";
import Home from "./components/frontend/Home";
import Login from "./components/frontend/Login";
import Register from "./components/frontend/Register";

import Chat from "./components/frontend/Chat";
import ChatProvider from "./components/frontend/ChatProvider";
import ContactUs from "./components/frontend/ContactUs";
import Eclassess from "./components/frontend/Eclassess";
import EditProfile from "./components/frontend/EditProfile";
import Favourites from "./components/frontend/Favourites";
import InviteFriends from "./components/frontend/InviteFriends";
import Notifications from "./components/frontend/Notifications";
import PhysicReading from "./components/frontend/PhysicReading";

import PhysicReadingDetail from "./components/frontend/PhysicReadingDetail";
import PrivacyPolicy from "./components/frontend/PrivacyPolicy";
import RatingReviews from "./components/frontend/RatingReviews";
import Services from "./components/frontend/Services";
import TarotReaders from "./components/frontend/TarotReaders";

import TermsCondition from "./components/frontend/TermsCondition";
import VideoCall from "./components/frontend/VideoCall";
import VideoCalllProvider from "./components/frontend/VideoCalllProvider";
import AudioCall from "./components/frontend/AudioCall";
import AudioCallProvider from "./components/frontend/AudioCallProvider";

import aboutUs from "./components/frontend/aboutUs";
import PaymentHistory from "./components/frontend/PaymentHistory";
import EditAdvisorProfile from "./components/frontend/EditAdvisorProfile";
import Settings from "./components/frontend/Settings";
import OrderList from "./components/frontend/OrderList";
import EcourseDetail from "./components/frontend/EcourseDetail";
import Rating from "./components/frontend/Rating";
import ForgetPassword from "./components/frontend/ForgetPassword";
import EcourseGet from "./components/frontend/EcourseGet";

// import Login from "./layouts/frontend/Login";
// import Register from "./layouts/frontend/Register";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import axios from "axios";

axios.defaults.baseURL = "http://202.142.180.146:90/sparatius/public";
axios.defaults.headers.post["accept"] = "application/json";
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
// axios.defaults.withCredentials = true;

class App extends Component {
  componentDidMount() {
    // axios.get("/api/TokenVerify").then((res) => {
    //   console.log(res);
    //   this.props.history.push({
    //     pathname: `/target-path`,
    //     state: variable_to_transfer
    // });
    // if (res.data.status == 200) {
    //   localStorage.removeItem("auth_token");
    //   localStorage.removeItem("auth_name");
    //   swal("Success", res.data.message, "success");
    //   history.push("/home");
    // }
    // });
  }

  render() {
    return (
      <div className="App">
        <Router forceRefresh>
          <Switch>
            <PublicRoute
              restricted={false}
              path="/"
              exact={true}
              name="Home"
              component={Home}
            />
            <PublicRoute
              restricted={false}
              path="/home"
              name="Home"
              component={Home}
            />
            <PublicRoute
              restricted={false}
              path="/aboutus"
              name="Home"
              component={aboutUs}
            />
            <PublicRoute
              restricted={false}
              path="/contact-us"
              name="ContactUs"
              component={ContactUs}
            />
            <PublicRoute
              restricted={false}
              path="/eclassess"
              name="Eclassess"
              component={Eclassess}
            />
            <PublicRoute
              restricted={false}
              path="/physic-reading"
              name="PhysicReading"
              component={PhysicReading}
            />
            <PublicRoute
              restricted={false}
              path="/provider/detail/:userid/:serviceid"
              name="PhysicReadingDetail"
              component={PhysicReadingDetail}
            />
            <PublicRoute
              restricted={false}
              path="/privacy-policy"
              name="PrivacyPolicy"
              component={PrivacyPolicy}
            />
            <PublicRoute
              restricted={false}
              path="/rating-reviews"
              name="RatingReviews"
              component={RatingReviews}
            />
            <PublicRoute
              restricted={false}
              path="/services"
              name="Services"
              component={Services}
            />
            <PublicRoute
              restricted={false}
              path="/service/:slug"
              name="TarotReaders"
              component={TarotReaders}
            />
            <PublicRoute
              restricted={false}
              path="/terms-condition"
              name="TermsCondition"
              component={TermsCondition}
            />
            <PublicRoute
              restricted={false}
              path="/ecourse-detail/:id"
              name="EcourseDetail"
              component={EcourseDetail}
            />
            <PublicRoute
              restricted={false}
              path="/forget-password/:keylink"
              name="ForgetPassword"
              component={ForgetPassword}
            />
            <PublicRoute
              restricted={false}
              path="/e-course/:id"
              name="EcourseGet"
              component={EcourseGet}
            />

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              {localStorage.getItem("auth_token") ? <Redirect /> : <Register />}
            </Route>

            <PrivateRoute path="/chat/:id" name="Chat" component={Chat} />
            <PrivateRoute
              path="/provider/chat/:id/:customerid"
              name="Customer"
              component={ChatProvider}
            />

            <PrivateRoute
              path="/edit-profile"
              name="EditProfile"
              component={EditProfile}
            />
            <PrivateRoute
              path="/favourites"
              name="Favourites"
              component={Favourites}
            />
            <PrivateRoute
              path="/invite-friends"
              name="InviteFriends"
              component={InviteFriends}
            />
            <PrivateRoute
              path="/notifications"
              name="Notifications"
              component={Notifications}
            />
            <PrivateRoute
              path="/video-call/:id"
              name="VideoCall"
              component={VideoCall}
            />
            <PrivateRoute
              path="/provider/video-call/:id"
              name="VideoCalllProvider"
              component={VideoCalllProvider}
            />
            <PrivateRoute
              path="/audio-call/:id"
              name="AudioCall"
              component={AudioCall}
            />
            <PrivateRoute
              path="/provider/audio-call/:id"
              name="AudioCallProvider"
              component={AudioCallProvider}
            />
            <PrivateRoute
              path="/payment-history"
              name="PaymentHistory"
              component={PaymentHistory}
            />
            <PrivateRoute
              path="/edit-advisorprofile"
              name="EditAdvisorProfile"
              component={EditAdvisorProfile}
            />
            <PrivateRoute
              path="/settings"
              name="Settings"
              component={Settings}
            />
            <PrivateRoute
              path="/order-list"
              name="OrderList"
              component={OrderList}
            />
            <PrivateRoute path="/raitng" name="Rating" component={Rating} />

            <Route
              path="/facebook"
              component={() => {
                window.location.href = "https://facebook.com";
                return null;
              }}
            />
            <Route
              path="/twitter"
              component={() => {
                window.location.href = "https://twitter.com";
                return null;
              }}
            />
            <Route
              path="/google-plus"
              component={() => {
                window.location.href = "https://googleplus.com";
                return null;
              }}
            />
            <Route
              path="/linkedin"
              component={() => {
                window.location.href = "https://linkedin.com";
                return null;
              }}
            />

            {/* <Redirect to="/home" /> */}

            {/* <Route path="/login" name="Login" component={Login} />
            <Route path="/register" name="Register" component={Register} /> */}

            {/* <Route
              path="/"
              name=""
              render={(props) => <MasterLayout {...props} />}
            /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
