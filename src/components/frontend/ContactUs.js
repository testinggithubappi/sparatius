import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function ContactUs(props) {
  const [contactInput, setContactInput] = useState({
    name: "",
    email: "",
    type: "",
    description: "",
    error_list: "",
  });

  const handleInput = (e) => {
    e.persist();
    setContactInput({ ...contactInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: contactInput.name,
      email: contactInput.email,
      type: contactInput.type,
      description: contactInput.description,
    };
    console.log(data);
    axios.post("/api/contact_us", data).then((res) => {
      if (res.status == 200) {
        swal("Success", "Contact Send Successfully", "success");
        setContactInput({
          name: "",
          email: "",
          type: "",
          description: "",
        });
      } else {
        setContactInput({
          ...contactInput,
          error_list: res.data.validation_erros,
        });
      }
    });
  };

  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            rhoncus turpis.
            <br /> Mauris sagittis eleifend arcu, vitae pretium massa pharetra
            eu.{" "}
          </p>
        </div>
      </section>
      <form action="#" onSubmit={registerSubmit}>
        <section className=" sec-padding margin-top-4 margin-bottom-3">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 margin-top-4">
                <div className="sec-title-container less-padding-5 text-left"></div>
                <div className="bg-white font-p">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        className="form-control input-1"
                        type="text"
                        placeholder="Name"
                        name="Title"
                        value={contactInput.name}
                        name="name"
                        onChange={handleInput}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <input
                        className="form-control input-1"
                        type="email"
                        placeholder="Email Here"
                        value={contactInput.email}
                        name="email"
                        onChange={handleInput}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <input
                        className="form-control input-1"
                        type="text"
                        placeholder="Type"
                        value={contactInput.type}
                        name="type"
                        onChange={handleInput}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 margin-top-1">
                      <textarea
                        className="form-control input-1"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        placeholder="Enter Description"
                        value={contactInput.description}
                        name="description"
                        onChange={handleInput}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <br />
                    <div className="col-md-12">
                      <button type="submit" className="thm-btn uppercase">
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </section>
      </form>
      <Footer />
    </div>
  );
}

export default ContactUs;
