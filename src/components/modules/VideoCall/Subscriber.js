<<<<<<< HEAD
import React from 'react';

import { OTSubscriber } from 'opentok-react';
import CheckBox from './CheckBox';
=======
import React from "react";

import { OTSubscriber } from "opentok-react";
import CheckBox from "./CheckBox";
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29

class Subscriber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
<<<<<<< HEAD
      video: true
=======
      video: true,
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
<<<<<<< HEAD
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  onError = (err) => {
    this.setState({ error: `Failed to subscribe: ${err.message}` });
  }
=======
  };

  setVideo = (video) => {
    this.setState({ video });
  };

  onError = (err) => {
    this.setState({ error: `Failed to subscribe: ${err.message}` });
  };
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29

  render() {
    return (
      <div className="subscriber">
        Subscriber
<<<<<<< HEAD

        {this.state.error ? <div id="error">{this.state.error}</div> : null}

        <OTSubscriber
          properties={{
            subscribeToAudio: this.state.audio,
            subscribeToVideo: this.state.video
          }}
          onError={this.onError}
        />

=======
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <OTSubscriber
          properties={{
            subscribeToAudio: this.state.audio,
            subscribeToVideo: this.state.video,
            height: "100%",
            width: "100%",
          }}
          onError={this.onError}
        />
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
        <CheckBox
          label="Subscribe to Audio"
          initialChecked={this.state.audio}
          onChange={this.setAudio}
        />
<<<<<<< HEAD

=======
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
        <CheckBox
          label="Subscribe to Video"
          initialChecked={this.state.video}
          onChange={this.setVideo}
        />
<<<<<<< HEAD
        
=======
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
      </div>
    );
  }
}
export default Subscriber;
