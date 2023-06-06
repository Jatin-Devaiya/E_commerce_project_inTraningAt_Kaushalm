import React, { useState } from "react";
import "./confirm.css";
import axios from "axios";

const Checkout = () => {
  const [to, setTo] = useState("");
  const [phone, setphone] = useState("");
  const [payment, setpayment] = useState("");

  const COMPLETE_ORDER_API = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://fake-e-commerce-api.onrender.com/orders/",
        {
          to,
          phone,
          payment,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data, "complate oraders");
        return res.data;
      });
  };
  return (
    <div>
      <div className="rowconfirm">
        <div className="col-75">
          <div className="containerconfirm">
            <form onSubmit={COMPLETE_ORDER_API}>
              <div className="rowconfirm">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname" className="labelconfirm">
                    <i className="fa fa-user" /> Full Name
                  </label>
                  <input
                    className="inputconfirm"
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label htmlFor="number" className="labelconfirm">
                    <i className="fa fa-mobile-phone" /> Phone
                  </label>
                  <input
                    className="inputconfirm"
                    type="text"
                    id="number"
                    name="number"
                    placeholder="8000111069"
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                  />
                  <label htmlFor="adr" className="labelconfirm">
                    <i className="fa fa-address-card-o" /> Address
                  </label>
                  <input
                    className="inputconfirm"
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city" className="labelconfirm">
                    <i className="fa fa-institution" /> City
                  </label>
                  <input
                    className="inputconfirm"
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                  <div className="rowconfirm">
                    <div className="col-50">
                      <label htmlFor="state" className="labelconfirm">
                        State
                      </label>
                      <input
                        className="inputconfirm"
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip" className="labelconfirm">
                        Zip
                      </label>
                      <input
                        className="inputconfirm"
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder={10001}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname" className="labelconfirm">
                    Accepted Cards
                  </label>
                  <div className="icon-containerconfirm">
                    <i className="fab fa-cc-visa" style={{ color: "navy" }} />
                    <i className="fab fa-cc-amex	" style={{ color: "blue" }} />
                    <i
                      className="fab fa-cc-mastercard	"
                      style={{ color: "red" }}
                    />
                    <i
                      className="fab fa-cc-discover"
                      style={{ color: "orange" }}
                    />
                  </div>
                  <label htmlFor="cname" className="labelconfirm">
                    Name on Card
                  </label>
                  <input
                    className="inputconfirm"
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label htmlFor="ccnum" className="labelconfirm">
                    Credit card number
                  </label>
                  <input
                    className="inputconfirm"
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth" className="labelconfirm">
                    Exp Month
                  </label>
                  <input
                    className="inputconfirm"
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="rowconfirm">
                    <div className="col-50">
                      <label htmlFor="expyear" className="labelconfirm">
                        Exp Year
                      </label>
                      <input
                        className="inputconfirm"
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder={2018}
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv" className="labelconfirm">
                        CVV
                      </label>
                      <input
                        className="inputconfirm"
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder={352}
                      />
                    </div>
                  </div>

                  <label htmlFor="expmonth" className="labelconfirm">
                    Other
                  </label>
                  <input
                    className="inputconfirm"
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="COD"
                    onChange={(e) => {
                      setpayment(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* <label className="labelconfirm">
                <input
                  className="inputconfirm"
                  type="checkbox"
                  defaultChecked="checked"
                  name="sameadr"
                />{" "}
                Shipping address same as billing
              </label> */}
              <input
                className="inputconfirm btnconifrm"
                type="submit"
                defaultValue="Continue to checkout"
              />
            </form>
          </div>
        </div>
        {/* cart  */}
        {/* <div className="col-25">
          <div className="containerconfirm">
            <h4>
              Cart
              <span className="price" style={{ color: "black" }}>
                <i className="fa fa-shopping-cart" />
                <b>4</b>
              </span>
            </h4>
            <p>
              <a href="#">Product 1</a> <span className="price">$15</span>
            </p>
            <p>
              <a href="#">Product 2</a> <span className="price">$5</span>
            </p>
            <p>
              <a href="#">Product 3</a> <span className="price">$8</span>
            </p>
            <p>
              <a href="#">Product 4</a> <span className="price">$2</span>
            </p>
            <hr />
            <p>
              Total{" "}
              <span className="price" style={{ color: "black" }}>
                <b>$30</b>
              </span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Checkout;
