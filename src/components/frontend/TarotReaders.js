import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import fire from "../../config/firebase";
import { getDatabase, set, ref, onValue, child, get } from "firebase/database";

import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";
import UserItem from "../modules/userItem";
import PaymentModal from "../modules/PaymentModal";
import PaymentModalViewer from "../modules/PaymentModalViewer";

import { OTSession, OTPublisher, OTStreams, OTSubscriber } from "opentok-react";

function TarotReaders(props) {
  const history = useHistory();

  useEffect(() => {
    getProviderList();
  }, []);
  const [checked, setChecked] = React.useState(false);
  const [linkRender, setlinkRender] = React.useState();
  const [providerList, setproviderList] = React.useState({});
  const [editInput, setEditInput] = useState({
    showmodal: false,
  });
  const [registerInput, setRegister] = useState({
    keyword: "",
    Rating: "",
    ReadingAll: false,
    ReadingChat: false,
    ReadingVideo: false,
    ReadingAudio: false,
    RangeStart: "",
    RangeEnd: "",
  });

  const getProviderList = async (path = "/api/providers") => {
    let data = {
      slug: props.match.params.slug,
      keyword: registerInput.keyword,
      Rating: registerInput.Rating,
      ReadingAll: registerInput.ReadingAll,
      ReadingChat: registerInput.ReadingChat,
      ReadingVideo: registerInput.ReadingVideo,
      ReadingAudio: registerInput.ReadingAudio,
      RangeStart: registerInput.RangeStart,
      RangeEnd: registerInput.RangeEnd,
    };
    console.log(path);
    try {
      let response = await axios.post(`${path}`, data).then((data) => data);
      response = await response.data.data;
      console.log(response);
      setproviderList(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const capitalizeWords = (string) => {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  };

  const handleInput = (e) => {
    console.log(e.target);
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    e.persist();
    // setSelectedOption(e.target.value);
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const handlecheckbox = (e) => {
    console.log(e.target.checked);

    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.checked });
  };

  const clearFilter = () => {
    setRegister({
      keyword: "",
      Rating: "",
      ReadingAll: false,
      ReadingChat: false,
      ReadingVideo: false,
      ReadingAudio: false,
      RangeStart: "",
      RangeEnd: "",
    });
  };

  console.log(props);
  let paginationCountArr = [];
  for (let i = 0; i < providerList?.total / providerList?.per_page; i++) {
    paginationCountArr.push(i);
  }
  console.log(paginationCountArr);

  const opeModal = (e) => {
    e.persist();
    console.log(e);
    setEditInput({
      showmodal: true,
    });
  };
  const closeModal = (e) => {
    e.persist();
    console.log(e);
    setEditInput({
      showmodal: false,
    });
  };

  const onHandleClickPay = async (item, prices, indexProvider) => {
    var providerdata = providerList?.data[indexProvider];
    console.log(providerdata);

    localStorage.removeItem("timeMinute");
    localStorage.removeItem("timeSec");
    // // history.push("/chat");

    let role = localStorage.getItem("role");
    console.log(item);
    if (role == "customer") {
      if (item == "text") {
        history.push(`/chat/${providerdata.id}`);
      }
      if (item == "video") {
        history.push(`/video-call/${providerdata.id}`);
        // history.push({ pathname: "/video-call", state: "data_you_need_to_pass" });
      }
      if (item == "audio") {
        history.push(`/audio-call/${providerdata.id}`);
        // history.push({ pathname: "/video-call", state: "data_you_need_to_pass" });
      }
    }

    try {
      // var data = {
      //   serviceName: item,
      //   amount: prices,
      //   description: "one Hour Session",
      // };
      // let response = await axios
      //   .post(`/api/payment`, data)
      //   .then((data) => data);
      // response = await response.data;
      // console.log(response);
      // window.open(response, "_blank");
      // setlinkRender(response);
      // setEditInput({
      //   showmodal: true,
      // });
    } catch (error) {
      console.log("error", error);
    }

    // setEditInput({
    //   showmodal: true,
    // });
  };

  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>{capitalizeWords(props.match.params.slug)}</h2>
        </div>
      </section>
      <PaymentModalViewer
        LinkRender={linkRender}
        showmodal={editInput.showmodal}
        closeModal={closeModal}
      />
      <section className="sec-pad faq-page shop-sidebar sidebar-page">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-side">
                <div className="single-sidebar">
                  <div className="search-widget">
                    <form action="#">
                      <input
                        name="keyword"
                        onChange={handleInput}
                        type="text"
                        placeholder="type your keyword"
                        value={registerInput.keyword}
                      />
                      <button onClick={() => getProviderList()}>
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="sec-title medium text-purple">
                  <h2>Filter By</h2>
                </div>

                <div
                  className="panel-group accordion"
                  id="accordion-one"
                  role="tablist"
                >
                  <div className="panel panel-default">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion-one"
                      href="#accordion-one-collapse-one"
                      className="collapsed"
                      aria-expanded="true"
                    >
                      Reading via
                    </a>

                    <div
                      id="accordion-one-collapse-one"
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-expanded="true"
                    >
                      <div className="inner-box">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={registerInput.ReadingAll}
                            id="defaultCheck1"
                            name="ReadingAll"
                            onChange={(e) => handlecheckbox(e)}
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck1"
                          >
                            {" "}
                            Any{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={registerInput.ReadingChat}
                            id="defaultCheck2"
                            name="ReadingChat"
                            onChange={(e) => handlecheckbox(e)}
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck2"
                          >
                            {" "}
                            Live chat{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="defaultCheck3"
                            checked={registerInput.ReadingVideo}
                            name="ReadingVideo"
                            onChange={(e) => handlecheckbox(e)}
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck3"
                          >
                            {" "}
                            Video call{" "}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="defaultCheck4"
                            checked={registerInput.ReadingAudio}
                            name="ReadingAudio"
                            onChange={(e) => handlecheckbox(e)}
                          />
                          <label
                            className="form-check-label"
                            for="defaultCheck4"
                          >
                            {" "}
                            Voice call{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion-one"
                      href="#accordion-one-collapse-two"
                      className="collapsed"
                      aria-expanded="false"
                    >
                      Price Range (pm)
                    </a>

                    <div
                      id="accordion-one-collapse-two"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-expanded="false"
                      style={{ height: "0px" }}
                    >
                      <div className="inner-box">
                        <div className="form-check">
                          <label
                            className="form-check-label"
                            for="defaultCheck1"
                          >
                            {" "}
                            Start{" "}
                          </label>
                          <input
                            className="form-control price"
                            type="text"
                            value={registerInput.RangeStart}
                            onChange={handleInput}
                            name="RangeStart"
                          />
                        </div>

                        <div className="form-check">
                          <label
                            className="form-check-label"
                            for="defaultCheck2"
                          >
                            {" "}
                            End{" "}
                          </label>
                          <input
                            className="price form-control"
                            type="text"
                            value={registerInput.RangeEnd}
                            name="RangeEnd"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <button
                      href="#"
                      className="thm-btn uppercase margin-top-2 col-md-6 text-center "
                      onClick={() => getProviderList()}
                    >
                      Apply
                    </button>
                    <button
                      onClick={clearFilter}
                      className="thm-btn uppercase margin-top-2 col-md-6 text-center black-color"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {providerList?.data?.map((item, i) => (
              <UserItem
                onHandleClickPay={onHandleClickPay}
                providerList={providerList}
                index={i}
                item={item}
              />
            ))}

            <nav aria-label="..." className="text-center">
              <ul className="pagination font-p">
                <li className="page-item">
                  {" "}
                  <button
                    className="page-link"
                    tabindex="-1"
                    disabled={providerList?.prev_page_url ? !true : !false}
                    onClick={() => getProviderList(providerList?.prev_page_url)}
                    tabindex="-1"
                  >
                    Previous
                  </button>
                </li>
                {providerList
                  ? paginationCountArr.map((x, i) => {
                      return (
                        <li className="page-item">
                          <button
                            className={`page-link ${
                              providerList?.current_page == i + 1
                                ? "active"
                                : ""
                            }`}
                            to="#"
                            onClick={() => {
                              getProviderList(providerList.links[i + 1].url);
                            }}
                          >
                            {i + 1}
                          </button>
                        </li>
                      );
                    })
                  : null}
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => getProviderList(providerList.next_page_url)}
                    disabled={providerList?.next_page_url ? !true : !false}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default TarotReaders;
