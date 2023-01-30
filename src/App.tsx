import React, { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.scss";
import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input";

function App() {
  const [value, setValue]: any = useState();

  return (
    <div>
      <header>
        <img src={logo} alt="Logo image" />
      </header>
      <div className="subscription-container">
        <div className="subscription-form">
          <a href="javascript:;" className="back-btn">
            &lt;&nbsp;&nbsp;Back
          </a>
          <h1>To subscribe in 3 steps</h1>
          <div className="subscription-form-steps">
            <ul>
              <li className="completed">
                <a href="javascript:;">
                  <span>1</span>term
                </a>
              </li>
              <li className="active">
                <a href="javascript:;">
                  <span>2</span>Subscription
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>3</span>Data & Payment
                </a>
              </li>
            </ul>
          </div>
          <div className="subscription-terms-tabs gray-box">
            <h2>Term</h2>
            <div className="subscription-btn-group">
              <div className="subscription-btn">
                <input
                  type="radio"
                  id="yearly-tab"
                  name="check-substitution-2"
                />
                <label htmlFor="yearly-tab">Yealy</label>
              </div>
              <div className="subscription-btn">
                <input
                  type="radio"
                  id="monthly-tab"
                  checked
                  name="check-substitution-2"
                />
                <label htmlFor="monthly-tab">Monthly</label>
              </div>
            </div>
          </div>
          <div className="subscription-type gray-box">
            <h2>Subscription</h2>
            <div className="subscription-type-options">
              <div>
                <input type="radio" id="type-1" name="radio-group" checked />
                <label htmlFor="type-1">Unlimited 69 Chf</label>
              </div>
              <div>
                <input type="radio" id="type-2" name="radio-group" />
                <label htmlFor="type-2">Started 69 Chf</label>
              </div>
            </div>
          </div>
          <div className="payment-form gray-box">
            <h2>Payment Details</h2>
            <div className="form-control-box">
              <div className="form-input-box">
                <label>Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="First Name"
                />
              </div>
              <div className="form-input-box">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="form-control-box">
              <div className="form-input-box custom-phone">
                <label>Phone Number</label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
            <div className="form-control-box">
              <div className="form-input-box">
                <label>Your Email</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="@example.com"
                />
              </div>
            </div>
            <div className="form-control-box terms-checkbox">
              <input type="checkbox" id="termsCheck" />
              <label htmlFor="termsCheck">
                You consent to an account being opened for you as a payer and
                agree to our Terms of Service.
              </label>
            </div>
            <div className="form-control-box">
              <div className="form-input-box custom-phone">
                <label>
                  Your child's mobile number For which we should activate the
                  account
                </label>

                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
            <div className="form-control-box">
              <div className="form-input-box">
                <button className="subscripton-form-btn">
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="subscription-banner">
          <div className="user-review">
            <p>
              “We fight less. My daughter prefers to learn with the young people
              on the app. I'm too far away from school subjects anyway!”
            </p>
            <div className="reviewer-name">Julia</div>
            <span className="reviewer-relation">Mother of Kim</span>
            <div className="stars-rating">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="feature-text">
            Your child is in good hands and you have more time for yourself.
          </div>
          {/* <img src={banner} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
