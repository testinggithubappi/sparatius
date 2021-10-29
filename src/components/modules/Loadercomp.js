import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loadercomp(props) {
  return (
    <div style={{ display: props.startloader }} className="loader_parent">
      <div className="loading">
        <div></div>
        <Loader
          type="Puff"
          color="#ccc"
          height={100}
          width={100}
          timeout={3000000} //3 secs
        />
        <div></div>
      </div>
    </div>
  );
}

export default Loadercomp;
