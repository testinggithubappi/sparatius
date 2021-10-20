import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PaymentModalViewer(props) {
  console.log("PaymentModalViewer", props);
  return (
    <div>
      <div
        className={"modal fade " + (props.showmodal ? "in" : "")}
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: props.showmodal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="sec-title text-center">
                <h3 className="text-purple">Paypal Payment</h3>
              </div>
            </div>
            <div className="modal-body">{props.LinkRender}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-block btn-secondary"
                onClick={props.closeModal}
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

export default PaymentModalViewer;
