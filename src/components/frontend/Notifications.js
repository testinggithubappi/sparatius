import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function Notifications(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Notifications</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            rhoncus turpis.
            <br /> Mauris sagittis eleifend arcu, vitae pretium massa pharetra
            eu.{" "}
          </p>
        </div>
      </section>
      <section className="margin-top-3 margin-bottom-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 notificationspage">
              <ul className="font-p">
                <li className="gray-bg ">
                  <Link to="#">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Link>
                </li>
                <li className="gray-bg">
                  <Link to="#">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Link>
                </li>
                <li className="gray-bg">
                  <Link to="#">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Link>
                </li>
                <li className="gray-bg">
                  <Link to="#">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Link>
                </li>
                <li className="gray-bg">
                  <Link to="#">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Link>
                </li>
                <li className="gray-bg">
                  <Link to="#">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Link>
                </li>
                <li className="gray-bg">
                  <Link to="#">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Link>
                </li>
                <li className="gray-bg">
                  <Link to="#">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </Link>
                </li>
              </ul>
            </div>
            <nav aria-label="..." className="text-center">
              <ul className="pagination font-p">
                <li className="page-item">
                  {" "}
                  <Link className="page-link" to="#" tabindex="-1">
                    Previous
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item active">
                  {" "}
                  <Link className="page-link" to="#">
                    2 <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  {" "}
                  <Link className="page-link" to="#">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Notifications;
