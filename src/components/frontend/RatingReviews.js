import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function RatingReviews(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern sec-title text-center">
        <div className="container">
          <h2>Ratings & Reviews</h2>
        </div>
      </section>
      <section className="sec-pad ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="sec-title">
                <h4 className="font-p font-weight-bold">YOUR WORDS MATTER</h4>
                <h2 className="text-purple">
                  We Would love to hear about your experience!
                </h2>
                <p className="font-p text-just margin-top-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 login-register font-p left-side">
              <form action="#">
                <label className="form-check-label">Full Name</label>
                <div className="form-grp bg-white">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                  <i className="fa fa-user"></i>
                </div>

                <label className="form-check-label">Email</label>
                <div className="form-grp bg-white">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <i className="fa fa-envelope-o"></i>
                </div>

                <label className="form-check-label">Your Rating</label>
                <ul className="list-inline review-star text-left star-color">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>

                <textarea
                  className="form-control margin-top-2"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  placeholder="Write Feedback"
                  style={{ height: "auto" }}
                ></textarea>

                <div className="">
                  <button className="thm-btn margin-top-2 w-100" type="submit">
                    Submit Reviews
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default RatingReviews;
