import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import StarRatings from "react-star-ratings";

import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";
import Loadercomp from "../modules/Loadercomp";
function Eclassess(props) {
  const [startloader, setloader] = React.useState("none");
  const [getElassessList, setElassessList] = React.useState([]);
  useEffect(() => {
    getEClassessList();
  }, []);
  const getEClassessList = async (path = "/api/e_classes") => {
    // $data = {};
    setloader("block");
    let response = await axios.post(`${path}`).then((data) => data);
    response = await response.data.data;
    setloader("none");
    setElassessList(response);
  };

  let paginationCountArr = [];
  for (let i = 0; i < getElassessList?.total / getElassessList?.per_page; i++) {
    paginationCountArr.push(i);
  }

  return (
    <div>
      <Navbar />
      <Loadercomp startloader={startloader} />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>E-Classes</h2>
        </div>
      </section>

      <section className="sec-pad faq-page shop-sidebar sidebar-page">
        <div className="container">
          <div className="row">
            {getElassessList?.data?.map((item) => (
              <div className="col-md-4">
                <div className="reading-profile">
                  <div className="reading-profile-inner">
                    <Link to={`/ecourse-detail/` + item.id}>
                      {/* <i className="fa fa-play-circle" aria-hidden="true"></i> */}
                      <img
                        src={
                          item.eclassImage
                            ? item.eclassImage
                            : readingsprofileImg
                        }
                        className="img-responsive readings-profile-img"
                      />
                    </Link>
                    <div className="shape-rating">
                      <span>Top Rated</span>
                      <ul className="list-inline review-star">
                        <StarRatings
                          rating={Math.floor(item.rating)}
                          starRatedColor="yellow"
                          numberOfStars={5}
                          name="rating"
                          starDimension="15px"
                        />
                      </ul>
                      <img
                        src={shaperatingImg}
                        className="img-responsive shape-rating-img"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      <Link to={`/ecourse-detail/` + item.id}>
                        {item.eclassName}
                      </Link>
                    </h3>
                    <small className="color-black">${item.price}</small>
                  </div>

                  <div className="readingsContainerPrice">
                    <div className="text-center ">
                      <h3 className="margin-top-1">
                        <Link
                          to={`/ecourse-detail/` + item.id}
                          className="text-white"
                        >
                          Enroll Course
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <nav aria-label="..." className="text-center">
              <ul className="pagination font-p">
                <li className="page-item">
                  {" "}
                  <button
                    className="page-link"
                    tabindex="-1"
                    disabled={getElassessList?.prev_page_url ? !true : !false}
                    onClick={() =>
                      getEClassessList(getElassessList?.prev_page_url)
                    }
                    tabindex="-1"
                  >
                    Previous
                  </button>
                </li>
                {getElassessList
                  ? paginationCountArr.map((x, i) => {
                      return (
                        <li className="page-item">
                          <button
                            className={`page-link ${
                              getElassessList?.current_page == i + 1
                                ? "active"
                                : ""
                            }`}
                            to="#"
                            onClick={() => {
                              getEClassessList(
                                getElassessList.links[i + 1].url
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
                      getEClassessList(getElassessList.next_page_url)
                    }
                    disabled={getElassessList?.next_page_url ? !true : !false}
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

export default Eclassess;
