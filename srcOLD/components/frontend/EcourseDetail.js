import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";
import PaymentModal from "../modules/PaymentModal";
import StarRatings from "react-star-ratings";
import { saveAs } from "file-saver";
import fileDownload from "js-file-download";

function EcourseDetail(props) {
  const [eclassDetal, setEclassDetail] = React.useState({});
  const [editInput, setEditInput] = useState({
    showmodal: false,
  });

  useEffect(() => {
    getEclassDetail();
  }, []);

  const getEclassDetail = async () => {
    try {
      let path = `/api/e_class_detail/` + props.match.params.id;
      let response = await axios.get(path).then((data) => data);
      response = await response.data.data;
      console.log(response);
      setEclassDetail(response);
    } catch (error) {
      console.log("error", error);
    }
  };

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

  const downloadFileData = async (item) => {
    try {
      console.log(item);
      var data = {
        id: item.id,
      };
      let response = await axios
        .post(`/api/download_file`, data)
        .then((data) => data);
      response = await response.data;
      console.log(response);

      if (response.status) {
        var fileurl = response.path;
        saveAs(fileurl, response.name);
      } else {
        swal("warning", "Course Not Uploaded", "warning");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <Navbar />
      <section
        className="inner-banner has-dot-pattern sec-title text-center"
        style={{ paddingBottom: "0px" }}
      >
        <PaymentModal showmodal={editInput.showmodal} closeModal={closeModal} />
        <div className="container">
          <div className="row">
            <div className="col-md-12 psychic-readings-detail">
              <div className="row">
                <div className="col-md-3">
                  <div className="reading-profile mb-0">
                    <div className="reading-profile-inner">
                      <Link
                        to="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                        <img
                          src={
                            eclassDetal?.eclassImage
                              ? eclassDetal?.eclassImage
                              : readingsprofileImg
                          }
                          className="img-responsive readings-profile-img"
                        />
                      </Link>
                      <div className="shape-rating">
                        <span>Preview this course</span>
                        <img
                          src="img/resources/shape-rating.png"
                          className="img-responsive shape-rating-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 e-courses-detail">
                  <div className="col-md-12 username">
                    <h2 className="text-white text-left ">
                      {eclassDetal?.eclassName}
                    </h2>
                  </div>
                  <div className="col-md-9 top-rated ">
                    <p className=" text-left ">{eclassDetal?.title}</p>
                    <ul className="list-inline review-star text-left star-color">
                      <StarRatings
                        rating={
                          eclassDetal?.rating?.rating
                            ? Math.floor(eclassDetal?.rating?.rating)
                            : 0
                        }
                        starRatedColor="yellow"
                        numberOfStars={5}
                        name="rating"
                        starDimension="30px"
                      />
                    </ul>
                  </div>
                  <div className="col-md-3 readings">
                    <h3>${eclassDetal?.Price}</h3>
                    <button
                      className="thm-btn w-100"
                      type="submit"
                      onClick={() => {
                        downloadFileData(eclassDetal);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" single-service-page sidebar-page">
        <div className="container">
          <div className="col-md-12 pull-right col-sm-12 col-xs-12">
            <div className="row">
              <div className="single-service-tab-box">
                <div className="tab-title">
                  <ul role="tablist" className="font-weight-bold">
                    <li
                      className="active w-33 text-center"
                      data-tab-name="smart"
                    >
                      <Link
                        to="#smart"
                        aria-controls="smart"
                        role="tab"
                        data-toggle="tab"
                      >
                        What you’ll Learn
                      </Link>
                    </li>
                    <li className="w-33 text-center" data-tab-name="attraction">
                      <Link
                        to="#attraction"
                        aria-controls="attraction"
                        role="tab"
                        data-toggle="tab"
                      >
                        Description
                      </Link>
                    </li>
                    <li className="w-33 text-center" data-tab-name="skills">
                      <Link
                        to="#skills"
                        aria-controls="skills"
                        role="tab"
                        data-toggle="tab"
                      >
                        All Reviews
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content font-p">
                  <div
                    className="tab-pane fade in active signle-tab-content"
                    id="smart"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: eclassDetal?.learn,
                      }}
                    />
                  </div>
                  <div
                    className="tab-pane fade signle-tab-content"
                    id="attraction"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: eclassDetal?.description,
                      }}
                    />
                  </div>
                  <div className="tab-pane fade signle-tab-content" id="skills">
                    {eclassDetal?.ratingRview
                      ? eclassDetal?.ratingRview.map((item, i) => (
                          <div key={i}>
                            <div>
                              <p className="font-weight-bold">
                                {item.customername}
                              </p>
                              <small>{item.ratingdate}</small>
                              <p>{item.description}</p>
                            </div>
                            <hr />
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
              <span className="space-60"></span>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EcourseDetail;
