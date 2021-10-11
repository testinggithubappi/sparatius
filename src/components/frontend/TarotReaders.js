import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";

function TarotReaders(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Tarot Readers</h2>
        </div>
      </section>

      <section className="sec-pad faq-page shop-sidebar sidebar-page">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-side">
                <div className="single-sidebar">
                  <div className="search-widget">
                    <form action="#">
                      <input type="text" placeholder="type your keyword" />
                      <button type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>Sort by</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div className="sec-title medium text-purple">
                  <h2>Filter By</h2>
                </div>

                <div
                  className="panel-group accordion"
                  id="accordion-one"
                  role="tablist"
                >
                  <div className="panel panel-default">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion-one"
                      href="#accordion-one-collapse-one"
                      className="collapsed"
                      aria-expanded="true"
                    >
                      Reading via
                    </a>

                    <div
                      id="accordion-one-collapse-one"
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-expanded="true"
                    >
                      <div className="inner-box">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck1"
                          >
                            {" "}
                            Any{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck2"
                          >
                            {" "}
                            Live chat{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck3"
                          >
                            {" "}
                            Video call{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck4"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck4"
                          >
                            {" "}
                            Voice call{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion-one"
                      href="#accordion-one-collapse-two"
                      className="collapsed"
                      aria-expanded="false"
                    >
                      Price Range (pm)
                    </a>

                    <div
                      id="accordion-one-collapse-two"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-expanded="false"
                      style={{ height: "0px" }}
                    >
                      <div className="inner-box">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck1"
                          >
                            {" "}
                            Any{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck2"
                          >
                            {" "}
                            Live chat{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck3"
                          >
                            {" "}
                            Video call{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck4"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck4"
                          >
                            {" "}
                            Voice call{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion-one"
                      href="#accordion-one-collapse-three"
                      className="collapsed"
                      aria-expanded="false"
                    >
                      Advisor Reviews
                    </a>

                    <div
                      id="accordion-one-collapse-three"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-expanded="false"
                    >
                      <div className="inner-box">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck1"
                          >
                            {" "}
                            Any{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck2"
                          >
                            {" "}
                            Live chat{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck3"
                          >
                            {" "}
                            Video call{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck4"
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck4"
                          >
                            {" "}
                            Voice call{" "}
                          </label>
                        </div>
                      </div>
                    </div>

                    <ul className="list-group">
                      <li className="list-group-item">
                        Include offline advisors
                        <div className="material-switch pull-right">
                          <input
                            id="someSwitchOptionDefault"
                            name="someSwitchOption001"
                            type="checkbox"
                          />
                          <label
                            for="someSwitchOptionDefault"
                            className="label-default"
                          ></label>
                        </div>
                      </li>
                    </ul>

                    <a
                      href="#"
                      className="thm-btn uppercase margin-top-2 col-md-6 text-center "
                    >
                      Apply
                    </a>
                    <a
                      href="#"
                      className="thm-btn uppercase margin-top-2 col-md-6 text-center black-color"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <a href="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </a>
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
                      src={readingsprofileImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <a href="#">Psychic Alexandra</a>
                  </h3>
                  <small className="color-black">
                    Leading UK Tarot Readings
                  </small>
                </div>
                <div className="readingsContainer">
                  <ul>
                    <li>
                      10,376
                      <p>Readings</p>
                    </li>
                    <li>
                      2016
                      <p>Year joined</p>
                    </li>
                    <li>
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      <p>Favorite</p>
                    </li>
                    <li>
                      <i className="fa fa-bell" aria-hidden="true"></i>
                      <p>Notificaton</p>
                    </li>
                  </ul>
                </div>

                <div className="col-md-12 dec">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris aliquam lorem et sagittis laoreet. Morbi in sodales
                    ante. Vivamus interdum dictum ante, vitae scelerisque velit
                    egestas eget. Morbi ultricies tortor non dolor vehicula
                    euismod id erat vitae,{" "}
                  </p>
                </div>

                <div className="readingsContainerPrice">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" aria-hidden="true"></i>
                        <br />
                        $3.99/min
                        <p>Chat</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <br />
                        $6.99/min
                        <p>Voice call</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i
                          className="fa fa-video-camera"
                          aria-hidden="true"
                        ></i>
                        <br />
                        $7.99/min
                        <p>Video call</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <a href="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </a>
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
                      src={readingsprofileImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <a href="#">Psychic Alexandra</a>
                  </h3>
                  <small className="color-black">
                    Leading UK Tarot Readings
                  </small>
                </div>
                <div className="readingsContainer">
                  <ul>
                    <li>
                      10,376
                      <p>Readings</p>
                    </li>
                    <li>
                      2016
                      <p>Year joined</p>
                    </li>
                    <li>
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      <p>Favorite</p>
                    </li>
                    <li>
                      <i className="fa fa-bell" aria-hidden="true"></i>
                      <p>Notificaton</p>
                    </li>
                  </ul>
                </div>

                <div className="col-md-12 dec">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris aliquam lorem et sagittis laoreet. Morbi in sodales
                    ante. Vivamus interdum dictum ante, vitae scelerisque velit
                    egestas eget. Morbi ultricies tortor non dolor vehicula
                    euismod id erat vitae,{" "}
                  </p>
                </div>

                <div className="readingsContainerPrice">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" aria-hidden="true"></i>
                        <br />
                        $3.99/min
                        <p>Chat</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <br />
                        $6.99/min
                        <p>Voice call</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i
                          className="fa fa-video-camera"
                          aria-hidden="true"
                        ></i>
                        <br />
                        $7.99/min
                        <p>Video call</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <a href="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </a>
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
                      src={readingsprofileImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <a href="#">Psychic Alexandra</a>
                  </h3>
                  <small className="color-black">
                    Leading UK Tarot Readings
                  </small>
                </div>
                <div className="readingsContainer">
                  <ul>
                    <li>
                      10,376
                      <p>Readings</p>
                    </li>
                    <li>
                      2016
                      <p>Year joined</p>
                    </li>
                    <li>
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      <p>Favorite</p>
                    </li>
                    <li>
                      <i className="fa fa-bell" aria-hidden="true"></i>
                      <p>Notificaton</p>
                    </li>
                  </ul>
                </div>

                <div className="col-md-12 dec">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris aliquam lorem et sagittis laoreet. Morbi in sodales
                    ante. Vivamus interdum dictum ante, vitae scelerisque velit
                    egestas eget. Morbi ultricies tortor non dolor vehicula
                    euismod id erat vitae,{" "}
                  </p>
                </div>

                <div className="readingsContainerPrice">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" aria-hidden="true"></i>
                        <br />
                        $3.99/min
                        <p>Chat</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <br />
                        $6.99/min
                        <p>Voice call</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i
                          className="fa fa-video-camera"
                          aria-hidden="true"
                        ></i>
                        <br />
                        $7.99/min
                        <p>Video call</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reading-profile">
                <div className="reading-profile-inner">
                  <a href="#" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <img
                      src={readingsprofileImg}
                      className="img-responsive readings-profile-img"
                    />
                  </a>
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
                      src={readingsprofileImg}
                      className="img-responsive shape-rating-img"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    <a href="#">Psychic Alexandra</a>
                  </h3>
                  <small className="color-black">
                    Leading UK Tarot Readings
                  </small>
                </div>
                <div className="readingsContainer">
                  <ul>
                    <li>
                      10,376
                      <p>Readings</p>
                    </li>
                    <li>
                      2016
                      <p>Year joined</p>
                    </li>
                    <li>
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      <p>Favorite</p>
                    </li>
                    <li>
                      <i className="fa fa-bell" aria-hidden="true"></i>
                      <p>Notificaton</p>
                    </li>
                  </ul>
                </div>

                <div className="col-md-12 dec">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris aliquam lorem et sagittis laoreet. Morbi in sodales
                    ante. Vivamus interdum dictum ante, vitae scelerisque velit
                    egestas eget. Morbi ultricies tortor non dolor vehicula
                    euismod id erat vitae,{" "}
                  </p>
                </div>

                <div className="readingsContainerPrice">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" aria-hidden="true"></i>
                        <br />
                        $3.99/min
                        <p>Chat</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <br />
                        $6.99/min
                        <p>Voice call</p>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i
                          className="fa fa-video-camera"
                          aria-hidden="true"
                        ></i>
                        <br />
                        $7.99/min
                        <p>Video call</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default TarotReaders;
