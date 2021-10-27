import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

import banner2img from "../../assets/frontend/img/resources/banner-2.jpg";
import aboutImg from "../../assets/frontend/img/services/about-img.jpg";

import boxImage1 from "../../assets/frontend/img/services/box-img-2.jpg";
import boxImage2 from "../../assets/frontend/img/services/box-img-2.jpg";
import boxImage3 from "../../assets/frontend/img/services/box-img-3.jpg";

import colImage1 from "../../assets/frontend/img/services/col-img-1.jpg";
import colImage2 from "../../assets/frontend/img/services/col-img-2.jpg";

import review1img from "../../assets/frontend/img/resources/review-1.jpg";
import review2img from "../../assets/frontend/img/resources/review-2.jpg";
import review3img from "../../assets/frontend/img/resources/review-3.jpg";

function Home(props) {
  console.log(props);
  return (
    <div>
      <Navbar />
      <section className="rev_slider_wrapper">
        <div
          className="rev_slider slider1"
          id="slider1"
          data-version="5.0"
          data-height="900"
        >
          <ul>
            <li data-transition="random">
              <img
                src={banner2img}
                alt=""
                width="1920"
                height="900"
                data-bgposition="top center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="1"
              />
              <div
                className="tp-caption tp-resizeme banner-caption-h3"
                data-x="left"
                data-hoffset="0"
                data-y="top"
                data-voffset="300"
                data-transform_idle="o:1;"
                data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;"
                data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                data-mask_in="x:[100%];y:0;s:inherit;e:inherit;"
                data-splitin="none"
                data-splitout="none"
                data-start="500"
              >
                <span className="f-droids"></span>
              </div>
              <div
                className="tp-caption tp-resizeme banner-caption-h2"
                data-x="left"
                data-hoffset="0"
                data-y="top"
                data-voffset="250"
                data-transform_idle="o:1;"
                data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;"
                data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                data-start="1000"
              >
                <span className="">
                  Are you looking for
                  <br />
                  best Psychic Readers
                  <br />
                  Services
                </span>
              </div>
              <div
                className="tp-caption tp-resizeme banner-caption-p"
                data-x="left"
                data-hoffset="0"
                data-y="top"
                data-voffset="515"
                data-transform_idle="o:1;"
                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                data-start="1500"
              >
                <p className="font-p text-white for-mobile">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> id rhoncus turpis. Mauris sagittis eleifend arcu eu.
                </p>
              </div>
              <div
                className="tp-caption tp-resizeme"
                data-x="left"
                data-hoffset="0"
                data-y="top"
                data-voffset="610"
                data-transform_idle="o:1;"
                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                data-start="2000"
              >
                <Link  to={`eclassess`} className="thm-btn uppercase btn-mobile">
                 { (localStorage.getItem("role") != "provider") ?' Book Reading Now':''}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="margin-top-3">
        <div className="container">
          <div className="">
            <div className="col-md-6 ">
              <img src={aboutImg} className="img-responsive" />
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
              <Link to="/aboutus" className="thm-btn uppercase margin-top-2">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="service-box-two sec-pad">
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="text-purple">Our Services</h2>
            <p className="font-p margin-top-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              aliquam lorem et sagittis laoreet.
              <br /> Morbi in sodales ante. Vivamus interdum dictum ante, vitae
              scelerisque velit egestas eget.
            </p>
          </div>
          <div className="row margin-top-3">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="ce4-feature-box-3 margin-bottom box-shadow-1 hover-shadow-1  bg-purple">
                <img src={colImage1} className="img-responsive" />
                <div className="text-box padding-2  text-center ">
                  <h2 className="text-center text-white">Tarot Readers</h2>
                  <p className="margin-bottom-2 text-center text-white font-p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <Link
                     to={`service/tarot-readers`}
                    className="font-weight-6 text-white text-center font-p"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="ce4-feature-box-3 margin-bottom box-shadow-1 hover-shadow-1  bg-purple">
                <img src={colImage2} className="img-responsive" />
                <div className="text-box padding-2  text-center">
                  <h2 className="font-weight-6  text-center text-white">
                    Psychic Readers
                  </h2>
                  <p className="margin-bottom-2 text-center text-white font-p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <Link
                     to={`service/physic-reading`}
                    className="font-weight-6 text-white text-center font-p"
                  >
                    Read More
                  </Link>
                </div>
              </div>
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
              <img src={boxImage1} className="img-responsive img-1" />
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
              <img src={boxImage2} className="img-responsive img-1" />
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
              <img src={boxImage2} className="img-responsive img-1" />
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
                          <img src={review2img} alt="Review Image" />
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
                          <img src={review3img} alt="Review Image" />
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

export default Home;
