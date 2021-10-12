import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";

function TarotReaders(props) {
  useEffect(() => {
    getProviderList();
  }, []);
  const [checked, setChecked] = React.useState(false);
  const [providerList, setproviderList] = React.useState([]);
  const [registerInput, setRegister] = useState({
    keyword: "",
    Rating: "",
    ReadingAll: false,
    ReadingChat: false,
    ReadingVideo: false,
    ReadingAudio: false,
    RangeStart: "",
    RangeEnd: "",
  });

  const getProviderList = async () => {
    let data = {
      slug: props.match.params.slug,
      keyword: registerInput.keyword,
      Rating: registerInput.Rating,
      ReadingAll: registerInput.ReadingAll,
      ReadingChat: registerInput.ReadingChat,
      ReadingVideo: registerInput.ReadingVideo,
      ReadingAudio: registerInput.ReadingAudio,
      RangeStart: registerInput.RangeStart,
      RangeEnd: registerInput.RangeEnd,
    };
    let response = await axios
      .post(`/api/providers`, data)
      .then((data) => data);
    // response = await response.data.services;
    // setproviderList(response);
  };

  // const SearchProviderfilter = () => {
  //       getProviderList();
  // }

  const capitalizeWords = (string) => {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  };

  const handleInput = (e) => {
    console.log(e.target);
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    e.persist();
    // setSelectedOption(e.target.value);
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const handlecheckbox = (e) => {
    console.log(e.target.checked);

    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.checked });
  };

  const clearFilter = () => {
    setRegister({
      keyword: "",
      Rating: "",
      ReadingAll: false,
      ReadingChat: false,
      ReadingVideo: false,
      ReadingAudio: false,
      RangeStart: "",
      RangeEnd: "",
    });
  };

  console.log(props);
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>{capitalizeWords(props.match.params.slug)}</h2>
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
                      <input
                        name="keyword"
                        onChange={handleInput}
                        type="text"
                        placeholder="type your keyword"
                        value={registerInput.keyword}
                      />
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
                    name="Rating"
                    value={registerInput.Rating}
                    onChange={handleChange}
                  >
                    <option value="">Sort by</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
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
                            checked={registerInput.ReadingAll}
                            id="defaultCheck1"
                            name="ReadingAll"
                            onChange={(e) => handlecheckbox(e)}
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
                            checked={registerInput.ReadingChat}
                            id="defaultCheck2"
                            name="ReadingChat"
                            onChange={(e) => handlecheckbox(e)}
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
                            id="defaultCheck3"
                            checked={registerInput.ReadingVideo}
                            name="ReadingVideo"
                            onChange={(e) => handlecheckbox(e)}
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
                            id="defaultCheck4"
                            checked={registerInput.ReadingAudio}
                            name="ReadingAudio"
                            onChange={(e) => handlecheckbox(e)}
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
                          <label
                            className="form-check-label"
                            for="defaultCheck1"
                          >
                            {" "}
                            Start{" "}
                          </label>
                          <input
                            className="form-control price"
                            type="text"
                            value={registerInput.RangeStart}
                            onChange={handleInput}
                            name="RangeStart"
                          />
                        </div>

                        <div className="form-check">
                          <label
                            className="form-check-label"
                            for="defaultCheck2"
                          >
                            {" "}
                            End{" "}
                          </label>
                          <input
                            className="price form-control"
                            type="text"
                            value={registerInput.RangeEnd}
                            name="RangeEnd"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    {/* <a
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
                    </div> */}

                    {/* <ul className="list-group">
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
                    </ul> */}

                    <button
                      href="#"
                      className="thm-btn uppercase margin-top-2 col-md-6 text-center "
                      onClick={getProviderList}
                    >
                      Apply
                    </button>
                    <button
                      onClick={clearFilter}
                      className="thm-btn uppercase margin-top-2 col-md-6 text-center black-color"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {providerList.map((item) => (
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default TarotReaders;
