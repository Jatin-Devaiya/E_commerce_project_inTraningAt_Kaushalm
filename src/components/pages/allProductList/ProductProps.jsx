import React from "react";
import { Link } from "react-router-dom";

const ProductProps = (datas) => {
  const { name, price, image, description, category, id, pricebefore } = datas;

  return (
    <>
      <div className="col-md-3">
        <div className="my-3">
          <div
            className="card w-100 p-3 bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            style={{ height: "400px", width: "400px" }}
          >
            <Link to={`/singleproduct/${id}`}>
              <img
                src={image}
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
                height={200}
                width={200}
              />
            </Link>
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <div className="d-flex flex-row align-items-center mb-1">
                <h4 className="mb-1 me-1">${price}</h4>
                <span className="text-danger">
                  <s>{pricebefore}</s>
                </span>
              </div>
              <h6>category : {category}</h6>
              <Link
                to={`/singleproduct/${id}`}
                className="btn btn-primary btn-sm"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductProps;
