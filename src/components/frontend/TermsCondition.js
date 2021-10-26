import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function TermsCondition(props) {
  useEffect(() => {
    getTermsCondition();
  }, []);

  const [getTermscondition, setTermsCondtion] = React.useState([]);

  const getTermsCondition = async () => {
    let response = await axios
      .get(`/api/getTermscondition`)
      .then((data) => data);
    response = await response.data.data.value;
    setTermsCondtion(response);
  };
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Terms & Conditions</h2>
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
            <div className="col-md-12">
              <p className="font-p text-just">
                <div
                  dangerouslySetInnerHTML={{
                    __html: getTermscondition,
                  }}
                ></div>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TermsCondition;
