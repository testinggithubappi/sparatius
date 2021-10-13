import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";
import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";

function Favourites(props) {
  useEffect(() => {
    getFavouriteproviderList();
  }, []);

  const [favouriteproviderList, setFavouriteproviderList] = React.useState([]);

  const getFavouriteproviderList = async () => {
    let response = await axios
      .post(`/api/favouriteproviders`)
      .then((data) => data);
    response = await response.data.favouriteproviders;
    setFavouriteproviderList(response);
  };

  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Favorites</h2>
        </div>
      </section>

      <section className="sec-pad faq-page shop-sidebar sidebar-page">
        <div className="container">
          <div className="row">
            {favouriteproviderList.map((item) => (
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
                      ante. Vivamus interdum dictum ante, vitae scelerisque
                      velit egestas eget. Morbi ultricies tortor non dolor
                      vehicula euismod id erat vitae,{" "}
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
            ))}

            <nav aria-label="..." className="text-center">
              <ul className="pagination font-p">
                <li className="page-item">
                  {" "}
                  <a className="page-link" href="#" tabindex="-1">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  {" "}
                  <a className="page-link" href="#">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  {" "}
                  <a className="page-link" href="#">
                    Next
                  </a>
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

export default Favourites;
