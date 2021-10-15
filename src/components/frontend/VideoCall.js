import React, { useState, Component } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";
import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";
import videocallImg from "../../assets/frontend/img/video-call-img.jpg";
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";
import { API_KEY } from "../../config";

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

    this.sessionEventHandlers = {
      sessionConnected: () => {
        this.setState({ connection: "Connected" });
      },
      sessionDisconnected: () => {
        this.setState({ connection: "Disconnected" });
      },
      sessionReconnected: () => {
        this.setState({ connection: "Reconnected" });
      },
      sessionReconnecting: () => {
        this.setState({ connection: "Reconnecting" });
      },
    };

    this.publisherEventHandlers = {
      accessDenied: () => {
        console.log("User denied access to media source");
      },
      streamCreated: () => {
        console.log("Publisher stream created");
      },
      streamDestroyed: ({ reason }) => {
        console.log(`Publisher stream destroyed because: ${reason}`);
      },
    };

    this.subscriberEventHandlers = {
      videoEnabled: () => {
        console.log("Subscriber video enabled");
      },
      videoDisabled: () => {
        console.log("Subscriber video disabled");
      },
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

  onSessionError = (error) => {
    this.setState({ error });
  };

  onPublish = () => {
    console.log("Publish Success");
  };

  onPublishError = (error) => {
    this.setState({ error });
  };

  onSubscribe = () => {
    console.log("Subscribe Success");
  };

  onSubscribeError = (error) => {
    this.setState({ error });
  };

  toggleVideo = () => {
    this.setState((state) => ({
      publishVideo: !state.publishVideo,
    }));
  };
  render() {
    console.log(this.props.location.state);
    // const { apiKey, sessionId, token } = this.props.credentials;
    const { error, connection, publishVideo, apiKey, sessionId, token } =
      this.state;
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
                  <div id="sessionStatus">Session Status: {connection}</div>
                  {error ? (
                    <div className="error">
                      <strong>Error:</strong> {error}
                    </div>
                  ) : null}
                  <OTSession
                    apiKey={apiKey}
                    sessionId={sessionId}
                    token={token}
                    onError={this.onSessionError}
                    eventHandlers={this.sessionEventHandlers}
                  >
                    <button id="videoButton" onClick={this.toggleVideo}>
                      {publishVideo ? "Disable" : "Enable"} Video
                    </button>
                    <OTPublisher
                      properties={{ publishVideo, width: 50, height: 50 }}
                      onPublish={this.onPublish}
                      onError={this.onPublishError}
                      eventHandlers={this.publisherEventHandlers}
                    />
                    <OTStreams>
                      <OTSubscriber
                        properties={{ width: 100, height: 100 }}
                        onSubscribe={this.onSubscribe}
                        onError={this.onSubscribeError}
                        eventHandlers={this.subscriberEventHandlers}
                      />
                    </OTStreams>
                  </OTSession>
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
