import React, { useState, Component } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";
import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";
import videocallImg from "../../assets/frontend/img/video-call-img.jpg";
import { API_KEY } from "../../config";
import VideoChatInner from "../modules/VideoChatInner";

class VideoCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      connection: "Connecting",
      publishVideo: true,
      ProviderData: [],
      apiKey: API_KEY,
      sessionId: "",
      token: "",
    };
  }

  async componentDidMount() {
    await this.getProviderSession();
  }
  getProviderSession = async () => {
    try {
      let path = `/api/create_chathead`;
      var data = {
        id: this.props.match.params.id,
        title: "Video Chat",
        msg: "You Have A Video Chat",
        type: "video",
        customerid: localStorage.getItem("user_id"),
      };
      let response = await axios.post(path, data).then((data) => data);
      response = await response.data.data;
      console.log(response);
      this.setState({
        ProviderData: response,
        sessionId: response.session_id,
        token: response.token,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <section className="inner-banner has-dot-pattern text-center">
          <div className="container sec-title">
            <h2>Video Call</h2>
          </div>
        </section>

        <section className="sec-pad faq-page shop-sidebar sidebar-page">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="video-screen">
                  <VideoChatInner
                    video={true}
                    sessionId={this.state.sessionId}
                    token={this.state.token}
                    apiKey={API_KEY}
                    currentchatID={this.props.match.params.id}
                  />

                  {/* <div className="row">
                    <div className="video-profile-screen">
                      <img src="img/80x80.jpg" alt="" />
                    </div>

                    <div className="call-time">
                      <span>01:30</span>
                      <button className="call">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <img
                    className="img-responsive"
                    src={videocallImg}
                    alt="video-img"
                  /> */}
                </div>
              </div>

              <div className="col-md-4">
                <div className="reading-profile">
                  <div className="reading-profile-inner">
                    <Link
                      href="#"
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
                      <Link href="#">Psychic Alexandra</Link>
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default VideoCall;
