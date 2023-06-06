import ProductListing from "../allProductList/ProductListing";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div>
        {/* carousel */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-mdb-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg"
                // className="d-block w-100"
                // className="img-fluid"
                alt="Wild Landscape"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              />
              <div className="carousel-caption d-none d-sm-block mb-5">
                <h1 className="mb-4">
                  <strong>
                    Start Journey With &nbsp;{" "}
                    {<img src=" jd4.webp " height={70} alt="logo" />} &nbsp;
                    E-commerce
                  </strong>
                </h1>
                <p>
                  <strong>
                    Free &amp; Fast Delivery &nbsp;
                    <strong
                      style={{
                        color: "yellow",
                        border: "1px solid black",
                        background: "red",
                      }}
                    >
                      ₹500
                    </strong>
                    &nbsp;Up All Orders...
                  </strong>
                </p>
                <p className="mb-4 d-none d-md-block">
                  <strong>
                    Life is hard enough already. Let us make it a little easier.
                  </strong>
                </p>
                <Link
                  // target="_blank"
                  to="/"
                  className="btn btn-outline-white btn-lg"
                >
                  Login is nessesary then product add & remove
                  <i className="fab fa-ello ms-2" />
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg"
                className="d-block w-100"
                alt="Camera"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              />
              <div className="carousel-caption d-none d-md-block mb-5">
                <h1 className="mb-4">
                  Start Journey With &nbsp;{" "}
                  {<img src=" jd4.webp " height={70} alt="logo" />} &nbsp;
                  E-commerce
                </h1>
                <p>
                  <strong>
                    <strong>
                      Free &amp; Fast Delivery &nbsp;
                      <strong
                        style={{
                          color: "yellow",
                          border: "1px solid black",
                          background: "red",
                        }}
                      >
                        ₹500
                      </strong>
                      &nbsp;Up All Orders...
                    </strong>
                  </strong>
                </p>
                <p className="mb-4 d-none d-md-block">
                  <strong>
                    Life is hard enough already. Let us make it a little easier.
                  </strong>
                </p>
                <Link
                  target="_blank"
                  to="/"
                  className="btn btn-outline-white btn-lg"
                >
                  It’s all inside
                  <i className="fab fa-ello ms-2" />
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg"
                className="d-block w-100"
                alt="Exotic Fruits"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              />
              <div className="carousel-caption d-none d-md-block mb-5">
                <h1 className="mb-4">
                  Start Journey With &nbsp;{" "}
                  {<img src=" jd4.webp " height={70} alt="logo" />} &nbsp;
                  E-commerce
                </h1>
                <p>
                  <strong>
                    <strong>
                      Free &amp; Fast Delivery &nbsp;
                      <strong
                        style={{
                          color: "yellow",
                          border: "1px solid black",
                          background: "red",
                        }}
                      >
                        ₹500
                      </strong>
                      &nbsp;Up All Orders...
                    </strong>
                  </strong>
                </p>
                <p className="mb-4 d-none d-md-block">
                  <strong>
                    Life is hard enough already. Let us make it a little easier.
                  </strong>
                </p>
                <Link
                  target="_blank"
                  to="/"
                  className="btn btn-outline-white btn-lg"
                >
                  Login is necessary then add remove cart
                  <i className="fab fa-ello ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/*Main layout*/}
        <main>
          <div className="container">
            {/* Navbar */}

            {/* Navbar */}
            {/* productlisting */}
            <ProductListing />
            {/* productlisting */}
          </div>
        </main>
        {/*Main layout*/}
      </div>
    </>
  );
};

export default Homepage;
