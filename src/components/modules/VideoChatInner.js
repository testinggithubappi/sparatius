import React from "react";
import { OTSession, OTStreams, preloadScript } from "opentok-react";
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
    const { apiKey, sessionId, token } = this.props;

    return (
      <div>
        <CountDownTimer
          hoursMinSecs={{
            minutes: this.state.TimerMin,
            seconds: this.state.TimerSec,
          }}
        />
        {sessionId && token ? (
          <div>
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

              <Publisher video={this.props.video} />

              <OTStreams>
                <Subscriber />
              </OTStreams>
            </OTSession>
          </div>
        ) : null}
      </div>
    );
  }
}
