import React from "react";

function Modal(props) {
  return (
    <div>
      <div
        className={"modal fade " + (props.showmodalVideo ? "in" : "")}
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: props.showmodalVideo ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="sec-title text-center">
                <h3 className="text-purple">{props.Modaltitle}</h3>
              </div>
            </div>
            <div
              style={{ position: "relative", paddingTop: "200px" }}
              className="modal-body"
            >
              {props.modalbody}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-block btn-secondary"
                onClick={props.closeModalVideo}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
