import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";
import VideoThumbnail from "react-video-thumbnail";
import moment from "moment";
import Loadercomp from "../modules/Loadercomp";
import {
  getCountrytList,
  getStatetList,
  getCityList,
} from "../../services/custom";

function EditAdvisorProfile(props) {
  const history = useHistory();
  const [startloader, setloader] = React.useState("none");
  const [CountryList, setCountryList] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [servicelist, setServicelist] = useState([]);
  const [serviceOption, setserviceOption] = useState([]);
  const [defaultserviceOption, setdefaultserviceOption] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [registerInput, setRegister] = useState({
    firstname: "",
    lastname: "",
    contactno: "",
    country: "",
    city: "",
    state: "",
    yearexperience: "",
    yearjoined: "",
    error_list: {},
    gender: "",
    zipcode: "",
    stateList: [],
    cityList: [],
    imageFile: null,
    selectimageFile: null,
    selectService: [],
    profileAbout: "",
    selectDate: "",
    profileService: "",
    email: "",
  });

  const [arrFeilds, setFeilds] = useState([]);
  console.log("stateList", registerInput.stateList);
  useEffect(() => {
    getCountry();
    getEditProfile();
  }, []);
  // useEffect(() => {
  //   // if(editPro)
  //   // getCity(res[pceID])
  //   console.log("useEffect stateList");
  // }, [registerInput.stateList]);

  const getEditProfile = async () => {
    setloader("block");
    let response = await axios.post(`/api/profile_data`).then((data) => data);
    let responsedata = response.data.profile;
    console.log("responsedataresponsedataresponsedata", response);
    // setRegister({ firstname: responsedata.firstname });

    // setRegister({ ...registerInput, firstname: response.firstname });

    // getState(responsedata?.countryId);

    let option = response?.data?.services2;

    //  setserviceOption([...option]);
    setRegister({
      ...registerInput,
      firstname: responsedata?.firstName,
      lastname: responsedata?.LastName,
      contactno: responsedata?.contactNo,
      email: responsedata?.email,
      state: responsedata?.stateId,
      country: responsedata?.countryId,
      city: responsedata?.cityId,
      zipcode: responsedata?.zipCode,
      gender: responsedata?.gender,
      yearexperience: responsedata?.yearExperience,
      stateList: responsedata?.statelist,
      cityList: responsedata?.citylist,
      selectService: response?.data?.services2,
      profileAbout: responsedata?.description,
      selectimageFile: responsedata?.videoPathFull,
      selectDate: responsedata?.joinedDate,
      profileService: responsedata?.service_description,
    });

    setdefaultserviceOption(response?.data?.services2);
    setStartDate(new Date(responsedata?.joinedDate));
    setloader("none");
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  const handleSubmitVideos = (event) => {
    event.preventDefault();
    if (selectedFile) {
      setloader("block");
      let formData = new FormData();
      formData.append("file", selectedFile);
      axios
        .post("/api/profile_video", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        })
        .then((res) => {
          if (res.data.status == 200) {
            swal("Success", res.data.msg, "success");
          } else {
          }
          setloader("none");
        });
    } else {
      swal("Error", "Please Must  Select Video", "error");
    }
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
    setloader("block");
    const data = {
      profileAbout: registerInput.profileAbout,
    };
    axios.post("/api/profile_about", data).then((res) => {
      if (res.data.status == 200) {
        swal("Success", res.data.msg, "success");
        // history.push("/home");
      } else {
        // setRegister({
        //   ...registerInput,
        //   error_list: res.data.validation_erros,
        // });
      }
      setloader("none");
    });
  };

  const personalDetailSubmit = (e) => {
    e.preventDefault();
    setloader("block");
    const data = {
      firstname: registerInput.firstname,
      lastname: registerInput.lastname,
      contactno: registerInput.contactno,
      email: registerInput.email,
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
      console.log("resresresres1200", res);
      if (res.data.status == 200) {
        swal("Success", res.data.msg, "success");
        setRegister({
          ...registerInput,
          error_list: {},
        });
        // history.push("/home");
      } else {
        setRegister({
          ...registerInput,
          error_list: res.data.msg,
        });
      }
      setloader("none");
    });
  };
  const serviceSelectSubmit = (e) => {
    e.preventDefault();
    setloader("block");
    console.log("registerInput.selectService", registerInput.selectService);
    // return;
    axios
      .post("/api/profile_service", {
        selectService: registerInput.selectService,
        service_description: registerInput.profileService,
      })
      .then((res) => {
        console.log("resresresres", res);
        if (res.data.status == 200) {
          swal("Success", res.data.msg, "success");
          // history.push("/home");
        }
        setloader("none");
      });
  };

  const handleCallback = (childData) => {
    setServicelist(childData);
    // let option = [];
    console.log("childData 229", childData);
    const option = childData?.map((item) => {
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

  const handleChangeService = (e, { removedValue }) => {
    var options = e;
    var value = [];
    console.log("removedValue", removedValue);
    if (removedValue) {
      // console.log("registerInput.selectService", registerInput.selectService);
      // console.log("removedValue", removedValue);
      const foundIndex = registerInput.selectService.findIndex(
        (x) => x.value == removedValue.value
      );
      // console.log("foundIndexfoundIndex", foundIndex);
      registerInput.selectService.splice(foundIndex, 1);
      // console.log("registerInput.selectService", registerInput.selectService);
      setRegister({ ...registerInput });
    } else {
      registerInput.selectService.push({
        ...options,
        pricechat: 0,
        priceaudio: 0,
        pricevideo: 0,
      });

      setRegister({ ...registerInput, selectService: options });
    }
  };

  const dateChanged = (value, e) => {
    console.log(value); // this will be a moment date object
    console.log(e.target); // this will be a string value in datepicker input field
    console.log(moment(value).format("yyyy-MM-dd"));
    setRegister({ ...registerInput, selectDate: value });
    // const d = new Date(moment(value).format("yyyy-MM-d"));
    setStartDate(value);
  };
  console.log("serviceOption", serviceOption);
  console.log("registerInput.selectService", registerInput.selectService);
  return (
    <div>
      <Navbar parentCallback={handleCallback} />
      <Loadercomp startloader={startloader} />
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
                  placeholder="Description here"
                  style={{ height: "auto" }}
                  name="profileAbout"
                  onChange={handleChange}
                  value={registerInput.profileAbout}
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
                  {serviceOption?.length > 0 ? (
                    <Select
                      isMulti
                      name="colors"
                      className="basic-multi-select"
                      classNamePrefix="select"
                      value={
                        registerInput.selectService.length > 0
                          ? registerInput.selectService.map((item, index) => {
                              var valuedata = {
                                value: item.value,
                                label: item.label,
                              };
                              return valuedata;
                            })
                          : undefined
                      }
                      options={serviceOption}
                      onChange={handleChangeService}
                    />
                  ) : null}
                </div>
                {registerInput.selectService.map((item, index) => (
                  <div key={item.id} className="row">
                    <div className="col-md-3">
                      <label>{item.label}</label>
                    </div>
                    <div className="col-md-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Chat Price"
                        value={registerInput.selectService[index]["pricechat"]}
                        onChange={(e) => {
                          registerInput.selectService[index]["pricechat"] =
                            e.target.value;
                          setRegister({ ...registerInput });
                        }}
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Audio Call Price"
                        name="audiocallprice[]"
                        value={registerInput.selectService[index]["priceaudio"]}
                        onChange={(e) => {
                          registerInput.selectService[index]["priceaudio"] =
                            e.target.value;
                          setRegister({ ...registerInput });
                        }}
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="video Call Price"
                        name="videocallprice"
                        value={registerInput.selectService[index]["pricevideo"]}
                        onChange={(e) => {
                          registerInput.selectService[index]["pricevideo"] =
                            e.target.value;
                          setRegister({ ...registerInput });
                        }}
                      />
                    </div>
                  </div>
                ))}

                <textarea
                  className="form-control margin-top-2"
                  id="exampleFormControlTextarea1Service"
                  rows="4"
                  placeholder="Service Description here"
                  style={{ height: "auto" }}
                  name="profileService"
                  onChange={handleChange}
                  value={registerInput.profileService}
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
                      <p>
                        {registerInput.selectimageFile
                          ? registerInput.selectimageFile.replace(
                              /^.*[\\\/]/,
                              ""
                            )
                          : "Select a file to show details"}
                      </p>
                    )}
                    <div></div>
                  </div>
                </div>

                <VideoThumbnail
                  videoUrl={registerInput.selectimageFile}
                  thumbnailHandler={(thumbnail) => console.log("")}
                  width={200}
                  height={200}
                />
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
                      value={registerInput.firstname}
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
                      value={registerInput.lastname}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-check-label">Phone</label>
                  <div className="form-grp bg-white">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone No"
                      name="contactno"
                      onChange={handleInput}
                      value={registerInput.contactno}
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
                      value={registerInput.gender}
                    >
                      <option value="" selected>
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
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
                      value={registerInput.country}
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
                      name="state"
                      onChange={handleChangeState}
                      value={registerInput.state}
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
                      value={registerInput.city}
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
                      value={registerInput.zipcode}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-check-label">Year of Experience</label>
                  <div className="form-grp bg-white">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Year of Experience"
                      name="yearexperience"
                      onChange={handleInput}
                      value={registerInput.yearexperience}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-check-label">Year Joined</label>
                  <div className="form-grp bg-white">
                    <DatePicker
                      renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                      }) => (
                        <div
                          style={{
                            margin: 10,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <button
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                          >
                            {"<"}
                          </button>
                          <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) => {
                              setStartDate(date);
                              changeYear(value);
                            }}
                          >
                            {years.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) => {
                              changeMonth(months.indexOf(value));
                              console.log(date);
                              setStartDate(date);
                            }}
                          >
                            {months.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <button
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                          >
                            {">"}
                          </button>
                        </div>
                      )}
                      selected={startDate}
                      onChange={(value, e) => dateChanged(value, e)}
                    />

                    {/* <DatePicker
                      selected={startDate}
                      onChange={(value, e) => dateChanged(value, e)}
                      dateFormat="MMM dd  yyyy"
                    /> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <ul>
                    {registerInput.error_list
                      ? Object.keys(registerInput.error_list).map((key) => {
                          return (
                            <li style={{ color: "red" }}>
                              {registerInput.error_list[key][0]}
                            </li>
                          );
                        })
                      : null}
                  </ul>
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
                  {/* <button
                    className="thm-btn margin-top-2 margin-bottom-1"
                    type="submit"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Done
                  </button> */}
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
