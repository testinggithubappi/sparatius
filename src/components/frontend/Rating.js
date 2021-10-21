import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function Rating(props) {
  const history = useHistory();
  const [RatingData, setRatingData] = useState({
    description: "",
  });
  const [Ratingval, setRatingval] = useState(0);

  const handleInput = (e) => {
    e.persist();
    setRatingData({ ...RatingData, [e.target.name]: e.target.value });
  };

  const changeRating = (newRating, name) => {
    console.log(newRating);
    setRatingval(newRating);
  };

  const submitProfile = (e) => {
    e.preventDefault();
    var Ratingobj = JSON.parse(localStorage.getItem("RatingData"));
    const data = {
      description: RatingData.description,
      rating: Ratingval,
      provider: Ratingobj.provider,
      servicetype: Ratingobj.servicetype,
      type: Ratingobj.type,
      eclass: Ratingobj.eclass,
    };
    console.log(data);

    axios.post("/api/rating", data).then((res) => {
      if (res.data.status == 200) {
        swal("Success", "Update Succesfully", "success");
        history.push(`/home`);
        localStorage.removeItem("timeMinute");
        localStorage.removeItem("timeSec");
        localStorage.removeItem("RatingData");
      } else {
      }
    });
  };

  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Review And Rating</h2>
        </div>
      </section>

      <section className="sec-pad faq-page shop-sidebar sidebar-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="video-screen">
                <div className="row">
                  <form onSubmit={submitProfile} action="#">
                    <div className="modal-content">
                      <div className="modal-header">
                        <div className="sec-title text-center">
                          <h3 className="text-purple">
                            Submit Review And Rating
                          </h3>
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-12">
                            <StarRatings
                              rating={Ratingval}
                              starRatedColor="blue"
                              changeRating={changeRating}
                              numberOfStars={5}
                              name="rating"
                            />
                          </div>
                          <div className="col-md-12">
                            <textarea
                              row="10"
                              onChange={handleInput}
                              name="description"
                              className="form-control"
                            >
                              {RatingData.description}
                            </textarea>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="submit"
                          className="btn btn-block btn-primary"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Rating;
