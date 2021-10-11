import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      <section className="footer-bottom margin-top-3">
        <div className="container">
          <div className="copyright pull-left">
            <p className="font-p font-weight-bold text-white">
              2021 © All rights reserved by Spiritus Tarot
            </p>
          </div>
          <div className="social pull-right">
            <ul className="list-inline">
              <li>
                <Link to="/#">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <i className="fa fa-google-plus"></i>
                </Link>
              </li>
              <li>
                <Link to="/#">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-angle-up"></span>
      </div>
    </div>
  );
}

export default Footer;
