import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../../common/LoadingSpinner";
import axios from "axios";
import { Link } from "react-router-dom";

const SubCategoryWiseProduct = () => {
  const [getProductBySubCategory, setgetProdutBySubCategory] = useState([]);
  const { subCategory } = useParams();
  //   console.log(subCategory, "subCategoryooo");
  const [isLoading, setIsLoading] = useState(false);

  const GET_PRODUCTS_BY_SUBCATEGORY_API = () => {
    setIsLoading(true);
    axios
      .get(
        `https://fake-e-commerce-api.onrender.com/product/subcategory/${subCategory}`
      )
      .then((res) => {
        // console.log(res.data, "GET_PRODUCTS_BY_SUBCATEGORY_API");
        setgetProdutBySubCategory(res.data);
        setIsLoading(false);
        // return res.data;
      });
  };
  useEffect(() => {
    GET_PRODUCTS_BY_SUBCATEGORY_API();
  }, [subCategory]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {getProductBySubCategory.map((subCategoryProduct) => {
        return (
          <div>
            <section style={{ backgroundColor: "#eee" }}>
              <div className="container py-5">
                <div className="row justify-content-center mb-3">
                  <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img
                                src={subCategoryProduct.image}
                                className="w-100"
                              />
                              <Link  to={`/singleproduct/${subCategoryProduct._id}`}>
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
                            <h5>{subCategoryProduct.name}</h5>
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
                              <span>
                                Category : {subCategoryProduct.category}
                              </span>
                            </div>
                            <div className="mb-2 text-muted small">
                              <span>Unique design</span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0">
                              {subCategoryProduct.description}
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">
                                ${subCategoryProduct.price}
                              </h4>
                              <span className="text-danger">
                                <s>{subCategoryProduct.Sale.pricebefore}</s>
                              </span>
                            </div>
                            <p>Quantity : {subCategoryProduct.quantity}</p>

                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <Link
                                to={`/singleproduct/${subCategoryProduct._id}`}
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
          </div>
        );
      })}
    </>
  );
};

export default SubCategoryWiseProduct;
