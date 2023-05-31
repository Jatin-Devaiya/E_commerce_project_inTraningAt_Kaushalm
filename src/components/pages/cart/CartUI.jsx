import React, { useEffect, useState } from "react";
import "./cartUI.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const CartUI = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const ICREASE_QUANTITY_BY_1_API = (id) => {
    axios
      .post(
        "https://fake-e-commerce-api.onrender.com/cart/increase",
        {
          productId: `${id}`,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        GET_CART_API();
      });
  };

  const DECREASE_QUANTITY_BY_1 = (id) => {
    axios
      .post(
        "https://fake-e-commerce-api.onrender.com/cart/decrease",
        {
          productId: `${id}`,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        GET_CART_API();
        // return res.data;
      });
  };

  const removeProductFromCart = (id) => {
    axios
      .post(
        "https://fake-e-commerce-api.onrender.com/cart/delete",
        {
          productId: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data, "cartremove");
        GET_CART_API(); // Fetch the updated cart after removing the product
      })
      .catch((error) => {
        console.log(error); // Handle any errors that occurred during the request
      });
  };

  const CLEAR_CART_API = () => {
    axios
      .post(
        "https://fake-e-commerce-api.onrender.com/cart/remove",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setCart([]);
        console.log(res.data);
        // return res.data;
      });
  };

  const GET_CART_API = () => {
    axios
      .get(
        "https://fake-e-commerce-api.onrender.com/cart",
        {
          withCredentials: true,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setCart(res.data.products);
        console.log(res.data.products, "cart data");
        // return res.data;
      });
  };
  useEffect(() => {
    GET_CART_API();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
    calculateTotalQuantity();
  }, [cart]);

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((cartItem) => {
      const productPrice = cartItem.product.price;
      const quantity = cartItem.quantity;
      const productTotal = productPrice * quantity;
      total += productTotal;
    });
    setTotalPrice(total);
  };

  const calculateTotalQuantity = () => {
    let total = 0;
    cart.forEach((cartItem) => {
      const quantity = cartItem.quantity;
      total += quantity;
      console.log(total, "quantity");
      setTotalQuantity(total);
    });
  };

  return (
    <>
      <Navbar totalQuantity={totalQuantity} />
      <div className="container px-3 my-5 clearfix">
        {/* Shopping cart table */}
        <div className="cardclass">
          <div className="card-header">
            <h2>Shopping Cart</h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    {/* Set columns width */}
                    <th
                      className="text-center py-3 px-4"
                      style={{ minWidth: 400 }}
                    >
                      Product Name &amp; Details
                    </th>
                    <th className="text-right py-3 px-4" style={{ width: 100 }}>
                      Price
                    </th>
                    <th
                      className="text-center py-3 px-4"
                      style={{ width: 120 }}
                    >
                      Quantity
                    </th>
                    <th className="text-right py-3 px-4" style={{ width: 100 }}>
                      Total
                    </th>
                    <th
                      className="text-center align-middle py-3 px-0"
                      style={{ width: 40 }}
                    >
                      <a
                        className="shop-tooltip float-none text-light"
                        title
                        data-original-title="Clear cart"
                      >
                        <i className="ino ion-md-trash" />
                      </a>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cart.map((cartitems) => {
                    return (
                      <>
                        <tr key={cartitems.product._id}>
                          <td className="p-4">
                            <div className="media align-items-center">
                              <img
                                src={cartitems.product.image}
                                className="d-block ui-w-40 ui-bordered mr-4"
                                alt
                              />
                              <div className="media-body">
                                <a href="#" className="d-block text-dark">
                                  {cartitems.product.name}
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="text-right font-weight-semibold align-middle p-4">
                            ${cartitems.product.price}
                          </td>

                          <div
                            className="input-group mb-3 py-5"
                            style={{ width: 170 }}
                          >
                            <button
                              className="btn btn-white border border-secondary px-2"
                              type="button"
                              id="button-addon1"
                              data-mdb-ripple-color="dark"
                            >
                              <i
                                className="fas fa-minus"
                                onClick={() => {
                                  DECREASE_QUANTITY_BY_1(cartitems.product._id);
                                }}
                              />
                            </button>
                            <input
                              type="text"
                              className="form-control text-center border border-secondary"
                              placeholder={cartitems.quantity}
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                            />
                            <button
                              className="btn btn-white border border-secondary px-2"
                              type="button"
                              id="button-addon2"
                              data-mdb-ripple-color="dark"
                            >
                              <i
                                className="fas fa-plus"
                                onClick={() => {
                                  ICREASE_QUANTITY_BY_1_API(
                                    cartitems.product._id
                                  );
                                }}
                              />
                            </button>
                          </div>

                          <td className="text-right font-weight-semibold align-middle p-4">
                            ${cartitems.product.price * cartitems.quantity}
                          </td>
                          <td className="text-center align-middle px-0">
                            <a
                              href="#"
                              className="shop-tooltip close float-none text-danger"
                              title
                              data-original-title="Remove"
                              onClick={() =>
                                removeProductFromCart(cartitems.product._id)
                              }
                            >
                              ×
                            </a>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* / Shopping cart table */}
            <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
              <div className="mt-4">
                <label className="text-muted font-weight-normal">
                  Promocode
                </label>
                <input type="text" placeholder="ABC" className="form-control" />
              </div>

              {/* remove all cart button */}
              <button className="btn btn-danger" onClick={CLEAR_CART_API}>
                Remove all
              </button>

              <div className="d-flex">
                <div className="text-right mt-4 mr-5">
                  <label className="text-muted font-weight-normal m-0">
                    Discount
                  </label>
                  <div className="text-large">
                    <strong>$20</strong>
                  </div>
                </div>
              </div>

              <div className="text-right mt-4">
                <label className="text-muted font-weight-normal m-0">
                  Total price
                </label>
                <div className="text-large">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <div className="text-right mt-4">
                <label className="text-muted font-weight-normal m-0">
                  Net price
                </label>
                <div className="text-large text-white bg-info">
                  <strong>${totalPrice - (totalPrice * 20) / 100}</strong>
                </div>
              </div>

              <div className="text-right mt-4">
                <label className="text-muted font-weight-normal m-0">
                  Save
                </label>
                <div className="text-large text-white bg-success">
                  <strong>${(totalPrice * 20) / 100}</strong>
                </div>
              </div>
            </div>
            <div className="float-right">
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-lg btn-default md-btn-flat mt-2 mr-3"
                >
                  Back to shopping
                </button>
                <button type="button" className="btn btn-lg btn-primary mt-2">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartUI;
