import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ProductProps from "./ProductProps";
import LoadingSpinner from "../../common/LoadingSpinner";

const ProductListing = () => {
  const [productList, setProductList] = useState([]);
  const [API, setAPI] = useState(
    `https://fake-e-commerce-api.onrender.com/product/limit/1/8`
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const GET_LIMITED_NUMBER_OF_PRODUCTS_API = () => {
    setIsLoading(true);
    axios.get(API).then((res) => {
      setProductList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    GET_LIMITED_NUMBER_OF_PRODUCTS_API();
  }, [API]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setAPI(`https://fake-e-commerce-api.onrender.com/product/limit/${page}/8`);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="container">
            <div className="row">
              {productList.map((datas) => {
                return (
                  <Fragment key={datas?._id}>
                    <ProductProps
                      name={datas?.name}
                      price={datas?.price}
                      image={datas?.image}
                      description={datas?.description}
                      category={datas?.category}
                      id={datas?._id}
                      pricebefore={datas?.Sale.pricebefore}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
          {/* Pagination */}
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center mt-3"
          >
            <ul className="pagination">
              {Array.from({ length: 10 }, (_, index) => index + 1).map(
                (page) => (
                  <li
                    className={`page-item ${
                      currentPage === page ? "active" : ""
                    }`}
                    key={page}
                  >
                    <a
                      className="page-link"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          {/* Pagination */}
        </>
      )}
    </>
  );
};

export default ProductListing;
