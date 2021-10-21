import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";
import swal from "sweetalert";

export default function CountDownTimer(props) {
  const history = useHistory();
  const [RatingData, setRatingData] = useState({
    description: "",
  });
  const [Ratingval, setRatingval] = useState(0);
  const [editInput, setEditInput] = useState({
    showmodal: false,
  });
  const { hours = 0, minutes = 0, seconds = 60 } = props.hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([
    hours,
    minutes,
    seconds,
  ]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    // console.log("timerId", timerId);
    return () => clearInterval(timerId);
  });
  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      localStorage.setItem("timeMinute", 0);
      localStorage.setItem("timeSec", 0);
      console.log(
        "secssecssecs if (hrs === 0 && mins === 0 && secs === 0)",
        secs
      );
      reset();
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
      localStorage.setItem("timeMinute", mins);
      console.log("secssecssecs if (mins === 0 && secs === 0)", secs);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
      // localStorage.setItem("timeMinute",mins);
      localStorage.setItem("timeSec", secs);
      console.log("secssecssecs else if (secs === 0)", secs);
    } else {
      setTime([hrs, mins, secs - 1]);
      localStorage.setItem("timeMinute", mins);
      localStorage.setItem("timeSec", secs);
      console.log("secssecssecs Elsw", secs);
    }
  };

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    var role = localStorage.getItem("role");
    if (role == "customer") {
      const data = {
        provider: props.provider,
        servicetype: props.servicetype,
        type: props.type,
        eclass: props.eclass,
      };
      localStorage.setItem("RatingData", JSON.stringify(data));
      localStorage.removeItem("timeMinute");
      localStorage.removeItem("timeSec");
      history.push(`/raitng`);
    } else {
      localStorage.removeItem("RatingData");
      history.push(`/home`);
    }

    // opeModal();
  };

  const opeModal = () => {
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
    history.push(`/home`);
  };

  const submitProfile = (e) => {
    e.preventDefault();
    const data = {
      description: RatingData.description,
      rating: Ratingval,
      provider: props.provider,
      servicetype: props.servicetype,
      type: props.type,
      eclass: props.eclass,
    };
    axios.post("/api/rating", data).then((res) => {
      if (res.data.status == 200) {
        swal("Success", "Update Succesfully", "success");
        history.push(`/home`);
        localStorage.removeItem("timeMinute");
        localStorage.removeItem("timeSec");
      } else {
      }
    });
  };

  const handleInput = (e) => {
    e.persist();
    setRatingData({ ...RatingData, [e.target.name]: e.target.value });
  };

  const changeRating = (newRating, name) => {
    console.log(newRating);
    setRatingval(newRating);
  };

  return (
    <div>
      <p>{`${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>

      <div>
        <div
          className={"modal fade " + (editInput.showmodal ? "in" : "")}
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: editInput.showmodal ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <form onSubmit={submitProfile} action="#">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="sec-title text-center">
                    <h3 className="text-purple">Submit Review And Rating</h3>
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
                  <button type="submit" className="btn btn-block btn-primary">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-block btn-secondary"
                    onClick={editInput.closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
