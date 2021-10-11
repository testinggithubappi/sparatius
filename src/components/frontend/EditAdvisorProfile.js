import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getCountrytList,
  getStatetList,
  getCityList,
} from "../../services/custom";

function EditAdvisorProfile(props) {
  const history = useHistory();
  const [CountryList, setCountryList] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [servicelist, setServicelist] = useState([]);
  const [serviceOption, setserviceOption] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [registerInput, setRegister] = useState({
    firstname: "",
    lastname: "",
    contactno: "",
    country: "",
    city: "",
    state: "",
    yearexperience: "",
    yearjoined: "",
    error_list: [],
    gender: "",
    zipcode: "",
    stateList: [],
    cityList: [],
    imageFile: null,
    selectService: [],
    profileAbout: "",
    selectDate: "",
  });

  const [arrFeilds, setFeilds] = useState([]);
  console.log(registerInput);
  useEffect(() => {
    getCountry();
    console.log(props);
  }, []);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  const handleSubmitVideos = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("file", selectedFile);

    axios.post("/api/profile_video", formData).then((res) => {
      if (res.data.status == 200) {
        swal("Success", res.data.msg, "success");
      } else {
      }
    });
  };

  const getCountry = async () => {
    let response = await getCountrytList();
    response = await response.data;
    setCountryList(response);
  };
  const getState = async (id) => {
    let response = await getStatetList(id);
    response = await response.data;
    // setRegister({ ...registerInput, country: id });
    setRegister({ ...registerInput, stateList: response });
  };
  const getCity = async (id) => {
    let response = await getCityList(id);
    response = await response.data;
    // setRegister({ ...registerInput, state: id });
    setRegister({ ...registerInput, cityList: response });
  };

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };
  const handleChangeCountry = (e) => {
    console.log(e.target.value);
    e.persist();
    // setSelectedOption(e.target.value);
    registerInput.country = e.target.value;
    setRegister({ ...registerInput });
    getState(e.target.value);
  };
  const handleChangeState = (e) => {
    e.persist();
    // setSelectedOption(e.target.value);
    registerInput.state = e.target.value;
    setRegister({ ...registerInput });
    getCity(e.target.value);
  };

  const onChangeHandlerImage = (e) => {
    setRegister({ ...registerInput, imageFile: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  const aboutSubmit = (e) => {
    e.preventDefault();
    const data = {
      profileAbout: registerInput.profileAbout,
    };
    axios.post("/api/profile_about", data).then((res) => {
      if (res.data.status == 200) {
        swal("Success", res.data.msg, "success");
        // history.push("/home");
      } else {
        setRegister({
          ...registerInput,
          error_list: res.data.validation_erros,
        });
      }
    });
  };

  const personalDetailSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname: registerInput.firstname,
      lastname: registerInput.lastname,
      contactno: registerInput.contactno,
      email: registerInput.contactno,
      state: registerInput.state,
      country: registerInput.country,
      city: registerInput.city,
      zipcode: registerInput.zipcode,
      gender: registerInput.gender,
      yearexperience: registerInput.yearexperience,
      yearjoined: registerInput.selectDate,
    };
    console.log(data);
    axios.post("/api/profile_detail", data).then((res) => {
      if (res.data.status == 200) {
        swal("Success", res.data.msg, "success");
        // history.push("/home");
      } else {
        setRegister({
          ...registerInput,
          error_list: res.data.validation_erros,
        });
      }
    });
  };
  const serviceSelectSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/profile_service", {
        selectService: registerInput.selectService,
      })
      .then((res) => {
        if (res.data.status == 200) {
          swal("Success", res.data.msg, "success");
          // history.push("/home");
        }
      });
  };

  const handleCallback = (childData) => {
    setServicelist(childData);
    // let option = [];
    const option = childData.map((item) => {
      var valuedata = {
        value: item.id,
        label: item.name,
      };
      return valuedata;
      // console.log(valuedata);
      // option.push(valuedata);
    });

    setserviceOption([...option]);
  };

  const handleChangeService = (e) => {
    var options = e;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      var valuedata = {
        value: options[i].value,
        label: options[i].label,
        pricechat: "",
        priceaudio: "",
        pricevideo: "",
      };
      value.push(valuedata);
    }

    setRegister({ ...registerInput, selectService: value });
    setFeilds([...value]);
  };

  const dateChanged = (d) => {
    const selectedDate = new Date(d); // pass in date param here
    const formattedDate = `${selectedDate.getFullYear()}-${
      selectedDate.getMonth() + 1
    }-${selectedDate.getDate()}`;
    console.log(formattedDate);

    setRegister({ ...registerInput, selectDate: formattedDate });

    setStartDate(selectedDate);
  };

  console.log(registerInput);
  // console.log(registerInput);
  return (
    <div>
      <Navbar parentCallback={handleCallback} />
      <section className="inner-banner has-dot-pattern sec-title text-center">
        <div className="container">
          <h2>Edit Advisor Profile</h2>
        </div>
      </section>
      <section>
        <div className="container">
          <form action="#" onSubmit={aboutSubmit}>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 login-register font-p bg-grey profile-border">
                <h2 className="font-weight-bold">About Me</h2>
                <textarea
                  className="form-control margin-top-2"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  placeholder="Describtion here"
                  style={{ height: "auto" }}
                  name="profileAbout"
                  onChange={handleChange}
                ></textarea>
                <div className="clearfix submit-box">
                  <div className="pull-right">
                    <button
                      className="thm-btn margin-top-2 margin-bottom-1"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </form>
        </div>
      </section>

      <section className="margin-top-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <form action="#" onSubmit={serviceSelectSubmit}>
              <div className="col-md-8 login-register font-p bg-grey profile-border">
                <h2 className="font-weight-bold">My Services</h2>

                <div className="form-grp bg-white">
                  <Select
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select"
                    options={serviceOption}
                    onChange={handleChangeService}
                  />
                </div>
                {registerInput.selectService.map((item, index) => (
                  <div key={item.id} className="row">
                    <div className="col-md-3">
                      <label>{item.label}</label>
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Chat Price"
                        onChange={(e) => {
                          registerInput.selectService[index]["pricechat"] =
                            e.target.value;
                          setRegister({ ...registerInput });
                        }}
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Audio Call Price"
                        name="audiocallprice[]"
                        onChange={(e) => {
                          registerInput.selectService[index]["priceaudio"] =
                            e.target.value;
                          setRegister({ ...registerInput });
                        }}
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="video Call Price"
                        name="videocallprice"
                        onChange={(e) => {
                          registerInput.selectService[index]["pricevideo"] =
                            e.target.value;
                          setRegister({ ...registerInput });
                        }}
                      />
                    </div>
                  </div>
                ))}
                <div className="clearfix submit-box">
                  <div className="pull-right">
                    <button
                      className="thm-btn margin-top-2 margin-bottom-1"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      <section className="margin-top-3">
        <form action="#" onSubmit={handleSubmitVideos}>
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 login-register font-p bg-grey profile-border">
                <p className="font-weight-bold">Upload Profile Video</p>
                <div className="form-grp bg-white margin-top-2">
                  {/* <input
                    className="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                    name="imageFile"
                    onChange={onChangeHandlerImage}
                  /> */}

                  <div>
                    <input type="file" name="file" onChange={changeHandler} />
                    {isSelected ? (
                      <div>
                        <p>Filename: {selectedFile.name}</p>
                        {/* <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                          lastModifiedDate:{" "}
                          {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p> */}
                      </div>
                    ) : (
                      <p>Select a file to show details</p>
                    )}
                    <div></div>
                  </div>
                </div>
                <div className="clearfix submit-box">
                  <div className="pull-right">
                    <button
                      className="thm-btn margin-top-2 margin-bottom-1"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </form>
      </section>

      <section className="margin-top-3">
        <form action="#" onSubmit={personalDetailSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 login-register bg-grey profile-border">
                <h2 className="font-weight-bold">Personal Details</h2>

                <div className="col-md-6">
                  <label className="form-check-label">First Name</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstname"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-check-label">Last Name</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastname"
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-check-label">Phone</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone No"
                      name="contactno"
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-check-label">Gender</label>
                  <div className="form-grp bg-white">
                    <select
                      className="form-select select-field"
                      aria-label="Default select example"
                      name="gender"
                      onChange={handleChange}
                    >
                      <option value="" selected>
                        Gender
                      </option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <label className="form-check-label">Country</label>
                  <div className="form-grp bg-white">
                    <select
                      className="form-select select-field"
                      aria-label="Default select example"
                      name="country"
                      onChange={handleChangeCountry}
                    >
                      <option value="">Select Country</option>
                      {CountryList.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-check-label">State</label>
                  <div className="form-grp bg-white">
                    <select
                      className="form-select select-field"
                      aria-label="Default select example"
                      name="country"
                      onChange={handleChangeState}
                    >
                      <option value="">Select State</option>
                      {registerInput.stateList.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-check-label">City</label>
                  <div className="form-grp bg-white">
                    <select
                      className="form-select select-field"
                      aria-label="Default select example"
                      name="city"
                      onChange={handleChange}
                    >
                      <option selected>Select City</option>
                      {registerInput.cityList.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-check-label">Zip Code</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Code"
                      name="zipcode"
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-check-label">Year of Experience</label>
                  <div className="form-grp bg-white">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Year of Experience"
                      name="yearexperience"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-check-label">Year Joined</label>
                  <div className="form-grp bg-white">
                    <DatePicker
                      selected={startDate}
                      onChange={dateChanged}
                      dateFormat="d MMM yyyy"
                    />
                  </div>
                </div>

                <div className="clearfix submit-box">
                  <div className="pull-right">
                    <button
                      className="thm-btn margin-top-2 margin-bottom-1"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </form>
      </section>
      <section className="margin-top-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 ">
              <div className="clearfix submit-box">
                <div className="pull-right">
                  <button
                    className="thm-btn margin-top-2 margin-bottom-1"
                    type="submit"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Done
                  </button>
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

export default EditAdvisorProfile;
