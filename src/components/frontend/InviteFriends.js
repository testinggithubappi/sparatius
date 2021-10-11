import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function InviteFriends(props) {
  return (
    <div>
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
              <form action="#">
                <div className="form-grp">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
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
    </div>
  );
}

export default InviteFriends;
