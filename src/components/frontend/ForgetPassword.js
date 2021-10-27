import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function ForgetPassword(props) {
  const [registerInput, setRegister] = useState({
    email: "",
    password: "",
    keylink: props.match.params.keylink,
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      key: registerInput.keylink,
      password: registerInput.password,
      confirmpassword: registerInput.confirmpassword,
    };
    if (registerInput.password) {
      if (registerInput.password != registerInput.confirmpassword) {
        swal("Error", "Confrim Password Not Match", "error");
      } else {
        console.log(data);
        axios.post("/api/changePassword", data).then((res) => {
          console.log(res);
          if (res.data.status == 200) {
          } else {
            swal("warning", "Invalid Change Password Link", "warning");
          }
        });
      }
    }
  };

  return (
    <div>
      <Navbar />
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
          <Link to="index.html">
            <img src="img/logo.png" alt="Awesome Image" />
          </Link>
        </div>
        <div className="single-hidden-sidebar">
          <h3>About Us</h3>
          <p>
            We must explain to you how all seds this mistakens idea off
            denouncing pleasures and praising pain was born and I will give you
            a completed accounts off the system and expound the actually
            teaching of the great explorer ut of the truth, the master builder
            of human happiness.
          </p>
          <Link to="#" className="thm-btn">
            Consultation
          </Link>
        </div>
        <div className="single-hidden-sidebar">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <div className="icon-box">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="text-box">
                <p>Rock St 12, Newyork City, USA</p>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="fa fa-phone"></i>
              </div>
              <div className="text-box">
                <p>(526) 236-895-4732</p>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="fa fa-envelope-o"></i>
              </div>
              <div className="text-box">
                <p>wefinancesuport@gmail.com</p>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <i className="fa fa-clock-o"></i>
              </div>
              <div className="text-box">
                <p>
                  Week Days: 09.00 to 18.00 <br />
                  Sunday: Closed
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="inner-banner has-dot-pattern sec-title text-center">
        <div className="container">
          <h2>Chnage Passowrd</h2>
          <p className="font-p">
            How all this mistaken idea of denouncing pleasure and praising{" "}
            <br />
            master-builder of human happiness.{" "}
          </p>
        </div>
      </section>

      <section className="sec-pad login-register">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form action="#" onSubmit={registerSubmit}>
                <div className="form-grp">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleInput}
                    value={registerInput.password}
                    name="password"
                    required
                  />
                  <i className="fa fa-lock"></i>
                </div>
                <div className="form-grp">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={handleInput}
                    value={registerInput.confirmpassword}
                    name="confirmpassword"
                    required
                  />
                  <i className="fa fa-lock"></i>
                </div>
                <div className="clearfix submit-box">
                  <div className="pull-left">
                    <button className="thm-btn" type="submit">
                      Change Passowrd
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ForgetPassword;
