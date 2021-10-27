import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function Settings(props) {
  useEffect(() => {
    getEditProfile();
  }, []);
  const [editInput, setEditInput] = useState({
    email: "",
    password: "",
    currentPassword: "",
    confirmPassword: "",
    id: "",
    showmodal: false,
  });
  const getEditProfile = async () => {
    let response = await axios.get(`/api/user_profile`).then((data) => data);
    response = await response.data.data;
    setEditInput({
      email: response.email,
      id: response.id,
    });
  };

  const handleInput = (e) => {
    e.persist();
    setEditInput({ ...editInput, [e.target.name]: e.target.value });
  };

  const opeModal = (e) => {
    e.persist();
    console.log(e);
    setEditInput({ ...editInput, showmodal: true });
  };
  const closeModal = (e) => {
    e.persist();
    console.log(e);
    setEditInput({ ...editInput, showmodal: false });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: editInput.email,
      password: editInput.password,
      confirmPassword: editInput.confirmPassword,
      currentPassword: editInput.currentPassword,
    };
    if (editInput.password) {
      if (editInput.password != editInput.confirmPassword) {
        swal("Error", "Confirm Password Not Match", "error");
      } else {
        axios.post("/api/update_password", data).then((res) => {
          if (res.data.status == 200) {
            swal("Success", "Successfully Changed Password", "success");
            setEditInput({
              showmodal: false,
            });
          } else {
            swal("Error", res.data.msg, "error");
          }
        });
      }
    }
  };

  console.log(editInput.email);
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
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="font-weight-bold">Email</h4>
                  </div>
                  <div className="col-md-6">
                    <h4 className="font-weight-bold">{editInput.email}</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 margin-top-3">
                    <h4 className="font-weight-bold">Change Password</h4>
                  </div>
                  <div className="col-md-6 margin-top-3">
                    <h4 className="font-weight-bold">*************</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 margin-top-3">
                    <button
                      // className="btn-primary btn-sm w-33"
                      // data-toggle="modal"
                      // data-target="#exampleModal"
                      className="btn-primary"
                      onClick={opeModal}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <div
        className={"modal fade " + (editInput.showmodal ? "in" : "")}
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: editInput.showmodal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="sec-title text-center">
                <h3 className="text-purple">Edit Settings</h3>
              </div>
            </div>

            <form action="#" onSubmit={registerSubmit}>
              <div className="modal-body">
                <label> Your Email</label>
                <div className="form-grp">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={editInput.email}
                    name="email"
                    // onChange={handleInput}
                  />
                </div>
                <label> Current Password</label>
                <div className="form-grp">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Current Password"
                    value={editInput.currentPassword}
                    name="currentPassword"
                    onChange={handleInput}
                    required
                  />
                </div>

                <label className="margin-top-1">Change Password</label>
                <div className="form-grp">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={editInput.password}
                    name="password"
                    onChange={handleInput}
                    required
                  />
                </div>

                <label className="margin-top-1">Confirm Password</label>
                <div className="form-grp">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={editInput.confirmPassword}
                    name="confirmPassword"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="submit" className="btn bg-purple text-white">
                  Save Changes
                </button>
              </div>
            </form>
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
                  <Link to="/terms-condition">
                    <h4 className="font-weight-bold">Terms & Conditions</h4>
                  </Link>
                </div>
                {/* <div className="col-md-12 margin-top-3">
                  <Link to="login.html">
                    <h4 className="font-weight-bold">Logout</h4>
                  </Link>
                </div> */}
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
