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
import Loadercomp from "../modules/Loadercomp";

function EcourseGet(props) {
  const history = useHistory();
  const [startloader, setloader] = React.useState("none");
  useEffect(() => {
    getEclassDetail();
  }, []);

  const getEclassDetail = async () => {
    try {
      try {
        setloader("block");
        var data = {
          id: props.match.params.id,
        };
        let response = await axios
          .post(`/api/download_file`, data)
          .then((data) => data);
        response = await response.data;
        console.log(response);
        setloader("none");
        if (response.status) {
          var fileurl = response.path;
          saveAs(fileurl, response.name);
          setTimeout(function () {
            history.push("/home");
          }, 3000);
        } else {
          swal("warning", "Course Not Uploaded", "warning");
        }
      } catch (error) {
        console.log("error", error);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Loadercomp startloader={startloader} />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Course Download</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            rhoncus turpis.
            <br /> Mauris sagittis eleifend arcu, vitae pretium massa pharetra
            eu.{" "}
          </p>
        </div>
      </section>

      <section className="margin-top-3">
        <div className="container">
          <div className="">
            <div className="col-md-6 margin-top-3">
              <div className="sec-title text-left text-purple">
                <h2>You Succesffuly Course Download </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EcourseGet;
