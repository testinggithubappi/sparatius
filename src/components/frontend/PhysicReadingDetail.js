import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import icon1Img from "../../assets/frontend/img/services/icon-1.png";
import icon2Img from "../../assets/frontend/img/services/icon-2.png";
import icon3Img from "../../assets/frontend/img/services/icon-3.png";
import readingsdetail1img from "../../assets/frontend/img/services/psychic-readings-detail-1.jpg";

function PhysicReadingDetail(props) {
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
                  <img src={readingsdetail1img} className="img-responsive" />
                </div>
                <div className="col-md-9 ">
                  <div className="col-md-12 username">
                    <h2 className="text-white text-left">Psychic Alexandra</h2>
                    <p className=" text-left">
                      <a href="#" className="text-white">
                        Gifted Psychic Reader
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 top-rated ">
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
                    <h3 className="">10,376</h3>
                    <h4 className="">Readings</h4>
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

      <section className="sec-pad single-service-page sidebar-page">
        <div className="container">
          <div className="row margin-bottom-2">
            <div className="col-md-4">
              <div className="sec-title text-center font-p">
                <img src={icon1Img} />
                <h2 className="text-purple">Chat</h2>
                <p className=" margin-top-2">Get a live text reading now</p>
                <button className="btn  bg-purple text-white w-33">
                  {" "}
                  $4.99/min{" "}
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sec-title text-center font-p ">
                <img src={icon2Img} />
                <h2 className="text-purple">Voice Call</h2>
                <p className=" margin-top-2">Get a live text reading now</p>
                <button className="btn  bg-purple text-white w-33">
                  {" "}
                  $9.99/min.{" "}
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sec-title text-center font-p ">
                <img src={icon3Img} />
                <h2 className="text-purple">Video Calls</h2>
                <p className=" margin-top-2">Get a live text reading now</p>
                <button className="btn  bg-purple text-white w-33">
                  {" "}
                  $14.99/min.{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 pull-right col-sm-12 col-xs-12">
            <div className="row">
              <div className="single-service-tab-box">
                <div className="tab-title">
                  <ul role="tablist" className="font-weight-bold">
                    <li
                      className="active w-33 text-center"
                      data-tab-name="smart"
                    >
                      <a
                        href="#smart"
                        aria-controls="smart"
                        role="tab"
                        data-toggle="tab"
                      >
                        About My Services
                      </a>
                    </li>
                    <li className="w-33 text-center" data-tab-name="attraction">
                      <a
                        href="#attraction"
                        aria-controls="attraction"
                        role="tab"
                        data-toggle="tab"
                      >
                        About Me
                      </a>
                    </li>
                    <li className="w-33 text-center" data-tab-name="skills">
                      <a
                        href="#skills"
                        aria-controls="skills"
                        role="tab"
                        data-toggle="tab"
                      >
                        All Reviews
                      </a>
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

                    <a
                      href="#"
                      className="thm-btn w-100 uppercase margin-top-2 text-center "
                    >
                      Load More
                    </a>
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

export default PhysicReadingDetail;
