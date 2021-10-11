import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function Settings(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Settings</h2>
        </div>
      </section>

      <section className="margin-top-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 left-side">
              <h2 className="font-weight-bold">Account</h2>

              <div className="col-md-12 bg-white gapping">
                <div className="col-md-6">
                  <h4 className="font-weight-bold">Email</h4>
                </div>
                <div className="col-md-6">
                  <h4 className="font-weight-bold">frazerdiamond@abc.com</h4>
                </div>
                <div className="col-md-6 margin-top-3">
                  <h4 className="font-weight-bold">Change Password</h4>
                </div>
                <div className="col-md-6 margin-top-3">
                  <h4 className="font-weight-bold">*************</h4>
                </div>
                <div className="col-md-6 margin-top-3">
                  <button
                    className="btn-primary btn-sm w-33"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="sec-title text-center">
                <h3 className="text-purple">Edit Settings</h3>
              </div>
            </div>
            <div className="modal-body">
              <form action="#">
                <label>Enter Your Email</label>
                <div className="form-grp">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <label className="margin-top-1">Change Password</label>
                <div className="form-grp">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <label className="margin-top-1">Confirm Password</label>
                <div className="form-grp">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn bg-purple text-white">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="margin-top-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 left-side">
              <h2 className="font-weight-bold">More Information</h2>

              <div className="col-md-12 bg-white gapping">
                <div className="col-md-12">
                  <Link to="about.html">
                    <h4 className="font-weight-bold">About Us</h4>
                  </Link>
                </div>
                <div className="col-md-12 margin-top-3">
                  <Link to="terms-&-conditions.html">
                    <h4 className="font-weight-bold">Terms & Conditions</h4>
                  </Link>
                </div>
                <div className="col-md-12 margin-top-3">
                  <Link to="login.html">
                    <h4 className="font-weight-bold">Logout</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Settings;
