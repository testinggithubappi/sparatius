<<<<<<< HEAD
import React from 'react';
import { OTPublisher } from 'opentok-react';
import CheckBox from './CheckBox';
=======
import React from "react";
import { OTPublisher } from "opentok-react";
import CheckBox from "./CheckBox";
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29

class Publisher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
<<<<<<< HEAD
      audio:true,
      video: this.props.video,
      videoSource: 'camera'
=======
      audio: true,
      video: this.props.video,
      videoSource: "camera",
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

  changeVideoSource = (videoSource) => {
    (this.state.videoSource !== 'camera') ? this.setState({videoSource: 'camera'}) : this.setState({ videoSource: 'screen' })
  }

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` });
  }
=======
  };

  setVideo = (video) => {
    this.setState({ video });
  };

  changeVideoSource = (videoSource) => {
    this.state.videoSource !== "camera"
      ? this.setState({ videoSource: "camera" })
      : this.setState({ videoSource: "screen" });
  };

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` });
  };
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29

  render() {
    return (
      <div className="publisher">
<<<<<<< HEAD
      

        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <div className='subscriberContainer'>
        <OTPublisher
         
          properties={{
            publishAudio: this.state.audio,
            publishVideo: this.state.video,
            videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined,
            insertMode: "append", width: '100%', height: '100%' 
          }}
          onError={this.onError}
        />
         </div>
=======
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <div className="subscriberContainer">
          <OTPublisher
            properties={{
              publishAudio: this.state.audio,
              publishVideo: this.state.video,
              videoSource:
                this.state.videoSource === "screen" ? "screen" : undefined,
              insertMode: "append",
              width: 150,
              height: 150,
            }}
            onError={this.onError}
          />
        </div>
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29

        {/* <CheckBox
          label="Share Screen"
          onChange={this.changeVideoSource}
        /> */}

<<<<<<< HEAD

        {(this.props.video)?<div>
          <CheckBox
          label="Publish Audio"
          initialChecked={this.state.audio}
          onChange={this.setAudio}
        />

        <CheckBox
          label="Publish Video"
          initialChecked={this.state.video}
          onChange={this.setVideo}
        />
        </div>:''}

=======
        {this.props.video ? (
          <div>
            <CheckBox
              label="Publish Audio"
              initialChecked={this.state.audio}
              onChange={this.setAudio}
            />

            <CheckBox
              label="Publish Video"
              initialChecked={this.state.video}
              onChange={this.setVideo}
            />
          </div>
        ) : (
          ""
        )}
>>>>>>> c9d38cdbe36a0c59cb2c21cd3685b75f31c1cd29
      </div>
    );
  }
}
export default Publisher;
