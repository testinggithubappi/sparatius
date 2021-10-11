import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import about1Img from "../../assets/frontend/img/services/about-img.jpg";
import boximg1 from "../../assets/frontend/img/services/box-img-1.jpg";
import boximg2 from "../../assets/frontend/img/services/box-img-2.jpg";
import boximg3 from "../../assets/frontend/img/services/box-img-3.jpg";
import review1img from "../../assets/frontend/img/resources/review-1.jpg";

function aboutUs(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>About Us</h2>
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
            <div className="col-md-6 ">
              <img src={about1Img} className="img-responsive" />
            </div>
            <div className="col-md-6 margin-top-3">
              <div className="sec-title text-left text-purple">
                <h2>About Us</h2>
                <h2>Welcome to Spiritus Tarot</h2>
              </div>
              <p className="font-p text-just">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                aliquam lorem et sagittis laoreet. Morbi in sodales ante.
                Vivamus interdum dictum ante, vitae scelerisque velit egestas
                eget. Morbi ultricies tortor non dolor vehicula euismod id erat
                vitae, iaculis suscipit nulla. Etiam venenatis augue massa, nec
                dictum scelerisque velit egestas eget. Morbi ultricies tortor
                non dolor vehicula euismod id erat vitae, iaculis suscipit
                nulla. Etiam venenatis augue massa, nec dictum sapien suscipit
                sit amet. Curabitur sit amet tempus felis, ac ultrices libero.
                Duis dignissim aliquam mi quis feugiat.
                <br />
                Sed in tempor odio. Nulla condimentum accumsan turpis nec
                feugiat. Vivamus nec molestie magna. Aliquam sit amet dictum
                augue, tempor mattis justo. Sed ultricies sapien imperdiet
                venenatis varius. Sed quam odio, aliquet eu dapibus ut,
                scelerisque eget tellus. Nullam euismod condimentum tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 nopadding">
              <div className="sec-title text-center text-purple">
                <h2>How its Work</h2>
                <p className="font-p margin-top-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris aliquam lorem et sagittis laoreet.
                  <br /> Morbi in sodales ante. Vivamus interdum dictum ante,
                  vitae scelerisque velit egestas eget.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <img src={boximg1} className="img-responsive img-1" />
              <div className="how-it-work-text">
                <h1 className="sec-title">01</h1>
                <p className="font-weight-b font-p">
                  Submit a question
                  <br />
                  to a Psychic
                  <br />
                  Advisor
                </p>
              </div>
            </div>

            <div className="col-md-4 ">
              <img src={boximg2} className="img-responsive img-1" />
              <div className="how-it-work-text">
                <h1 className="font-weight-7">02</h1>
                <p className="font-weight-b font-p">
                  Get notified when your
                  <br /> personalized reading
                  <br /> is ready
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={boximg3} className="img-responsive img-1" />
              <div className="how-it-work-text">
                <h1 className="font-weight-bold">03</h1>
                <p className="font-weight-b font-p">
                  View the video
                  <br /> reading and follow
                  <br /> up by messaging
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pad two-color-overlay testi-choose-box margin-top-3">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 pull-left col-sm-12">
              <div className="sec-title">
                <h2 className="text-purple">What Clients Are Saying</h2>
                <p className="font-p margin-top-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris aliquam lorem et sagittis laoreet.
                  <br /> Morbi in sodales ante. Vivamus interdum dictum ante,
                  vitae scelerisque velit egestas eget.
                </p>
              </div>
              <div className="testimonial-home">
                <div className="testimonila-home-carousel owl-carousel owl-theme margin-top-2">
                  <div className="item">
                    <div className="single-testimonial-home">
                      <div className="name-box">
                        <div className="icon-box">
                          <img src={review1img} alt="Review Image" />
                        </div>
                        <div className="text-box">
                          <h4>William Steves</h4>
                          <span>CEO & Founder</span>
                        </div>
                      </div>
                      <i className="fn-icon-quotation-mark"></i>
                      <p>
                        How to pursue pleasures rationally encounters
                        consequences that are extremely painful nor against sed
                        is there anyone who loves or pursues or desires to
                        obtain pain of itself, because it great pleasure
                        explores human happiness.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-testimonial-home">
                      <div className="name-box">
                        <div className="icon-box">
                          <img src={review1img} alt="Review Image" />
                        </div>
                        <div className="text-box">
                          <h4>William Steves</h4>
                          <span>CEO & Founder</span>
                        </div>
                      </div>
                      <i className="fn-icon-quotation-mark"></i>
                      <p>
                        How to pursue pleasures rationally encounters
                        consequences that are extremely painful nor against sed
                        is there anyone who loves or pursues or desires to
                        obtain pain of itself, because it great pleasure
                        explores human happiness.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-testimonial-home">
                      <div className="name-box">
                        <div className="icon-box">
                          <img src={review1img} alt="Review Image" />
                        </div>
                        <div className="text-box">
                          <h4>William Steves</h4>
                          <span>CEO & Founder</span>
                        </div>
                      </div>
                      <i className="fn-icon-quotation-mark"></i>
                      <p>
                        How to pursue pleasures rationally encounters
                        consequences that are extremely painful nor against sed
                        is there anyone who loves or pursues or desires to
                        obtain pain of itself, because it great pleasure
                        explores human happiness.
                      </p>
                    </div>
                  </div>
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

export default aboutUs;
