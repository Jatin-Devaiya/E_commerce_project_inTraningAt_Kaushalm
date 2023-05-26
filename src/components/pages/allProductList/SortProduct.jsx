import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner";

const SortProduct = () => {
  const [sort, setSort] = useState([]);
  const { sortkey } = useParams();
  //   console.log(sortkey);
  const [isLoading, setIsLoading] = useState(false);

  const SORT_PRODUCT_LIST_API = () => {
    setIsLoading(true);
    axios
      .get(`https://fake-e-commerce-api.onrender.com/product/sort/${sortkey}`)
      .then((res) => {
        // console.log(res.data);
        setSort(res.data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    SORT_PRODUCT_LIST_API();
  }, [sortkey]);
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      {sort.map((sort) => {
        return (
          <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
              <div className="row justify-content-center mb-3">
                <div className="col-md-12 col-xl-10">
                  <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                          <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src={sort.image} className="w-100" />
                            <Link  to={`/singleproduct/${sort._id}`}>
                              <div className="hover-overlay">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(253, 253, 253, 0.15)",
                                  }}
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <h5>{sort.name}</h5>
                          <div className="d-flex flex-row">
                            <div className="text-danger mb-1 me-2">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <span>310</span>
                          </div>
                          <div className="mt-1 mb-0 text-muted small">
                            <span>Category : {sort.category}</span>
                          </div>
                          <div className="mb-2 text-muted small">
                            <span>Unique design</span>
                          </div>
                          <p className="text-truncate mb-4 mb-md-0">
                            {sort.description}
                          </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                          <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1">${sort.price}</h4>
                            <span className="text-danger">
                              <s>{sort.Sale.pricebefore}</s>
                            </span>
                          </div>
                          <p>Quantity : {sort.quantity}</p>

                          <h6 className="text-success">Free shipping</h6>
                          <div className="d-flex flex-column mt-4">
                            <Link
                              to={`/singleproduct/${sort._id}`}
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </Link>
                            <button
                              className="btn btn-outline-primary btn-sm mt-2"
                              type="button"
                            >
                              Add to wishlist
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SortProduct;
