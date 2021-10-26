import React, { useEffect } from "react";
import axios from "axios";
import shaperatingImg from "../../assets/frontend/img/resources/shape-rating.png";
import readingsprofileImg from "../../assets/frontend/img/resources/readings-profile-img.jpg";
import dotImg from "../../assets/frontend/img/dot.png";
import swal from "sweetalert";
import { getDatabase, set, ref, onValue, child, get } from "firebase/database";
import fire from "../../config/firebase";
import { Link, useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ReactPlayer from "react-player";

import Modal from "./Modal";

function UserItem(props) {
  const [online, setOnline] = React.useState(false);
  const [ModalVideo, setModalVideo] = React.useState({});

  useEffect(() => {
    var providerdata = props.providerList?.data[props.index];
    checkUseronline(providerdata.id);
  }, []);

  const checkUseronline = (userId) => {
    let database = getDatabase(fire);
    let dbref = ref(database, `users/${userId}`);
    onValue(dbref, (snapshot) => {
      const onlineDB = snapshot.val();
      setOnline(onlineDB.online);
    });
  };

  const loadPrices = (type, prices) => {
    var arraytype = type.split(",");
    var arrayprices = prices.split(",");
    console.log("arraytype", arraytype);
    console.log("arrayprices", arrayprices);

    if (arraytype.length > 0) {
      const arrayTags = [];
      arraytype.map((type) => {
        if (arrayTags.indexOf(type) === -1) {
          arrayTags.push(type);
        }
      });

      console.log("arrayTags", arrayTags);

      return arrayTags.map((item, i) => {
        console.log(item);
        var Type = "Video Call";
        if (item == "text") {
          Type = "Chat";
        } else if (item == "audio") {
          Type = "Audio Call";
        }
        return (
          <li>
            <button
              onClick={() => {
                props.onHandleClickPay(item, arrayprices[i], props.index);
              }}
            >
              <i className="fa fa-comments" aria-hidden="true"></i>
              <br />${arrayprices[i]}/hour
              <p>${Type}</p>
            </button>
          </li>
        );
      });
    }
  };

  const addFavouriteclick = (item) => {
    const data = {
      id: item.id,
    };
    let role = localStorage.getItem("role");
    console.log(data);
    if (role == "customer") {
      axios.post("/api/add_favorite", data).then((res) => {
        if (res.data.status == 200) {
          swal("Success", "Add Favoutite ", "success");
        } else {
          swal("Success", res.data.msg, "success");
        }
      });
    }
  };

  let { item } = props;
  console.log(item);
  return (
    <div>
      <Modal
        Modaltitle={item.firstName}
        modalbody={
          <ReactPlayer
            style={{ position: "absolute", top: 0, left: 0 }}
            playing={true}
            width="100%"
            height="200px"
            url={item.videoPath}
            controls={true}
          />
        }
        closeModalVideo={props.closeModalVideo}
        showmodalVideo={
          props.showmodalVideo && props.index === props.activeIndex
        }
      />
      <div className="col-md-4">
        <div className="reading-profile">
          <div className="reading-profile-inner">
            <button
              onClick={() => {
                setModalVideo(item.firstName);
                props.opeModalVideo(props.index);
              }}
            >
              <i className="fa fa-play-circle" aria-hidden="true"></i>
              <img
                src={readingsprofileImg}
                className="img-responsive readings-profile-img"
              />
            </button>
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
              {online ? (
                <img
                  src={dotImg}
                  style={{ height: 16, width: 16, marginRight: 5 }}
                />
              ) : null}

              <Link to={`/provider/detail/${item.id}/${item.serviceId}`}>
                {item.firstName}
              </Link>
            </h3>
            {/* <small className="color-black">Leading UK Tarot Readings</small> */}
          </div>
          <div className="readingsContainer">
            <ul>
              <li>
                10,376
                <p>Readings</p>
              </li>
              <li>
                {item.joinedYear}
                <p>Year joined</p>
              </li>
              <li>
                <i
                  onClick={() => {
                    addFavouriteclick(item);
                  }}
                  className="fa fa-heart"
                  aria-hidden="true"
                ></i>
                <p>
                  <button
                    onClick={() => {
                      addFavouriteclick(item);
                    }}
                  >
                    Favorite
                  </button>
                </p>
              </li>
              {/* <li>
              <i className="fa fa-bell" aria-hidden="true"></i>
              <p>Notificaton</p>
            </li> */}
            </ul>
          </div>

          <div className="col-md-12 dec">
            <p>{item.description} </p>
          </div>

          <div className="readingsContainerPrice">
            <ul>{loadPrices(item.type, item.prices)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
