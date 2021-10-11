import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import colImg1 from "../../assets/frontend/img/services/col-img-1.jpg";
import colImg2 from "../../assets/frontend/img/services/col-img-2.jpg";

function OrderList(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Order List</h2>
        </div>
      </section>

      <section className="margin-top-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 left-side">
              <div className="col-md-12 bg-white">
                <h4 className="font-weight-bold">Order # 1234</h4>
                <p>28 Sept 2021, 08:42 PM</p>
                <div className="col-md-3 margin-top-2">
                  <img src={colImg1} className="img-responsive" />
                </div>
                <div className="col-md-6">
                  <h2 className="font-weight-bold">Tarot Readers</h2>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </small>
                  <p className="font-weight-bold">$5.00</p>
                </div>

                <div className="col-md-3 margin-top-2">
                  <a href="#">
                    <button className="thm-btn">Reoder</button>
                  </a>
                </div>
              </div>
              <div className="col-md-12 bg-white margin-top-1">
                <h4 className="font-weight-bold">Order # 1235</h4>
                <p>28 Sept 2021, 08:42 PM</p>
                <div className="col-md-3 margin-top-2">
                  <img src={colImg2} className="img-responsive" />
                </div>
                <div className="col-md-6">
                  <h2 className="font-weight-bold">Psychic Readers</h2>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </small>
                  <p className="font-weight-bold">$10.00</p>
                </div>

                <div className="col-md-3 margin-top-2">
                  <a href="#">
                    <button className="thm-btn">Reoder</button>
                  </a>
                </div>
              </div>
              <div className="col-md-12 bg-white margin-top-1">
                <h4 className="font-weight-bold">Order # 1236</h4>
                <p>28 Sept 2021, 08:42 PM</p>
                <div className="col-md-3 margin-top-2">
                  <img src={colImg1} className="img-responsive" />
                </div>
                <div className="col-md-6">
                  <h2 className="font-weight-bold">Tarot Readers</h2>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </small>
                  <p className="font-weight-bold">$5.00</p>
                </div>

                <div className="col-md-3 margin-top-2">
                  <a href="#">
                    <button className="thm-btn">Reoder</button>
                  </a>
                </div>
              </div>
              <div className="col-md-12 bg-white margin-top-1">
                <h4 className="font-weight-bold">Order # 1237</h4>
                <p>28 Sept 2021, 08:42 PM</p>
                <div className="col-md-3 margin-top-2">
                  <img src={colImg2} className="img-responsive" />
                </div>
                <div className="col-md-6">
                  <h2 className="font-weight-bold">Psychic Readers</h2>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </small>
                  <p className="font-weight-bold">$10.00</p>
                </div>

                <div className="col-md-3 margin-top-2">
                  <a href="#">
                    <button className="thm-btn">Reoder</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default OrderList;
