import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function ContactUs(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            rhoncus turpis.
            <br /> Mauris sagittis eleifend arcu, vitae pretium massa pharetra
            eu.{" "}
          </p>
        </div>
      </section>

      <section className=" sec-padding margin-top-4 margin-bottom-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 margin-top-4">
              <div className="sec-title-container less-padding-5 text-left"></div>
              <div className="bg-white font-p">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      id="phone"
                      className="form-control input-1"
                      type="text"
                      placeholder="Name"
                      name="Title"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <input
                      id="phone"
                      className="form-control input-1"
                      type="text"
                      placeholder="Email Here"
                      name="Title"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <input
                      id="phone"
                      className="form-control input-1"
                      type="text"
                      placeholder="Type"
                      name="Title"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 margin-top-1">
                    <textarea
                      className="form-control input-1"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Enter Desdcription"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <br />
                  <div className="col-md-12">
                    <button type="submit" className="thm-btn uppercase">
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUs;
