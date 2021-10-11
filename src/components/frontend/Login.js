import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function Login(props) {
  const history = useHistory();

  const [registerInput, setRegister] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: registerInput.email,
      password: registerInput.password,
    };
    console.log(data);
    axios.post("/api/login", data).then((res) => {
      if (res.data.status == 200) {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_name", res.data.name);
        localStorage.setItem("role", res.data.role);
        swal("Success", res.data.message, "success");
        history.push("/home");
      } else {
        setRegister({
          ...registerInput,
          error_list: res.data.validation_erros,
        });
      }
    });
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
          <h2>Login</h2>
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
                    type="text"
                    className="form-control"
                    placeholder="Email Address*"
                    onChange={handleInput}
                    value={registerInput.email}
                    name="email"
                  />
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div className="form-grp">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleInput}
                    value={registerInput.password}
                    name="password"
                  />
                  <i className="fa fa-lock"></i>
                </div>
                <div className="clearfix submit-box">
                  <div className="pull-left">
                    <button className="thm-btn" type="submit">
                      Login
                    </button>
                  </div>
                  <div className="pull-right">
                    <label>Or login with</label>
                    <ul className="social-icon">
                      <li>
                        <Link className="facebook" to="#">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="twitter" to="#">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="google-plus" to="#">
                          <i className="fa fa-google-plus"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix remember-box">
                  <div className="pull-left">
                    <input type="checkbox" /> <label>Remember Me</label>
                  </div>
                  <div className="pull-right">
                    <Link
                      to="/#"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      <Footer />
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="sec-title text-center">
                <h3 className="text-purple">Forgot Password</h3>
              </div>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="form-grp">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn bg-purple text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
