import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import colimg1 from "../../assets/frontend/img/services/col-img-1.jpg";
import colimg2 from "../../assets/frontend/img/services/col-img-2.jpg";

import { getList } from "../../services/services";

function Services(props) {
  const [servicelist, setServicelist] = useState([]);

  useEffect(() => {
    getService();
  }, []);

  const getService = async () => {
    let response = await getList();
    response = await response.data.services;
    setServicelist(response);
  };

  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            rhoncus turpis.
            <br /> Mauris sagittis eleifend arcu, vitae pretium massa pharetra
            eu.{" "}
          </p>
        </div>
      </section>

      <section className="service-box-two sec-pad">
        <div className="container">
          <div className="row ">
            {servicelist.map((item, index) => (
              <div key={item.id} className="col-md-6 col-sm-6 col-xs-12">
                <div className="ce4-feature-box-3 margin-bottom box-shadow-1 hover-shadow-1  bg-purple">
                  <img
                    src={index == 0 ? colimg1 : colimg2}
                    className="img-responsive"
                  />
                  <div className="text-box padding-2  text-center ">
                    <h2 className="text-center text-white">{item.name}</h2>
                    <p className="margin-bottom-2 text-center text-white font-p">
                      {item.description}
                    </p>
                    <Link
                      to={`service/`+item.slug}
                      className="font-weight-6 text-white text-center font-p"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
