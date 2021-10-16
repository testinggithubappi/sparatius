import React from "react";
import axios from "axios";
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";

export default class ChatInner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      connection: "Connecting",
      publishVideo: true,
      chatHeadMessageList: [],
      txtmessage: "",
      currentchatID: this.props.currentchatID,
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

  loadChathead = () => {
    console.log(this.props.chatHeadlist);
    return this.props.chatHeadlist.map((item, i) => {
      return (
        <div
          key={i}
          className="chat_list active_chat"
          onClick={() => {
            this.LoadMesageByChat(item);
          }}
        >
          <div className="chat_people">
            <div className="chat_img">
              {" "}
              <img
                src="https://ptetutorials.com/images/user-profile.png"
                alt="sunil"
              />{" "}
            </div>
            <div className="chat_ib">
              <h5>
                {item.firstName}
                <span className="chat_date">Dec 25</span>
              </h5>
              <p>
                Test, which is a new approach to have all solutions astrology
                under one roof.
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  LoadMesageByChat = async (item) => {
    console.log(item);
    this.setState({
      currentchatID: item.msg_to,
    });
    try {
      let data = {
        id: item.id,
      };
      let path = `/api/getchatheadmessages`;
      let response = await axios.post(path, data).then((data) => data);
      response = await response.data.data;
      console.log(response);
      this.setState({
        chatHeadMessageList: response,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  RenderMessage = () => {
    return this.state.chatHeadMessageList.map((item, i) => {
      return (
        <div key={i}>
          {item.id == 1 ? (
            <div className="outgoing_msg">
              <div className="sent_msg">
                <p>Test which is a new approach to have all solutions</p>
                <span className="time_date"> 11:01 AM | June 9</span>{" "}
              </div>
            </div>
          ) : (
            <div className={"incoming_msg"}>
              <div className="incoming_msg_img">
                {" "}
                <img
                  src="https://ptetutorials.com/images/user-profile.png"
                  alt="sunil"
                />{" "}
              </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Test which is a new approach to have all solutions</p>
                  <span className="time_date"> 11:01 AM | June 9</span>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  handleChange = (e) => {
    this.setState({
      txtmessage: e.target.value,
    });
  };
  SendMessage = async () => {
    try {
      let data = {
        message: this.state.txtmessage,
        id: this.state.currentchatID,
      };
      let path = `/api/send_message`;
      let response = await axios.post(path, data).then((data) => data);
      response = await response.data.data;
      console.log(response);
      // this.setState({
      //   chatHeadMessageList: response,
      // });
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    const { apiKey, sessionId, token } = this.props;
    const { error, connection, publishVideo } = this.state;
    console.log("this.state.currentchatID", this.state.currentchatID);
    return (
      <div>
        <div className="messaging">
          <div className="inbox_msg">
            <div className="inbox_people">
              <div className="headind_srch">
                <div className="srch_bar">
                  <div className="stylish-input-group">
                    <input
                      type="text"
                      className="search-bar"
                      placeholder="Search"
                    />
                    <span className="input-group-addon">
                      <button type="button">
                        {" "}
                        <i className="fa fa-search" aria-hidden="true"></i>{" "}
                      </button>
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="inbox_chat">{this.loadChathead()}</div>
            </div>

            <div className="mesgs">
              <div className="user-name">
                <div className="row">
                  <div className="col-md-10">User Name</div>
                  <div className="col-md-2">
                    <a href="#">
                      <i className="fa fa-video-camera" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="msg_history">{this.RenderMessage()}</div>
              <div className="type_msg">
                <div className="input_msg_write">
                  <input
                    type="text"
                    className="write_msg"
                    placeholder="Type a message"
                    onChange={this.handleChange.bind(this)}
                    name="txtmessage"
                    value={this.state.txtmessage}
                  />
                  <button
                    onClick={this.SendMessage.bind(this)}
                    className="msg_send_btn"
                    type="button"
                  >
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
