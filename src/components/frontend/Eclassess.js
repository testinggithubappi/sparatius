import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";

function Eclassess(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>E-Classes</h2>
        </div>
      </section>

      <section className="sec-pad faq-page shop-sidebar sidebar-page">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <Link to="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </Link>
                  <div className="shape-rating">
                    <span>Top Rated</span>
                    <ul className="list-inline review-star">
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
                    <img
                      src={shaperatingImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <Link to="#">Psychic Alexandra</Link>
                  </h3>
                  <small className="color-black">$59.00</small>
                </div>

                <div className="readingsContainerPrice">
                  <div className="text-center ">
                    <h3 className="margin-top-1">
                      <Link to="#" className="text-white">
                        Enroll Course
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <Link to="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </Link>
                  <div className="shape-rating">
                    <span>Top Rated</span>
                    <ul className="list-inline review-star">
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
                    <img
                      src={shaperatingImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <Link to="#">Psychic Alexandra</Link>
                  </h3>
                  <small className="color-black">$59.00</small>
                </div>

                <div className="readingsContainerPrice">
                  <div className="text-center ">
                    <h3 className="margin-top-1">
                      <Link to="#" className="text-white">
                        Enroll Course
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <Link to="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </Link>
                  <div className="shape-rating">
                    <span>Top Rated</span>
                    <ul className="list-inline review-star">
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
                    <img
                      src={shaperatingImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <Link to="#">Psychic Alexandra</Link>
                  </h3>
                  <small className="color-black">$59.00</small>
                </div>

                <div className="readingsContainerPrice">
                  <div className="text-center ">
                    <h3 className="margin-top-1">
                      <Link to="#" className="text-white">
                        Enroll Course
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <Link to="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </Link>
                  <div className="shape-rating">
                    <span>Top Rated</span>
                    <ul className="list-inline review-star">
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
                    <img
                      src={shaperatingImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <Link to="#">Psychic Alexandra</Link>
                  </h3>
                  <small className="color-black">$59.00</small>
                </div>

                <div className="readingsContainerPrice">
                  <div className="text-center ">
                    <h3 className="margin-top-1">
                      <Link to="#" className="text-white">
                        Enroll Course
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <Link to="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </Link>
                  <div className="shape-rating">
                    <span>Top Rated</span>
                    <ul className="list-inline review-star">
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
                    <img
                      src={shaperatingImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <Link to="#">Psychic Alexandra</Link>
                  </h3>
                  <small className="color-black">$59.00</small>
                </div>

                <div className="readingsContainerPrice">
                  <div className="text-center ">
                    <h3 className="margin-top-1">
                      <Link to="#" className="text-white">
                        Enroll Course
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <Link to="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </Link>
                  <div className="shape-rating">
                    <span>Top Rated</span>
                    <ul className="list-inline review-star">
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
                    <img
                      src={shaperatingImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <Link to="#">Psychic Alexandra</Link>
                  </h3>
                  <small className="color-black">$59.00</small>
                </div>

                <div className="readingsContainerPrice">
                  <div className="text-center ">
                    <h3 className="margin-top-1">
                      <Link to="#" className="text-white">
                        Enroll Course
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <Link to="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </Link>
                  <div className="shape-rating">
                    <span>Top Rated</span>
                    <ul className="list-inline review-star">
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
                    <img
                      src={shaperatingImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <Link to="#">Psychic Alexandra</Link>
                  </h3>
                  <small className="color-black">$59.00</small>
                </div>

                <div className="readingsContainerPrice">
                  <div className="text-center ">
                    <h3 className="margin-top-1">
                      <Link to="#" className="text-white">
                        Enroll Course
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <Link to="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </Link>
                  <div className="shape-rating">
                    <span>Top Rated</span>
                    <ul className="list-inline review-star">
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
                    <img
                      src={shaperatingImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <Link to="#">Psychic Alexandra</Link>
                  </h3>
                  <small className="color-black">$59.00</small>
                </div>

                <div className="readingsContainerPrice">
                  <div className="text-center ">
                    <h3 className="margin-top-1">
                      <Link to="#" className="text-white">
                        Enroll Course
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <Link to="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </Link>
                  <div className="shape-rating">
                    <span>Top Rated</span>
                    <ul className="list-inline review-star">
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
                    <img
                      src={shaperatingImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <Link to="#">Psychic Alexandra</Link>
                  </h3>
                  <small className="color-black">$59.00</small>
                </div>

                <div className="readingsContainerPrice">
                  <div className="text-center ">
                    <h3 className="margin-top-1">
                      <Link to="#" className="text-white">
                        Enroll Course
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
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

export default Eclassess;
