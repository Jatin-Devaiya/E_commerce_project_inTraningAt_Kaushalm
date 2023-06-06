import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-white mt-4"
        style={{ backgroundColor: "#607D8B" }}
      >
        {/*Call to action*/}
        <div className="pt-4 pb-2">
          <Link
            to="/loginpage"
            className="btn btn-outline-white footer-cta mx-2"
            href="#"
            target="_self"
            role="button"
          >
            Start Journey With JD E-Commerce Login Now
            <i className="fas fa-graduation-cap ms-2" />
          </Link>
        </div>
        {/*/.Call to action*/}
        <hr className="text-dark" />
        <div className="container">
          {/* Section: Social media */}
          <section className="mb-3">
            {/* linkdin */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="https://in.linkedin.com/in/jatin-devaiya-602b2b253?trk=people-guest_people_search-card"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin-in" />
            </a>

            {/* Facebook */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="https://www.facebook.com/people/Jatin-Devaiya-Patels/pfbid0KERGs9JKMmn2xaFAxnYqq5FvNKzMxrAfF8SZhfJT9ExeFNbwaYbSF6AAkQFr12xrl/"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" />
            </a>

            {/* Google */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="http://localhost:3000/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google" />
            </a>

            {/* YouTube */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="https://www.youtube.com/@devaiyajatin"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-youtube" />
            </a>
            {/* Github */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="https://github.com/Jatin-Devaiya/"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github" />
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            textColor: "#E0E0E0",
          }}
        >
          © 2023 Copyright :
          <a className="text-white" href="http://localhost:3000/">
            &nbsp; JatinDevaiya.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};

export default Footer;
