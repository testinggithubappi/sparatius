import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import fire from "../../config/firebase";
import { getDatabase, set, ref } from "firebase/database";
import * as firebase from "@firebase/app";
import Loadercomp from "../modules/Loadercomp";

function Login(props) {
  const history = useHistory();
  const [startloader, setloader] = React.useState("none");
  const [editInput, setEditInput] = useState({
    showmodal: false,
  });
  const [registerInput, setRegister] = useState({
    email: "",
    password: "",
    forgetemail: "",
  });
  const opeModal = (e) => {
    // e.persist();
    // console.log(e);

    console.log("ddd");
    setEditInput({
      showmodal: true,
    });
  };
  const closeModal = (e) => {
    e.persist();
    console.log(e);
    setEditInput({
      showmodal: false,
    });
  };
  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    setloader("block");
    const data = {
      email: registerInput.email,
      password: registerInput.password,
    };
    console.log(data);
    axios.post("/api/login", data).then((res) => {
      console.log(res);
      setloader("none");
      if (res.data.status == 200) {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_name", res.data.name);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("user_id", res.data.id);
        // swal("Success", res.data.message, "success");
        setUserOnlineStatus(res.data.id);
      } else {
        swal("warning", "Invalid Email and Password", "warning");
        // setRegister({
        //   ...registerInput,
        //   error_list: res.data.validation_erros,
        // });
      }
    });
  };
  const forgetSubmit = (e) => {
    e.preventDefault();

    console.log("sss");

    setloader("block");
    const data = {
      email: registerInput.forgetemail,
    };
    console.log(data);
    axios.post("/api/forgetpassword", data).then((res) => {
      setloader("none");
      if (res.data.status == 200) {
        swal("Success", res.data.msg, "success");
        setEditInput({
          showmodal: false,
        });
      } else {
        swal("Error", res.data.msg, "error");
      }
    });
  };

  const setUserOnlineStatus = async (user_id) => {
    let database = getDatabase(fire);
    await set(ref(database, "users/" + user_id), {
      online: true,
    });
    history.push("/home");
  };

  console.log("setEditInput.showmodal", setEditInput.showmodal);
  return (
    <div>
      <Navbar />
      <Loadercomp startloader={startloader} />
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
                    placeholder="Email Address"
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
                  {/* <div className="pull-right">
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
                  </div> */}
                </div>
                <div className="clearfix remember-box">
                  <div className="pull-left">
                    {/* <input type="checkbox" /> <label>Remember Me</label> */}
                  </div>
                  <div className="pull-right">
                    <button
                      type="button"
                      onClick={(e) => {
                        opeModal(e);
                      }}
                      className="ForgetPassword"
                    >
                      Forgot Password?
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
      <div
        className={"modal fade " + (editInput.showmodal ? "in" : "")}
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: editInput.showmodal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="sec-title text-center">
                <h3 className="text-purple">Forgot Password</h3>
              </div>
            </div>
            <form onSubmit={forgetSubmit} action="#">
              <div className="modal-body">
                <div className="form-grp">
                  <input
                    required
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="forgetemail"
                    onChange={handleInput}
                    value={registerInput.forgetemail}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={closeModal}>
                  Close
                </button>
                <button type="submit" className="btn bg-purple text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
