import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";
import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";
import UserItem from "../modules/userItem";
import PaymentModal from "../modules/PaymentModal";
import Loadercomp from "../modules/Loadercomp";

function Favourites(props) {
  const history = useHistory();
  const [startloader, setloader] = React.useState("none");

  useEffect(() => {
    getFavouriteproviderList();
  }, []);
  const [editInput, setEditInput] = useState({
    showmodal: false,
  });
  const [favouriteproviderList, setFavouriteproviderList] = React.useState([]);

  const getFavouriteproviderList = async (path = `/api/get_favorite`) => {
    setloader("block");
    let response = await axios.get(`${path}`).then((data) => data);
    response = await response.data.data;
    console.log(response);
    setloader("none");
    setFavouriteproviderList(response);
  };

  let paginationCountArr = [];
  for (
    let i = 0;
    i < favouriteproviderList?.total / favouriteproviderList?.per_page;
    i++
  ) {
    paginationCountArr.push(i);
  }

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

  const opeModalVideo = (i) => {
    // e.persist();
    // console.log(e);
    setEditInput({
      showmodalVideo: true,
      activeIndex: i,
    });
  };
  const closeModalVideo = (e) => {
    // e.persist();
    // console.log(e);
    setEditInput({
      showmodalVideo: false,
      activeIndex: undefined,
    });
  };

  const onHandleClickPay = async (item, prices, indexProvider) => {
    var providerdata = favouriteproviderList?.data[indexProvider];
    console.log(providerdata);

    localStorage.removeItem("timeMinute");
    localStorage.removeItem("timeSec");
    // // history.push("/chat");
    let path = `/api/payment`;
    var data = {};
    let role = localStorage.getItem("role");
    console.log(item);
    if (role == "customer") {
      setloader("block");
      if (item == "text") {
        data = {
          id: providerdata.id,
          title: "Text Chat",
          msg: "You Have A Text Chat",
          type: "text",
          customerid: localStorage.getItem("user_id"),
          path: `/chat/${providerdata.id}`,
          serviceName: item,
          amount: prices,
          description: "one Hour Session",
        };
        // history.push(`/chat/${providerdata.id}`);
      }
      if (item == "video") {
        data = {
          id: providerdata.id,
          title: "Video Chat",
          msg: "You Have A Video Chat",
          type: "video",
          customerid: localStorage.getItem("user_id"),
          path: `/video-call/${providerdata.id}`,
          serviceName: item,
          amount: prices,
          description: "one Hour Session",
        };

        // history.push(`/video-call/${providerdata.id}`);
        // history.push({ pathname: "/video-call", state: "data_you_need_to_pass" });
      }
      if (item == "audio") {
        data = {
          id: providerdata.id,
          title: "Audio Chat",
          msg: "You Have A Audio Chat",
          type: "audio",
          customerid: localStorage.getItem("user_id"),
          path: `/audio-call/${providerdata.id}`,
          serviceName: item,
          amount: prices,
          description: "one Hour Session",
        };

        // history.push(`/audio-call/${providerdata.id}`);
        // history.push({ pathname: "/video-call", state: "data_you_need_to_pass" });
      }

      let response = await axios.post(path, data).then((data) => data);
      response = await response.data;
      setloader("none");
      window.open(response, "_blank");
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

  const addFavouriteclick = (item) => {
    let role = localStorage.getItem("role");
    if (role == "customer") {
      setloader("block");

      const data = {
        id: item.id,
      };
      let role = localStorage.getItem("role");
      console.log(data);
      if (role == "customer") {
        axios.post("/api/add_favorite", data).then((res) => {
          setloader("none");
          if (res.data.status == 200) {
            swal("Success", "Add Favoutite ", "success");
          } else {
            getFavouriteproviderList();
            swal("Success", res.data.msg, "success");
          }
        });
      }
    }
  };

  const removePeople = (e) => {
    // favouriteproviderList
  };

  console.log(favouriteproviderList);
  return (
    <div>
      <Navbar />
      <Loadercomp startloader={startloader} />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Favourites</h2>
        </div>
      </section>
      {/* <PaymentModal showmodal={editInput.showmodal} closeModal={closeModal} /> */}
      <section className="sec-pad faq-page shop-sidebar sidebar-page">
        <div className="container">
          <div className="row">
            {favouriteproviderList
              ? favouriteproviderList?.data?.map((item, i) => (
                  <UserItem
                    addFavouriteclick={addFavouriteclick}
                    onHandleClickPay={onHandleClickPay}
                    providerList={favouriteproviderList}
                    key={item.id}
                    index={i}
                    item={item}
                    activeIndex={editInput.activeIndex}
                    opeModalVideo={(i) => opeModalVideo(i)}
                    closeModalVideo={closeModalVideo}
                    showmodalVideo={editInput.showmodalVideo}
                  />
                ))
              : ""}

            <nav aria-label="..." className="text-center">
              <ul className="pagination font-p">
                <li className="page-item">
                  {" "}
                  <button
                    className="page-link"
                    tabindex="-1"
                    disabled={
                      favouriteproviderList?.prev_page_url ? !true : !false
                    }
                    onClick={() =>
                      getFavouriteproviderList(
                        favouriteproviderList?.prev_page_url
                      )
                    }
                    tabindex="-1"
                  >
                    Previous
                  </button>
                </li>
                {favouriteproviderList
                  ? paginationCountArr.map((x, i) => {
                      return (
                        <li className="page-item">
                          <button
                            className={`page-link ${
                              favouriteproviderList?.current_page == i + 1
                                ? "active"
                                : ""
                            }`}
                            to="#"
                            onClick={() => {
                              getFavouriteproviderList(
                                favouriteproviderList.links[i + 1].url
                              );
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
                    onClick={() =>
                      getFavouriteproviderList(
                        favouriteproviderList.next_page_url
                      )
                    }
                    disabled={
                      favouriteproviderList?.next_page_url ? !true : !false
                    }
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

export default Favourites;
