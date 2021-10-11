import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function Register(props) {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState({ value: "" });

  const [registerInput, setRegister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contactno: "",
    password_confirmation: "",
    selectdVal: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    e.persist();
    // setSelectedOption(e.target.value);
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname: registerInput.firstname,
      lastname: registerInput.lastname,
      contactno: registerInput.contactno,
      email: registerInput.email,
      password: registerInput.password,
      password_confirmation: registerInput.password_confirmation,
      roletype: registerInput.selectdVal,
    };
    console.log(data);
    axios.post("/api/register", data).then((res) => {
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

      <section className="inner-banner has-dot-pattern text-center sec-title">
        <div className="container">
          <h2>Sign Up</h2>
          <p className="font-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            rhoncus turpis.
            <br /> Mauris sagittis eleifend arcu, vitae pretium massa pharetra
            eu.{" "}
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
                    placeholder="First Name"
                    onChange={handleInput}
                    value={registerInput.firstname}
                    name="firstname"
                  />
                  <i className="fa fa-user"></i>
                </div>

                <div className="form-grp">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={handleInput}
                    value={registerInput.lastname}
                    name="lastname"
                  />
                  <i className="fa fa-user"></i>
                </div>

                <div className="form-grp">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    onChange={handleInput}
                    value={registerInput.email}
                    name="email"
                  />
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div className="form-grp">
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleInput}
                    value={registerInput.password}
                    name="password"
                  />
                  <i className="fa fa-lock"></i>
                </div>
                <div className="form-grp">
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={handleInput}
                    value={registerInput.password_confirmation}
                    name="password_confirmation"
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <div className="form-grp">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact No"
                    onChange={handleInput}
                    value={registerInput.contactno}
                    name="contactno"
                  />
                  <i className="fa fa-user"></i>
                </div>

                <select
                  name="selectdVal"
                  value={registerInput.selectdVal}
                  onChange={handleChange}
                  className="form-control form-grp singup-select"
                  id="exampleFormControlSelect1"
                >
                  <option value="">Slect Role</option>
                  <option value="customer">Customer</option>
                  <option value="provider">Provider</option>
                </select>

                <div className="clearfix submit-box">
                  <div className="pull-left">
                    <button className="thm-btn" type="submit">
                      SignUp
                    </button>
                  </div>
                </div>
                <div className=" font-p">
                  <p>
                    You must be at least 18 years old to sign up for Spiritus
                    Tarot.By signing up you agree to the{" "}
                    <Link to="privacy-policy.html"> Privacy Policy</Link> and{" "}
                    <Link to="terms-of-services.html">Terms of Service</Link>{" "}
                    <br />
                    Already have an account?<Link to="#"> Login</Link> Or
                    Connect with
                  </p>
                </div>

                <Link className="col-md-6 " to="#">
                  <button className="btn btn-primary w-100">
                    Connect with Facebook{" "}
                  </button>
                </Link>
                <Link className="col-md-6" to="#">
                  <button className="btn btn-danger w-100">
                    Connect with Gmail{" "}
                  </button>
                </Link>
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

export default Register;
