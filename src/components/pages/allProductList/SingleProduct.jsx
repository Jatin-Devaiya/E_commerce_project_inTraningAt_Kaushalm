import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SingleProduct = () => {
  const [getProductData, setGetProductData] = useState({});
  const { id } = useParams();
  console.log(id, "id");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const [getUserReview, setgetUserReview] = useState([]);

  const SINGLE_PRODUCT_API = () => {
    axios
      .get(`https://fake-e-commerce-api.onrender.com/product/${id}`)
      .then((res) => {
        console.log(getProductData, "getProductData");
        setGetProductData(res.data);
      });
  };
  useEffect(() => {
    SINGLE_PRODUCT_API();
  }, [id]);

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
          alert("Product added successfully");
          window.location = "/cartui";
          // return res.data;
        },
        [id]
      );
  };

  const ADD_REVIEW_API = () => {
    axios
      .post(
        `https://fake-e-commerce-api.onrender.com/product/reviews/${id}/add`,
        {
          rating: rating,
          review: review,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data, "ADD REVIEW,RATING");
        GET_USERS_REVIEW();
        setRating(0);
        setReview("");
        return res.data;
      });
  };

  const GET_USERS_REVIEW = () => {
    axios
      .get(`https://fake-e-commerce-api.onrender.com/product/reviews/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data, "GET USERS RIVIEW");
        setgetUserReview(res.data);
        // return res.data;
      });
  };

  useEffect(() => {
    GET_USERS_REVIEW();
  }, []);

  const DELETE_REVIEW_API = () => {
    axios
      .delete(
        `https://fake-e-commerce-api.onrender.com/product/reviews/${id}/delete`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data, "delete USERS review");
        // return res.data;
      });
  };

  const ADD_TO_WHITELIST_API = () => {
    axios
      .post(`https://fake-e-commerce-api.onrender.com/whitelist/${id}/add`)
      .then((res) => {
        console.log(res.data, "add to whitelist");
        // return res.data;
      });
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
                    data-type="image"
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

                  <div className="row">
                    <dt className="col-3">category:</dt>
                    <dd className="col-9">{getProductData?.category}</dd>
                    <dt className="col-3">quantity</dt>
                    <dd className="col-9">{getProductData?.quantity}</dd>
                  </div>
                  <hr />

                  {/* <a href="#" className="btn btn-warning shadow-0">
                    Buy now
                  </a> */}
                  <a
                    className="btn btn-primary shadow-0"
                    onClick={ADD_PRODUCT_TO_CART_API}
                  >
                    <i className="me-1 fa fa-shopping-basket" /> Add to cart
                  </a>
                  <a
                    // href="#"
                    className="btn btn-light border border-secondary py-2 icon-hover px-3"
                    onClick={ADD_TO_WHITELIST_API}
                  >
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
                        Reviews
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
                      {/* Add input fields for review, rating, and name */}
                      <section style={{ backgroundColor: "#e7effd" }}>
                        <div className="container my-5 py-5 text-dark">
                          <div className="row d-flex justify-content-center">
                            <div className="col-md-11 col-lg-9 col-xl-7">
                              <div className="d-flex flex-start mb-4">
                                <div className="card w-100">
                                  <h5 className="text-light bg-dark">
                                    Please Send Your Review & Reting
                                  </h5>

                                  <div className="card-body p-4">
                                    <div className>
                                      <span className="fw-bold">
                                        Rating : &nbsp;
                                      </span>
                                      <select
                                        className="select"
                                        value={rating}
                                        onChange={(e) =>
                                          setRating(e.target.value)
                                        }
                                      >
                                        <option value={"1"}>1</option>
                                        <option value={"2"}>2</option>
                                        <option value={"3"}>3</option>
                                        <option value={"4"}>4</option>
                                        <option value={"5"}>5</option>
                                      </select>
                                      <br />
                                      <br />
                                      <p>
                                        <div className="form-floating">
                                          <textarea
                                            className="form-control"
                                            placeholder="Leave a comment here"
                                            id="floatingTextarea2"
                                            style={{ height: 100 }}
                                            value={review}
                                            onChange={(e) =>
                                              setReview(e.target.value)
                                            }
                                          />
                                          <label htmlFor="floatingTextarea2">
                                            Enter your review
                                          </label>
                                        </div>
                                      </p>
                                      <button
                                        className="btn btn-primary"
                                        onClick={ADD_REVIEW_API}
                                      >
                                        Add Review
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* GET_USERS_REVIEW */}

                              <div className="d-flex flex-start">
                                <div className="card w-100">
                                  {getUserReview.map((userReview) => {
                                    return (
                                      <div className="card-body p-4">
                                        <i
                                          className="fa fa-trash-o px-4"
                                          style={{ fontSize: 25, color: "red" }}
                                          onClick={DELETE_REVIEW_API}
                                        />{" "}
                                        <br />
                                        <br />
                                        <div className>
                                          <h5>
                                            <span className="text-muted">
                                              userName :
                                            </span>
                                            &nbsp;
                                            {userReview.name}
                                          </h5>
                                          <h6>
                                            <span className="text-muted">
                                              productRating :
                                            </span>
                                            &nbsp;
                                            {userReview.rating}
                                          </h6>
                                          <p>
                                            <span className="text-muted">
                                              productReview :
                                            </span>
                                            &nbsp;
                                            {userReview.review}
                                          </p>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  {/* Pills content */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
