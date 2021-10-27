import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import psychicReadingImg from "../../assets/frontend/img/services/psychic-readings-detail-1.jpg";

function EditProfile(props) {
  useEffect(() => {
    getEditCustomerProfile();
  }, []);
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    contactno: "",
  });
  const getEditCustomerProfile = async () => {
    let response = await axios.get(`/api/user_profile`).then((data) => data);
    let responsedata = response.data.data;

    setProfileData({
      ...profileData,
      firstname: responsedata?.firstName,
      lastname: responsedata?.LastName,
      contactno: responsedata?.contactNo,
    });
  };

  const submitProfile = (e) => {
    e.preventDefault();
    const data = {
      firstName: profileData.firstname,
      LastName: profileData.lastname,
      contactNo: profileData.contactno,
    };
    axios.post("/api/edit_profile", data).then((res) => {
      if (res.data.status == 200) {
        swal("Success", "Update Successfully", "success");
        // history.push("/home");
      } else {
      }
    });
  };

  const handleInput = (e) => {
    e.persist();
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <section
        className="inner-banner has-dot-pattern sec-title text-center"
        style={{ paddingBottom: "0px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 psychic-readings-detail">
              <div className="row">
                <div className="col-md-3">
                  <img src={psychicReadingImg} className="img-responsive" />
                </div>
                <div className="col-md-9 ">
                  <div className="col-md-12 username">
                    <h2 className="text-white text-left">
                      {profileData.firstname}
                    </h2>
                  </div>
                  {/* <div className="col-md-9 top-rated ">
                    <p className=" text-left ">Female</p>
                    <p className=" text-left ">USA</p>
                    <p className=" text-left ">Top Rated</p>
                    <ul className="list-inline review-star text-left star-color">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li className=" text-white">5.0</li>
                    </ul>
                  </div>

                  <div className="col-md-3 readings">
                    <h3 className="">2021</h3>
                    <h4 className="">Year Joined</h4>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 login-register font-p left-side">
              <form onSubmit={submitProfile} action="#">
                <label className="form-check-label">First Name</label>
                <div className="form-grp bg-white">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                    name="firstname"
                    onChange={handleInput}
                    value={profileData.firstname}
                    required
                  />
                </div>
                <label className="form-check-label">Last Name</label>
                <div className="form-grp bg-white">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                    name="lastname"
                    onChange={handleInput}
                    value={profileData.lastname}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label className="form-check-label">Phone</label>
                  <div className="form-grp bg-white">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone No"
                      name="contactno"
                      onChange={handleInput}
                      value={profileData.contactno}
                      required
                    />
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <label className="form-check-label">Gender</label>
                  <div className="form-grp bg-white">
                    <select
                      className="form-select select-field"
                      aria-label="Default select example"
                    >
                      <option selected>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <label className="form-check-label">Country/Region</label>
                  <div className="form-grp bg-white">
                    <select
                      className="form-select select-field"
                      aria-label="Default select example"
                    >
                      <option selected>Country/Region</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-check-label">Zip Code</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Code"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-check-label">Year of Join</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Year"
                    />
                  </div>
                </div> */}

                <div className="clearfix submit-box">
                  <div className="pull-left">
                    {/* <button className="thm-btn margin-top-2" type="submit">
                      Cancel
                    </button> */}
                    <button className="thm-btn margin-top-2" type="submit">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default EditProfile;
