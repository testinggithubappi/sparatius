import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";

function EcourseDetail(props) {
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
                  <div className="reading-profile mb-0">
                    <div className="reading-profile-inner">
                      <Link
                        to="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                        <img
                          src={readingsprofileImg}
                          className="img-responsive readings-profile-img"
                        />
                      </Link>
                      <div className="shape-rating">
                        <span>Preview this course</span>
                        <img
                          src="img/resources/shape-rating.png"
                          className="img-responsive shape-rating-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 e-courses-detail">
                  <div className="col-md-12 username">
                    <h2 className="text-white text-left ">
                      Learn Tarot Cards With A Tarot Reader - Advance Level
                    </h2>
                  </div>
                  <div className="col-md-9 top-rated ">
                    <p className=" text-left ">
                      Learn Tarot Card Advance Level{" "}
                    </p>
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
                    <h3>$459.00</h3>
                    <button
                      className="thm-btn w-100"
                      type="submit"
                      data-toggle="modal"
                      data-target="#modal2"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" single-service-page sidebar-page">
        <div className="container">
          <div className="col-md-12 pull-right col-sm-12 col-xs-12">
            <div className="row">
              <div className="single-service-tab-box">
                <div className="tab-title">
                  <ul role="tablist" className="font-weight-bold">
                    <li
                      className="active w-33 text-center"
                      data-tab-name="smart"
                    >
                      <Link
                        to="#smart"
                        aria-controls="smart"
                        role="tab"
                        data-toggle="tab"
                      >
                        What you’ll Learn
                      </Link>
                    </li>
                    <li className="w-33 text-center" data-tab-name="attraction">
                      <Link
                        to="#attraction"
                        aria-controls="attraction"
                        role="tab"
                        data-toggle="tab"
                      >
                        Description
                      </Link>
                    </li>
                    <li className="w-33 text-center" data-tab-name="skills">
                      <Link
                        to="#skills"
                        aria-controls="skills"
                        role="tab"
                        data-toggle="tab"
                      >
                        All Reviews
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content font-p">
                  <div
                    className="tab-pane fade in active signle-tab-content"
                    id="smart"
                  >
                    <p>
                      I am an open, accepting and non- judgemental reader. With
                      me you have nothing to hide, ever. I am here to share the
                      love and the energy of the Divine with you with the love
                      and care of a mother.
                      <br />
                      <br />
                      iaculis suscipit nulla. Etiam venenatis augue massa, nec
                      dictum scelerisque velit egestas eget. Morbi ultricies
                      tortor non dolor vehicula euismod id erat vitae, iaculis
                      suscipit nulla. Etiam venenatis augue massa, nec dictum
                      sapien suscipit sit amet. Curabitur sit amet tempus felis,
                      ac ultrices libero. Duis dignissim aliquam mi quis
                      feugiat.
                      <br />
                      <br />
                      <h2>This course includes</h2>
                      <ul>
                        <li>5.5 hours on-demand video</li>
                        <li>1 downloadable resource</li>
                        <li>Full lifetime access</li>
                        <li>Access on mobile and TV</li>
                        <li>Certificate of completion</li>
                      </ul>
                      <br />
                      <h2>Requirements</h2>
                      Rider-Waite Tarot card deck or Morgan Greer or any deck
                      that has the Rider-Waite Structure Notebook for
                      Journalling
                    </p>
                  </div>
                  <div
                    className="tab-pane fade signle-tab-content"
                    id="attraction"
                  >
                    <p>
                      I am an open, accepting and non- judgemental reader. With
                      me you have nothing to hide, ever. I am here to share the
                      love and the energy of the Divine with you with the love
                      and care of a mother.
                      <br />
                      <br />
                      iaculis suscipit nulla. Etiam venenatis augue massa, nec
                      dictum scelerisque velit egestas eget. Morbi ultricies
                      tortor non dolor vehicula euismod id erat vitae, iaculis
                      suscipit nulla. Etiam venenatis augue massa, nec dictum
                      sapien suscipit sit amet. Curabitur sit amet tempus felis,
                      ac ultrices libero. Duis dignissim aliquam mi quis
                      feugiat.
                      <br />
                      <br />
                      Sed in tempor odio. Nulla condimentum accumsan turpis nec
                      feugiat. Vivamus nec molestie magna. Aliquam sit amet
                      dictum augue, tempor mattis justo. Sed ultricies sapien
                      imperdiet venenatis varius. Sed quam odio, aliquet eu
                      dapibus ut, scelerisque eget tellus. Nullam euismod
                      condimentum tincidunt.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris aliquam lorem et sagittis laoreet. Morbi in sodales
                      ante. Vivamus interdum dictum ante, vitae scelerisque
                      velit egestas eget. Morbi ultricies tortor non dolor
                      vehicula euismod id erat vitae, iaculis suscipit nulla.{" "}
                      <br />
                      <br />
                      Sed in tempor odio. Nulla condimentum accumsan turpis nec
                      feugiat. Vivamus nec molestie magna. Aliquam sit amet
                      dictum augue, tempor mattis justo. Sed ultricies sapien
                      imperdiet venenatis varius. Sed quam odio, aliquet eu
                      dapibus ut, scelerisque eget tellus. Nullam euismod
                      condimentum tincidunt.
                    </p>
                  </div>
                  <div className="tab-pane fade signle-tab-content" id="skills">
                    <div>
                      <p className="font-weight-bold">Chrissiouxsie</p>
                      <small>Sep 30, 2021</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris aliquam lorem et sagittis laoreet. Morbi in
                        sodales ante. Vivamus interdum dictum ante, vitae
                        scelerisque velit egestas eget.
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p className="font-weight-bold">Chrissiouxsie</p>
                      <small>Sep 30, 2021</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris aliquam lorem et sagittis laoreet. Morbi in
                        sodales ante. Vivamus interdum dictum ante, vitae
                        scelerisque velit egestas eget.
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p className="font-weight-bold">Chrissiouxsie</p>
                      <small>Sep 30, 2021</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris aliquam lorem et sagittis laoreet. Morbi in
                        sodales ante. Vivamus interdum dictum ante, vitae
                        scelerisque velit egestas eget.
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p className="font-weight-bold">Chrissiouxsie</p>
                      <small>Sep 30, 2021</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris aliquam lorem et sagittis laoreet. Morbi in
                        sodales ante. Vivamus interdum dictum ante, vitae
                        scelerisque velit egestas eget.
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p className="font-weight-bold">Chrissiouxsie</p>
                      <small>Sep 30, 2021</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris aliquam lorem et sagittis laoreet. Morbi in
                        sodales ante. Vivamus interdum dictum ante, vitae
                        scelerisque velit egestas eget.
                      </p>
                    </div>
                    <Link
                      to="#"
                      className="thm-btn w-100 uppercase margin-top-2 text-center "
                    >
                      Load More
                    </Link>
                  </div>
                </div>
              </div>
              <span className="space-60"></span>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EcourseDetail;
