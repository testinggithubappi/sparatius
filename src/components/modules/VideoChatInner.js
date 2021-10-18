import React from "react";
import {
  OTPublisher,
  OTSession,
  OTStreams,
  OTSubscriber,
  preloadScript,
} from "opentok-react";
import ConnectionStatus from "./VideoCall/ConnectionStatus";
import Publisher from "./VideoCall/Publisher";
import Subscriber from "./VideoCall/Subscriber";
import CountDownTimer from "./CountDownTimer";
export default class VideoChatInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      connected: false,
      TimerMin: localStorage.getItem("timeMinute")
        ? localStorage.getItem("timeMinute")
        : localStorage.setItem("timeMinute", 59),
      TimerSec: localStorage.getItem("timeSec")
        ? localStorage.getItem("timeSec")
        : localStorage.setItem("timeSec", 59),
    };
    this.sessionEvents = {
      sessionConnected: () => {
        console.log("asdasdasd");
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      },
    };
  }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  };

  render() {
    const { apiKey, sessionId, token, video } = this.props;
    console.log(this.props);
    return (
      <div>
        {/* <CountDownTimer
          hoursMinSecs={{
            minutes: this.state.TimerMin,
            seconds: this.state.TimerSec,
          }}
        /> */}
        {sessionId && token ? (
          <div style={{ height: 500 }}>
            <OTSession
              apiKey={apiKey}
              sessionId={sessionId}
              token={token}
              eventHandlers={this.sessionEvents}
              onError={this.onError}
            >
              {this.state.error ? (
                <div id="error">{this.state.error}</div>
              ) : null}

              {/* <ConnectionStatus connected={this.state.connected} /> */}
              <OTPublisher
                eventHandlers={{
                  streamCreated: () => {
                    console.log("stream created");
                  },
                }}
                style={{
                  position: "absolute",
                  zIndex: 11111111,
                  bottom: 0,
                  right: 0,
                }}
                properties={{
                  publishAudio: true,
                  publishVideo: video,
                  width: 200,
                  height: 250,
                  insertMode: "append",
                }}
                onError={this.onError}
                onPublish={() => {
                  console.log("published");
                }}
              />
              {/* <Publisher video={this.props.video} /> */}

              <OTStreams>
                <OTSubscriber
                  properties={{
                    width: "100%",
                    height: 500,
                    insertMode: "append",
                    fitMode: "cover",
                  }}
                  onError={() => {
                    console.log("error");
                  }}
                  onSubscribe={() => {
                    console.log("connected");
                  }}
                />
              </OTStreams>
              {/* <Subscriber /> */}
            </OTSession>
          </div>
        ) : null}
      </div>
    );
  }
}
