import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ProductProps from "./ProductProps";
import LoadingSpinner from "../../common/LoadingSpinner";

const ProductListing = () => {
  const [productList, setProductList] = useState([]);
  const [API, SETAPI] = useState(
    `https://fake-e-commerce-api.onrender.com/product/limit/1/8`
  );
  const [isLoading, setIsLoading] = useState(false);
  // const API = `https://fake-e-commerce-api.onrender.com/product/limit`

  const GET_LIMITED_NUMBER_OF_PRODUCTS_API = () => {
    setIsLoading(true);
    axios.get(API).then((res) => {
      // console.log(res);

      setProductList(res.data);
      setIsLoading(false);
      // console.log(res.data,"id");
    });
  };

  useEffect(() => {
    GET_LIMITED_NUMBER_OF_PRODUCTS_API();
  }, [API]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="container">
            <div className="row">
              {productList.map((datas) => {
                // console.log(datas?.rate.rating, "datas");
                // const { name, price, image, description, category,_id,} = datas;
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
              <li className="page-item disabled">
                <a className="page-link" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="page-item ">
                <p
                  className="page-link"
                  onClick={() =>
                    SETAPI(
                      `https://fake-e-commerce-api.onrender.com/product/limit/1/8`
                    )
                  }
                >
                  1
                </p>
              </li>
              <li className="page-item">
                <p
                  className="page-link"
                  onClick={() =>
                    SETAPI(
                      `https://fake-e-commerce-api.onrender.com/product/limit/2/8`
                    )
                  }
                >
                  2
                </p>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() =>
                    SETAPI(
                      `https://fake-e-commerce-api.onrender.com/product/limit/3/8`
                    )
                  }
                >
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() =>
                    SETAPI(
                      `https://fake-e-commerce-api.onrender.com/product/limit/4/8`
                    )
                  }
                >
                  4
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() =>
                    SETAPI(
                      `https://fake-e-commerce-api.onrender.com/product/limit/5/8`
                    )
                  }
                >
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* Pagination */}
        </>
      )}
    </>
  );
};

export default ProductListing;
