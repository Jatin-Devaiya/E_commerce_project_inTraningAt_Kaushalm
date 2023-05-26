import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner";

const AllProductListing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const GET_ALL_PRODUCTS_API = () => {
    setIsLoading(true);
    axios
      .get("https://fake-e-commerce-api.onrender.com/product")
      .then((res) => {
        console.log(res, "Product");
        setAllProduct(res.data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    GET_ALL_PRODUCTS_API();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <section style={{ background: "#eee" }}>
            <div className="container">
        <h3>All Products </h3>
              <div className="row">
                {allProduct.map((allProduct) => {
                  return (
                    <>
                      <div className="col-md-3">
                        <div className="my-3">
                          <div
                            className="card w-100 p-3 bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                            style={{ height: "400px", width: "400px" }}
                          >
                            <Link to={`/singleproduct/${allProduct._id}`}>
                              <img
                                src={allProduct.image}
                                className="card-img-top"
                                alt="Hollywood Sign on The Hill"
                                height={200}
                                width={200}
                              />
                            </Link>
                            <div className="card-body">
                              <h4 className="card-title">{allProduct.name}</h4>
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">
                                  ${allProduct.price}
                                </h4>
                                <span className="text-danger">
                                  <s>{allProduct.Sale.pricebefore}</s>
                                </span>
                              </div>
                              <h6>category : {allProduct.category}</h6>

                              {/* <p className="card-text">{description}</p> */}
                              <Link
                                to={`/singleproduct/${allProduct._id}`}
                                className="btn btn-primary"
                              >
                                Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AllProductListing;
