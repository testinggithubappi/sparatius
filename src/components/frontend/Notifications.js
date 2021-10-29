import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import Loadercomp from "../modules/Loadercomp";

function Notifications(props) {
  const history = useHistory();
  const [notificationlist, setnotificationlist] = useState([]);
  const [startloader, setloader] = React.useState("none");

  useEffect(() => {
    let role = localStorage.getItem("role");
    if (role == "provider") {
      getNotification();
    }

    // console.log(props);
  }, []);

  // const getNotification = async () => {
  //   let response = await getNotificationList();
  //   response = await response.data;
  //   setnotificationlist(response);
  //   if (props.parentCallback) {
  //     props.parentCallback(response);
  //   }
  // };

  const getNotification = async (path = `/api/get-notification`) => {
    setloader("block");
    let response = await axios.get(`${path}`).then((data) => data);
    response = await response.data;
    console.log(response);
    setloader("none");
    setnotificationlist(response);
  };

  let paginationCountArr = [];
  for (
    let i = 0;
    i < notificationlist?.total / notificationlist?.per_page;
    i++
  ) {
    paginationCountArr.push(i);
  }

  const onHandleClickPay = (item) => {
    localStorage.removeItem("timeMinute");
    localStorage.removeItem("timeSec");
    console.log(item);
    var type = item.type;
    if (type == "text") {
      history.push(`/provider/chat/${item.user_id}/${item.customer_id}`);
    }
    if (type == "video") {
      history.push(`/provider/video-call/${item.customer_id}`);
    }
    if (type == "audio") {
      history.push(`/provider/audio-call/${item.customer_id}`);
    }
  };

  console.log(notificationlist);
  return (
    <div>
      <Navbar />
      <Loadercomp startloader={startloader} />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Notifications</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            rhoncus turpis.
            <br /> Mauris sagittis eleifend arcu, vitae pretium massa pharetra
            eu.{" "}
          </p>
        </div>
      </section>
      <section className="margin-top-3 margin-bottom-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 notificationspage">
              <ul className="font-p">
                {notificationlist
                  ? notificationlist?.data?.map((item, i) => (
                      <div>
                        <li className="gray-bg ">
                          <button
                            style={{ border: 0 }}
                            className="btn-block"
                            onClick={() => {
                              onHandleClickPay(item);
                            }}
                          >
                            {item.msg}&nbsp;Request &nbsp; from&nbsp;
                            {item.firstName}
                            &nbsp;at&nbsp; {item.notification_date}
                          </button>
                        </li>
                        <br />
                      </div>
                    ))
                  : ""}
              </ul>
            </div>

            <nav aria-label="..." className="text-center">
              <ul className="pagination font-p">
                <li className="page-item">
                  {" "}
                  <button
                    className="page-link"
                    tabindex="-1"
                    disabled={notificationlist?.prev_page_url ? !true : !false}
                    onClick={() =>
                      getNotification(notificationlist?.prev_page_url)
                    }
                    tabindex="-1"
                  >
                    Previous
                  </button>
                </li>
                {notificationlist
                  ? paginationCountArr.map((x, i) => {
                      return (
                        <li className="page-item">
                          <button
                            className={`page-link ${
                              notificationlist?.current_page == i + 1
                                ? "active"
                                : ""
                            }`}
                            to="#"
                            onClick={() => {
                              getNotification(
                                notificationlist.links[i + 1].url
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
                      getNotification(notificationlist.next_page_url)
                    }
                    disabled={notificationlist?.next_page_url ? !true : !false}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
            {/* <nav aria-label="..." className="text-center">
              <ul className="pagination font-p">
                <li className="page-item">
                  {" "}
                  <Link className="page-link" to="#" tabindex="-1">
                    Previous
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item active">
                  {" "}
                  <Link className="page-link" to="#">
                    2 <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  {" "}
                  <Link className="page-link" to="#">
                    Next
                  </Link>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Notifications;
