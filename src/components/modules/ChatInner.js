import React from "react";
import axios from "axios";
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";
<<<<<<< HEAD
import CountDownTimer from './CountDownTimer';
=======
import CountDownTimer from "./CountDownTimer";
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29

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
<<<<<<< HEAD
      TimerMin: localStorage.getItem("timeMinute")?localStorage.getItem("timeMinute"):localStorage.setItem("timeMinute",1),
      TimerSec: localStorage.getItem("timeSec")?localStorage.getItem("timeSec"):localStorage.setItem("timeSec",59)
=======
      TimerMin: localStorage.getItem("timeMinute")
        ? localStorage.getItem("timeMinute")
        : localStorage.setItem("timeMinute", 1),
      TimerSec: localStorage.getItem("timeSec")
        ? localStorage.getItem("timeSec")
        : localStorage.setItem("timeSec", 59),
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
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

<<<<<<< HEAD
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
=======
    // this.publisherEventHandlers = {
    //   accessDenied: () => {
    //     console.log("User denied access to media source");
    //   },
    //   streamCreated: () => {
    //     console.log("Publisher stream created");
    //   },
    //   streamDestroyed: ({ reason }) => {
    //     console.log(`Publisher stream destroyed because: ${reason}`);
    //   },
    // };

    // this.subscriberEventHandlers = {
    //   videoEnabled: () => {
    //     console.log("Subscriber video enabled");
    //   },
    //   videoDisabled: () => {
    //     console.log("Subscriber video disabled");
    //   },
    // };
  }

  componentDidMount() {
    this.LoadMesageByChat();
    this.tok_session.sessionHelper.session.on("signal", (event) => {
      console.log(this.state.chatHeadMessageList);
      this.setState({
        chatHeadMessageList: [
          ...this.state.chatHeadMessageList,
          ...[JSON.parse(event.data)],
        ],
      });
    });
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
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

<<<<<<< HEAD
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
=======
  LoadMesageByChat = async () => {
    try {
      let data = {
        id:
          localStorage.getItem("role") == "proviider"
            ? this.props.params.customerid
            : this.state.currentchatID,
      };
      let path = `/api/show_chat`;
      let response = await axios.post(path, data).then((data) => data);
      let resdata = await response.data;
      console.log("sss", resdata);
      this.setState({
        chatHeadMessageList: [...resdata.chat],
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  RenderMessage = () => {
    return this.state.chatHeadMessageList.map((item, i) => {
      return (
        <div key={i}>
<<<<<<< HEAD
          {item.id == 1 ? (
            <div className="outgoing_msg">
              <div className="sent_msg">
                <p>Test which is a new approach to have all solutions</p>
=======
          {item.from_id == localStorage.getItem("user_id") ? (
            <div className="outgoing_msg">
              <div className="sent_msg">
                <p>{item.message}</p>
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
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
<<<<<<< HEAD
                  <p>Test which is a new approach to have all solutions</p>
=======
                  <p>{item.message}</p>
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
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
<<<<<<< HEAD
=======

>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
  SendMessage = async () => {
    try {
      let data = {
        message: this.state.txtmessage,
        id: this.state.currentchatID,
<<<<<<< HEAD
      };
      let path = `/api/send_message`;
      let response = await axios.post(path, data).then((data) => data);
      response = await response.data.data;
      console.log(response);
=======
        created_at: new Date().toISOString(),
        from_id: localStorage.getItem("user_id"),
        id:
          this.state.chatHeadMessageList.length > 0
            ? this.state.chatHeadMessageList[
                this.state.chatHeadMessageList.length - 1
              ].id + 1
            : 1,
        to_id: this.state.currentchatID,
        updated_at: new Date().toISOString(),
      };
      this.tok_session.sessionHelper.session.signal(
        {
          type: "message",
          data: JSON.stringify(data),
        },
        function (error) {
          if (error) {
            console.log("signal error: " + error.message);
          } else {
            console.log("signal sent");
          }
        }
      );
      let path = `/api/send_message`;
      let response = await axios
        .post(path, {
          message: this.state.txtmessage,
          id: this.state.currentchatID,
        })
        .then((data) => data);
      // response = await response.data.data;
      //console.log(response);
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
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
<<<<<<< HEAD
    console.log("this.state.currentchatID", this.state.currentchatID);
    return (
      <div>
        <div className="messaging">
        <CountDownTimer hoursMinSecs={{minutes: this.state.TimerMin,seconds:this.state.TimerSec}}/>
          <div className="inbox_msg">
            <div className="inbox_people">
=======
    return (
      <div>
        <OTSession
          ref={(component) => (this.tok_session = component)}
          sessionId={sessionId}
          apiKey={apiKey}
          token={token}
          eventHandlers={this.sessionEventHandlers}
        />
        <div className="messaging">
          {/* <CountDownTimer
            hoursMinSecs={{
              minutes: this.state.TimerMin,
              seconds: this.state.TimerSec,
            }}
          /> */}
          <div className="inbox_msg">
            {/* <div className="inbox_people">
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
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
<<<<<<< HEAD
            </div>
=======
            </div> */}
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29

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
