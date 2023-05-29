import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import { useParams } from "react-router";
import axios from "axios";

const SingleProduct = () => {
  const [getProductData, setGetProductData] = useState({});
  const { id } = useParams();
  console.log(id, "id");
  useEffect(() => {
    axios
      .get(`https://fake-e-commerce-api.onrender.com/product/${id}`)
      .then((res) => {
        // console.log(res.data, "productidapi");
        setGetProductData(res.data);

        // return res.data;
      });
  }, [id]);
  console.log(getProductData, "getProductData");

  const ADD_PRODUCT_TO_CART_API = () => {
    axios
      .post(
        "https://fake-e-commerce-api.onrender.com/cart/add",
        {
          productId: `${id}`,
        },
        {
          withCredentials: true,
        }
      )
      .then(
        (res) => {
          console.log("ADD_PRODUCT_TO_CART_API", res.data);
          // return res.data;
        },
        [id]
      );
  };

  return (
    <>
      <div>
        {/* content */}
        <section className="py-5">
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                    href={getProductData?.image}
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100vh",
                        margin: "auto",
                      }}
                      className="rounded-4 fit"
                      src={getProductData?.image}
                    />
                  </a>
                </div>

                {/* thumbs-wrap.// */}
                {/* gallery-wrap .end// */}
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">{getProductData?.name}</h4>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1" />
                      154 orders
                    </span>
                    <span className="text-success ms-2">In stock</span>
                  </div>
                  <div className="mb-3">
                    <span className="h5">₹{getProductData.price}</span>
                    <span className="text-muted">/per item</span>
                  </div>
                  {/* <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">
                                ${getProductData.price}
                              </h4>
                              <span className="text-danger">
                                <s>{getProductData?.Sale.pricebefore}</s>
                              </span>
                            </div> */}
                  <div className="row">
                    <dt className="col-3">category:</dt>
                    <dd className="col-9">{getProductData?.category}</dd>
                    <dt className="col-3">quantity</dt>
                    <dd className="col-9">{getProductData?.quantity}</dd>
                  </div>
                  <hr />
                  <div className="row mb-4">
                    <div className="col-md-4 col-6">
                      <label className="mb-2">Size</label>
                      <select
                        className="form-select border border-secondary"
                        style={{ height: 35 }}
                      >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                    {/* col.// */}
                    <div className="col-md-4 col-6 mb-3">
                      <label className="mb-2 d-block">Quantity</label>
                      <div className="input-group mb-3" style={{ width: 170 }}>
                        <button
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon1"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <input
                          type="text"
                          className="form-control text-center border border-secondary"
                          placeholder={14}
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <button
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon2"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-warning shadow-0">
                    {" "}
                    Buy now{" "}
                  </a>
                  <a
                    className="btn btn-primary shadow-0"
                    onClick={ADD_PRODUCT_TO_CART_API}
                  >
                    <i className="me-1 fa fa-shopping-basket" /> Add to cart
                  </a>
                  <a
                    href="#"
                    className="btn btn-light border border-secondary py-2 icon-hover px-3"
                  >
                    {" "}
                    <i className="me-1 fa fa-heart fa-lg" /> Save
                  </a>
                </div>
              </main>
            </div>
          </div>
        </section>
        {/* content */}
        <section className="bg-light border-top py-4">
          <div className="container">
            <div className="row gx-4">
              <div className="col-lg-12 mb-4">
                <div className="border rounded-2 px-3 py-2 bg-white">
                  {/* Pills navs */}
                  <ul
                    className="nav nav-pills nav-justified mb-3"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item d-flex" role="presentation">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100 active"
                        id="ex1-tab-1"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-1"
                        role="tab"
                        aria-controls="ex1-pills-1"
                        aria-selected="true"
                      >
                        Specification
                      </a>
                    </li>
                    <li className="nav-item d-flex" role="presentation">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100"
                        id="ex1-tab-2"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-2"
                        role="tab"
                        aria-controls="ex1-pills-2"
                        aria-selected="false"
                      >
                        Warranty info
                      </a>
                    </li>
                    <li className="nav-item d-flex" role="presentation">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100"
                        id="ex1-tab-3"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-3"
                        role="tab"
                        aria-controls="ex1-pills-3"
                        aria-selected="false"
                      >
                        Shipping info
                      </a>
                    </li>
                    <li className="nav-item d-flex" role="presentation">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100"
                        id="ex1-tab-4"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-4"
                        role="tab"
                        aria-controls="ex1-pills-4"
                        aria-selected="false"
                      >
                        Seller profile
                      </a>
                    </li>
                  </ul>
                  {/* Pills navs */}
                  {/* Pills content */}
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-pills-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <p>{getProductData.description}</p>
                    </div>
                    <div
                      className="tab-pane fade mb-2"
                      id="ex1-pills-2"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-2"
                    >
                      Tab content or sample information now <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                    </div>
                    <div
                      className="tab-pane fade mb-2"
                      id="ex1-pills-3"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-3"
                    >
                      Another tab content or sample information now <br />
                      Dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                    <div
                      className="tab-pane fade mb-2"
                      id="ex1-pills-4"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-4"
                    >
                      Some other tab content or sample information now <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                  </div>
                  {/* Pills content */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {<Footer />}
      </div>
    </>
  );
};

export default SingleProduct;
