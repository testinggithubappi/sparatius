import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import Loadercomp from "../modules/Loadercomp";

function InviteFriends(props) {
  const [startloader, setloader] = React.useState("none");
  const [inviteInput, setInviteinput] = useState({
    email: "",
  });

  const handleInput = (e) => {
    e.persist();
    setInviteinput({ ...inviteInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    setloader("block");
    const data = {
      email: inviteInput.email,
    };
    console.log(data);
    axios.post("/api/invite_friend", data).then((res) => {
      if (res.data.status == 200) {
        swal("Success", "Email Succesffully Send", "success");
        setInviteinput({
          email: "",
        });
        swal("Success", res.data.msg, "success");
      } else {
        swal("Error", res.data.msg, "error");
      }
      setloader("none");
    });
  };
  return (
    <div>
      <Navbar />
      <Loadercomp startloader={startloader} />
      <section className="inner-banner has-dot-pattern sec-title text-center">
        <div className="container">
          <h2>Invite Friends</h2>
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
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleInput}
                    value={inviteInput.email}
                    required
                  />
                  <i className="fa fa-envelope-o"></i>
                </div>

                <div className="clearfix submit-box">
                  <div className="">
                    <button className="thm-btn w-100" type="submit">
                      Invite
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

export default InviteFriends;
