import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import gfgLogo from "../../assets/frontend/img/logo.png";
import profilePicimg from "../../assets/frontend/img/resources/profile-pic.jpg";
import fire from "../../config/firebase";
import { getDatabase, set, ref } from "firebase/database";

import { getList } from "../../services/services";

function Navbar(props) {
  const history = useHistory();
  const [servicelist, setServicelist] = useState([]);

  useEffect(() => {
    getService();

    // console.log(props);
  }, []);
  const getService = async () => {
    let response = await getList();
    response = await response.data.services;
    setServicelist(response);
    if (props.parentCallback) {
      props.parentCallback(response);
    }
  };

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/logout").then((res) => {
      if (res.data.status == 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        swal("Success", res.data.message, "success");
        setUserOnlineStatus(localStorage.getItem("user_id"));
      }
    });
  };

  const setUserOnlineStatus = async (user_id) => {
    let database = getDatabase(fire);
    await set(ref(database, "users/" + user_id), {
      online: false,
    });
    history.push("/home");
  };

  var AuthButton = "";

  if (!localStorage.getItem("auth_token")) {
    AuthButton = (
      <ul className="nav navbar-nav navbar-right right-box">
        <li>
          <Link className="login-btn" to="/login">
            Log in
          </Link>
        </li>

        <li>
          <Link className="login-btn" to="/register">
            Sign up
          </Link>
        </li>
      </ul>
    );
  } else {
    let role = localStorage.getItem("role");
    if (role == "provider") {
      AuthButton = (
        <ul className="nav navbar-nav navbar-right right-box">
          <li>
            <Link to="/edit-advisorprofile">
              <img src={profilePicimg} className="profile-pic" />
            </Link>
          </li>
          {/* <li>
            <Link to="/notifications">
              <span className="phone-only">Notification</span>
              <i className="fa fa-bell"></i>
              <span className="count">3</span>
            </Link>
          </li> */}
          <li>
            <Link
              role="button"
              data-toggle="collapse"
              to="#sidebarCollapse"
              aria-expanded="false"
              aria-controls="sidebarCollapse"
            >
              <span className="phone-only">Side Menu</span>
              <i className="fa fa-bars"></i>
            </Link>
          </li>
          <li>
            <button onClick={logoutSubmit} className="login-btn" to="/Logout">
              Logout
            </button>
          </li>
        </ul>
      );
    }
    if (role == "customer") {
      AuthButton = (
        <ul className="nav navbar-nav navbar-right right-box">
          <li>
            <Link to="/edit-profile">
              <img src={profilePicimg} className="profile-pic" />
            </Link>
          </li>
          {/* <li>
            <Link to="/notifications">
              <span className="phone-only">Notification</span>
              <i className="fa fa-bell"></i>
              <span className="count">3</span>
            </Link>
          </li> */}
          <li>
            <Link
              role="button"
              data-toggle="collapse"
              to="#sidebarCollapse"
              aria-expanded="false"
              aria-controls="sidebarCollapse"
            >
              <span className="phone-only">Side Menu</span>
              <i className="fa fa-bars"></i>
            </Link>
          </li>
          <li>
            <button onClick={logoutSubmit} className="login-btn" to="/Logout">
              Logout
            </button>
          </li>
        </ul>
      );
    }
    if (role == "provider") {
      AuthButton = (
        <ul className="nav navbar-nav navbar-right right-box">
          <li>
            <Link to="/edit-advisorprofile">
              <img src={profilePicimg} className="profile-pic" />
            </Link>
          </li>
          {/* <li>
            <Link to="/notifications">
              <span className="phone-only">Notification</span>
              <i className="fa fa-bell"></i>
              <span className="count">3</span>
            </Link>
          </li> */}
          <li>
            <Link
              role="button"
              data-toggle="collapse"
              to="#sidebarCollapse"
              aria-expanded="false"
              aria-controls="sidebarCollapse"
            >
              <span className="phone-only">Side Menu</span>
              <i className="fa fa-bars"></i>
            </Link>
          </li>
          <li>
            <button onClick={logoutSubmit} className="login-btn" to="/Logout">
              Logout
            </button>
          </li>
        </ul>
      );
    }
  }

  return (
    <div>
      <header className="header header-fixed header-1">
        <nav className="navbar navbar-default header-navigation stricky">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#main-nav-bar"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                <img src={gfgLogo} alt="Awesome Image" />
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="main-nav-bar">
              <ul className="nav navbar-nav navigation-box">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>

                <li>
                  <Link to="/services">Services</Link>
                  <ul className="sub-menu">
                    {servicelist.map((item, index) => (
                      <li key={item.id}>
                        <Link to={"/service/" + item.slug}>{item.name}</Link>
                      </li>
                    ))}
                    {/* <li>
                      <Link to="/tarot-readers">Tarot Readers</Link>
                    </li>
                    <li>
                      <Link to="/physic-reading">Psychic Readers</Link>
                    </li> */}
                  </ul>
                </li>

                <li>
                  <Link to="/eclassess">E-Classes</Link>
                </li>

                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
              {AuthButton}
            </div>
          </div>
        </nav>
      </header>

      <section className="hidden-sidebar collapse" id="sidebarCollapse">
        <button
          className="close-button"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarCollapse"
          aria-expanded="false"
          aria-controls="sidebarCollapse"
        >
          <i className="fa fa-times"></i>
        </button>
        <div className="single-hidden-sidebar logo">
          <Link to="/">
            <img src={gfgLogo} alt="logo Image" />
          </Link>
        </div>

        <div className="single-hidden-sidebar">
          <ul className="contact-info">
            <li>
              <div className="text-box">
                <Link to="/services">Categories</Link>
              </div>
            </li>

            <li>
              <div className="text-box">
                <Link to="/order-list">My Orders</Link>
              </div>
            </li>

            <li>
              <div className="text-box">
                <Link to="/favourites">Favourite Advisor</Link>
              </div>
            </li>

            <li>
              <div className="text-box">
                <Link to="/invite-friends">Invite Friends</Link>
              </div>
            </li>

            <li>
              <div className="text-box">
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </li>

            <li>
              <div className="text-box">
                <Link to="/settings">Settings</Link>
              </div>
            </li>

            <li>
              <div className="text-box">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </li>

            <li>
              <div className="text-box">
                <Link to="/terms-condition">Terms and Condition</Link>
              </div>
            </li>

            {/* <li>
              <div className="text-box">
                <Link to="login.html">Logout</Link>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
