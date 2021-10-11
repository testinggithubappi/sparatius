import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import psychicReadingImg from "../../assets/frontend/img/services/psychic-readings-detail-1.jpg";

function EditProfile(props) {
  return (
    <div>
      <Navbar />
      <section
        className="inner-banner has-dot-pattern sec-title text-center"
        style={{ paddingBottom: "0px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 psychic-readings-detail">
              <div className="row">
                <div className="col-md-3">
                  <img src={psychicReadingImg} className="img-responsive" />
                </div>
                <div className="col-md-9 ">
                  <div className="col-md-12 username">
                    <h2 className="text-white text-left">Psychic Alexandra</h2>
                  </div>
                  <div className="col-md-9 top-rated ">
                    <p className=" text-left ">Female</p>
                    <p className=" text-left ">USA</p>
                    <p className=" text-left ">Top Rated</p>
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
                      <li className=" text-white">5.0</li>
                    </ul>
                  </div>

                  <div className="col-md-3 readings">
                    <h3 className="">2021</h3>
                    <h4 className="">Year Joined</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 login-register font-p left-side">
              <form action="#">
                <label className="form-check-label">First Name</label>
                <div className="form-grp bg-white">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <label className="form-check-label">Email</label>
                <div className="form-grp bg-white">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-check-label">Phone</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone No"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-check-label">Gender</label>
                  <div className="form-grp bg-white">
                    <select
                      className="form-select select-field"
                      aria-label="Default select example"
                    >
                      <option selected>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <label className="form-check-label">Country/Region</label>
                  <div className="form-grp bg-white">
                    <select
                      className="form-select select-field"
                      aria-label="Default select example"
                    >
                      <option selected>Country/Region</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-check-label">Zip Code</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Code"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-check-label">Year of Join</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Year"
                    />
                  </div>
                </div>

                <div className="clearfix submit-box">
                  <div className="pull-left">
                    <button className="thm-btn margin-top-2" type="submit">
                      Cancel
                    </button>
                    <button className="thm-btn margin-top-2" type="submit">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default EditProfile;
