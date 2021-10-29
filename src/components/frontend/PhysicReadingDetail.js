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
import Loadercomp from "../modules/Loadercomp";

function PhysicReadingDetail(props) {
  const [startloader, setloader] = React.useState("none");
  const [providerDetal, setProviderDetail] = React.useState({});

  useEffect(() => {
    getProviderDetail();
  }, []);

  const getProviderDetail = async () => {
    try {
      setloader("block");
      let path = `/api/provider_detail/${props.match.params.userid}/${props.match.params.serviceid}`;
      let response = await axios.get(path).then((data) => data);
      response = await response.data;
      console.log(response);
      setloader("none");
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

  const onHandleClickPay = async (item, prices, id) => {
    localStorage.removeItem("timeMinute");
    localStorage.removeItem("timeSec");
    // // history.push("/chat");
    let path = `/api/payment`;
    var data = {};
    let role = localStorage.getItem("role");
    console.log(item);
    if (role == "customer") {
      setloader("block");
      if (item == "text") {
        data = {
          id: id,
          title: "Text Chat",
          msg: "You Have A Text Chat",
          type: "text",
          customerid: localStorage.getItem("user_id"),
          path: `/chat/${id}`,
          serviceName: item,
          amount: prices,
          description: "one Hour Session",
        };
        // history.push(`/chat/${providerdata.id}`);
      }
      if (item == "video") {
        data = {
          id: id,
          title: "Video Chat",
          msg: "You Have A Video Chat",
          type: "video",
          customerid: localStorage.getItem("user_id"),
          path: `/video-call/${id}`,
          serviceName: item,
          amount: prices,
          description: "one Hour Session",
        };

        // history.push(`/video-call/${providerdata.id}`);
        // history.push({ pathname: "/video-call", state: "data_you_need_to_pass" });
      }
      if (item == "audio") {
        data = {
          id: id,
          title: "Audio Chat",
          msg: "You Have A Audio Chat",
          type: "audio",
          customerid: localStorage.getItem("user_id"),
          path: `/audio-call/${id}`,
          serviceName: item,
          amount: prices,
          description: "one Hour Session",
        };

        // history.push(`/audio-call/${providerdata.id}`);
        // history.push({ pathname: "/video-call", state: "data_you_need_to_pass" });
      }

      let response = await axios.post(path, data).then((data) => data);
      response = await response.data;
      setloader("none");
      window.open(response, "_blank");
    }

    try {
      // var data = {
      //   serviceName: item,
      //   amount: prices,
      //   description: "one Hour Session",
      // };
      // let response = await axios
      //   .post(`/api/payment`, data)
      //   .then((data) => data);
      // response = await response.data;
      // console.log(response);
      // window.open(response, "_blank");
      // setlinkRender(response);
      // setEditInput({
      //   showmodal: true,
      // });
    } catch (error) {
      console.log("error", error);
    }

    // setEditInput({
    //   showmodal: true,
    // });
  };

  return (
    <div>
      <Navbar />
      <Loadercomp startloader={startloader} />
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
                  onClick={() => {
                    if (providerDetal?.services2?.pricechat) {
                      onHandleClickPay(
                        "text",
                        providerDetal?.services2?.pricechat,
                        props.match.params.userid
                      );
                    }
                  }}
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
                  onClick={() => {
                    if (providerDetal?.services2?.priceaudio) {
                      onHandleClickPay(
                        "audio",
                        providerDetal?.services2?.priceaudio,
                        props.match.params.userid
                      );
                    }
                  }}
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
                  onClick={() => {
                    if (providerDetal?.services2?.pricevideo) {
                      onHandleClickPay(
                        "video",
                        providerDetal?.services2?.pricevideo,
                        props.match.params.userid
                      );
                    }
                  }}
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
