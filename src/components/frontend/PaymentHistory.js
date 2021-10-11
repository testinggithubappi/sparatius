import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../layouts/frontend/Navbar";
import Footer from "../../layouts/frontend/Footer";

function PaymentHistory(props) {
  return (
    <div>
      <Navbar />
      <section className="inner-banner has-dot-pattern text-center">
        <div className="container sec-title">
          <h2>Payment History</h2>
        </div>
      </section>

      <section className="margin-top-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 left-side">
              <h3 className="font-weight-bold">Past Order</h3>
              <div className="col-md-12 bg-white">
                <h4 className="font-weight-bold">Tarot Readers</h4>

                <div className="col-md-9">
                  <h2 className="font-weight-bold"></h2>
                  <small>28 Sept 2021, 08:42 PM</small>
                  <p className="font-weight-bold">$10.00</p>
                  <small>Your Order No: 654321</small>
                </div>

                <div className="col-md-3 margin-top-2">
                  <Link href="#">
                    <button className="thm-btn">Rebook</button>
                  </Link>
                </div>
              </div>

              <div className="col-md-12 bg-white  margin-top-1">
                <h4 className="font-weight-bold">Psychic Readers</h4>

                <div className="col-md-9">
                  <h2 className="font-weight-bold"></h2>
                  <small>28 Sept 2021, 08:42 PM</small>
                  <p className="font-weight-bold">$10.00</p>
                  <small>Your Order No: 654321</small>
                </div>

                <div className="col-md-3 margin-top-2">
                  <Link href="#">
                    <button className="thm-btn">Rebook</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-12 bg-white  margin-top-1">
                <h4 className="font-weight-bold">Tarot Readers</h4>

                <div className="col-md-9">
                  <h2 className="font-weight-bold"></h2>
                  <small>28 Sept 2021, 08:42 PM</small>
                  <p className="font-weight-bold">$10.00</p>
                  <small>Your Order No: 654321</small>
                </div>

                <div className="col-md-3 margin-top-2">
                  <Link href="#">
                    <button className="thm-btn">Rebook</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-12 bg-white  margin-top-1">
                <h4 className="font-weight-bold">Psychic Readers</h4>

                <div className="col-md-9">
                  <h2 className="font-weight-bold"></h2>
                  <small>28 Sept 2021, 08:42 PM</small>
                  <p className="font-weight-bold">$10.00</p>
                  <small>Your Order No: 654321</small>
                </div>

                <div className="col-md-3 margin-top-2">
                  <Link href="#">
                    <button className="thm-btn">Rebook</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-12 bg-white  margin-top-1">
                <h4 className="font-weight-bold">Tarot Readers</h4>

                <div className="col-md-9">
                  <h2 className="font-weight-bold"></h2>
                  <small>28 Sept 2021, 08:42 PM</small>
                  <p className="font-weight-bold">$10.00</p>
                  <small>Your Order No: 654321</small>
                </div>

                <div className="col-md-3 margin-top-2">
                  <Link href="#">
                    <button className="thm-btn">Rebook</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default PaymentHistory;
