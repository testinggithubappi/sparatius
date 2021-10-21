import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import icon1Img from "../../assets/frontend/img/services/icon-1.png";
import icon2Img from "../../assets/frontend/img/services/icon-2.png";
import icon3Img from "../../assets/frontend/img/services/icon-3.png";
import readingsdetail1img from "../../assets/frontend/img/services/psychic-readings-detail-1.jpg";
import StarRatings from "react-star-ratings";

function PhysicReadingDetail(props) {
  const [providerDetal, setProviderDetail] = React.useState({});

  useEffect(() => {
    getProviderDetail();
  }, []);

  const getProviderDetail = async () => {
    try {
      let path = `/api/provider_detail/${props.match.params.userid}/${props.match.params.serviceid}`;
      let response = await axios.get(path).then((data) => data);
      response = await response.data;
      console.log(response);
      setProviderDetail(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderReview = () => {
    return providerDetal?.profile?.ratingRview.map((item) => (
      <div>
        <div>
          <p className="font-weight-bold">{item.customername}</p>
          <small>{item.ratingdate}</small>
          <p>{item.description}</p>
        </div>
        <hr />
      </div>
    ));
  };

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
                    <h2 className="text-white text-left">
                      {providerDetal?.profile?.firstName}
                    </h2>
                    <p className=" text-left">
                      <a href="#" className="text-white">
                        {providerDetal.LastName}
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 top-rated ">
                    <p className=" text-left ">Top Rated</p>
                    <ul className="list-inline review-star text-left star-color">
                      <StarRatings
                        rating={
                          providerDetal?.profile?.avg_rating
                            ? Math.floor(providerDetal?.profile?.avg_rating)
                            : 0
                        }
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name="rating"
                        starDimension="30px"
                      />
                    </ul>
                  </div>
                  <div className="col-md-3 readings">
                    {/* <h3 className="">10,376</h3>
                    <h4 className="">Readings</h4> */}
                  </div>

                  <div className="col-md-3 readings">
                    <h3 className="">
                      {" "}
                      {providerDetal?.profile?.yearExperience}
                    </h3>
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

                <button
                  className="btn  bg-purple text-white w-33"
                  disabled={providerDetal?.services2?.pricechat ? false : true}
                >
                  {" "}
                  $
                  {providerDetal?.services2?.pricechat
                    ? providerDetal?.services2?.pricechat
                    : 0}
                  /hour.{" "}
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sec-title text-center font-p ">
                <img src={icon2Img} />
                <h2 className="text-purple">Voice Call</h2>
                <p className=" margin-top-2">Get a live text reading now</p>

                <button
                  className="btn  bg-purple text-white w-33"
                  disabled={providerDetal?.services2?.priceaudio ? false : true}
                >
                  {" "}
                  $
                  {providerDetal?.services2?.priceaudio
                    ? providerDetal?.services2?.priceaudio
                    : 0}
                  /hour.{" "}
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sec-title text-center font-p ">
                <img src={icon3Img} />
                <h2 className="text-purple">Video Calls</h2>
                <p className=" margin-top-2">Get a live text reading now</p>
                <button
                  className="btn  bg-purple text-white w-33"
                  disabled={providerDetal?.services2?.pricevideo ? false : true}
                >
                  {" "}
                  $
                  {providerDetal?.services2?.pricevideo
                    ? providerDetal?.services2?.pricevideo
                    : 0}
                  /hour.{" "}
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: providerDetal?.profile?.service_description,
                      }}
                    />
                  </div>
                  <div
                    className="tab-pane fade signle-tab-content"
                    id="attraction"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: providerDetal?.profile?.description,
                      }}
                    />
                  </div>
                  <div className="tab-pane fade signle-tab-content" id="skills">
                    {providerDetal?.profile?.ratingRview.map((item, i) => (
                      <div key={i}>
                        <div>
                          <p className="font-weight-bold">
                            {item.customername}
                          </p>
                          <small>{item.ratingdate}</small>
                          <p>{item.description}</p>
                        </div>
                        <hr />
                      </div>
                    ))}
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
