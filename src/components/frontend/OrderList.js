import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import colImg1 from "../../assets/frontend/img/services/col-img-1.jpg";
import colImg2 from "../../assets/frontend/img/services/col-img-2.jpg";

import Loadercomp from "../modules/Loadercomp";

function OrderList(props) {
  useEffect(() => {
    getOrderLIst();
  }, []);
  const [startloader, setloader] = React.useState("none");
  const [OrderList, SetOrderList] = useState([]);

  const getOrderLIst = async (path = `/api/order_history`) => {
    setloader("block");
    let response = await axios.get(`${path}`).then((data) => data);
    response = await response.data.history;

    console.log("response Order list", response);
    setloader("none");
    SetOrderList(response);
  };

  let paginationCountArr = [];
  for (let i = 0; i < OrderList?.total / OrderList?.per_page; i++) {
    paginationCountArr.push(i);
  }

  return (
    <div>
      <Navbar />
      <Loadercomp startloader={startloader} />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Order List</h2>
        </div>
      </section>

      <section className="margin-top-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 left-side">
              {OrderList?.data?.map((item) => (
                <div className="col-md-12 bg-white margin-top-1">
                  <h4 className="font-weight-bold">Order # {item.book_id}</h4>
                  <p>{item.book_date}</p>
                  <div className="col-md-3 margin-top-2">
                    <img src={colImg2} className="img-responsive" />
                  </div>
                  <div className="col-md-6">
                    <h2 className="font-weight-bold">
                      {item.provider_name
                        ? item.provider_name
                        : item.eclass_name}{" "}
                      &nbsp; (
                      {item.service_name ? item.service_name : "E Class"})
                    </h2>
                    <small>
                      {item.service_description ? (
                        item.service_description
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.e_class_description,
                          }}
                        />
                      )}
                    </small>
                    <p className="font-weight-bold">${item.total_price}</p>
                  </div>

                  <div className="col-md-3 margin-top-2">
                    <a href="#">
                      {/* <button className="thm-btn">Reoder</button> */}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-2"></div>

            <nav aria-label="..." className="text-center">
              <ul className="pagination font-p">
                <li className="page-item">
                  {" "}
                  <button
                    className="page-link"
                    tabindex="-1"
                    disabled={OrderList?.prev_page_url ? !true : !false}
                    onClick={() => getOrderLIst(OrderList?.prev_page_url)}
                    tabindex="-1"
                  >
                    Previous
                  </button>
                </li>
                {OrderList
                  ? paginationCountArr.map((x, i) => {
                      return (
                        <li className="page-item">
                          <button
                            className={`page-link ${
                              OrderList?.current_page == i + 1 ? "active" : ""
                            }`}
                            to="#"
                            onClick={() => {
                              getOrderLIst(OrderList.links[i + 1].url);
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
                    onClick={() => getOrderLIst(OrderList.next_page_url)}
                    disabled={OrderList?.next_page_url ? !true : !false}
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

export default OrderList;
