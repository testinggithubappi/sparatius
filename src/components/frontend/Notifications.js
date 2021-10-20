import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import { getNotificationList } from "../../services/services";
function Notifications(props) {
  const history = useHistory();
  const [notificationlist, setnotificationlist] = useState([]);

  useEffect(() => {
    let role = localStorage.getItem("role");
    if (role == "provider") {
      getNotification();
    }

    // console.log(props);
  }, []);

  const getNotification = async () => {
    let response = await getNotificationList();
    response = await response.data;
    setnotificationlist(response);
    if (props.parentCallback) {
      props.parentCallback(response);
    }
  };

  const onHandleClickPay = (item) => {
    console.log(item);
    var type = item.type;
    if (type == "text") {
      history.push(`/chat/${item.user_id}/${item.customer_id}`);
    }
    if (type == "video") {
      history.push(`/provider/video-call/${item.customer_id}`);
    }
    if (type == "audio") {
      history.push(`/provider/audio-call/${item.customer_id}`);
    }
  };

  return (
    <div>
      <Navbar />
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
                {notificationlist.map((item) => (
                  <li className="gray-bg ">
                    <button
                      style={{ border: 0 }}
                      className="btn-block"
                      onClick={() => {
                        onHandleClickPay(item);
                      }}
                    >
                      {item.msg}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
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
