import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ totalQuantity }) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [keyword, setKeyword] = useState("");

  const GET_CATEGORIES_API = () => {
    axios
      .get("https://fake-e-commerce-api.onrender.com/categories/")
      .then((res) => {
        setCategories(res.data);
        // console.log(res.data, "category");
      });
  };

  const GET_SUBCATEGORIES_API = () => {
    axios
      .get("https://fake-e-commerce-api.onrender.com/subcategories/")
      .then((res) => {
        setSubCategories(res.data);
        // console.log(res.data, "subcategory");
      });
  };

  const LOGOUT_API = () => {
    axios
      .get("https://fake-e-commerce-api.onrender.com/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data, "logout");
        localStorage.clear()
        window.location = "/loginpage";
        return res.data;
      });
  };

  useEffect(() => {
    GET_CATEGORIES_API();
    GET_SUBCATEGORIES_API();
  }, []);

  return (
    <div className="sticky-top">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img
                src="jd4.webp"
                height={25}
                alt="E-Commerce Logo"
                loading="lazy"
              />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              {/* Dropdown Category */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link to={`allproduct`} className="dropdown-item">
                    All Products
                  </Link>
                  {categories.map((categories) => {
                    // console.log(categories, "cccc");

                    return (
                      <div key={categories}>
                        <li>
                          <Link
                            to={`categorys/${categories}`}
                            className="dropdown-item"
                          >
                            {categories}
                          </Link>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </li>

              {/* Dropdown subcategory*/}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  SubCategory
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {subCategories.map((subCategories) => {
                    // console.log(categories, "cccc");

                    return (
                      <Fragment key={subCategories}>
                        <li>
                          <Link
                            to={`subCategorys/${subCategories}`}
                            className="dropdown-item"
                          >
                            {subCategories}
                          </Link>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </li>

              {/* Dropdown sort*/}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  SORT Product
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link to={`sort/price`} className="dropdown-item">
                      Price
                    </Link>
                    <Link to={`sort/name`} className="dropdown-item">
                      Name
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}

          {/* Search */}
          <form>
            <div className="input-group ps-5">
              <div id="navbar-search-autocomplete">
                <input
                  type="search"
                  id="form1"
                  placeholder="search"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <NavLink to={`searchProduct/${keyword}`}>
                <button type="button" className="btn btn-primary mx-1">
                  <i className="fas fa-search" />
                </button>
              </NavLink>
            </div>
          </form>
          <div className="d-flex align-items-center">
            {/* Icon */}
            <Link className="text-reset me-3" to="/cartui">
              <i className="fas fa-shopping-cart" />
              <span className="badge rounded-pill badge-notification bg-danger">
                {totalQuantity}
              </span>
            </Link>
            {/* whitelist  */}
            <div>
              <span
                className="text-reset me-3  hidden-arrow"
                role="button"
                aria-expanded="false"
              >
                <Link to="/SaveItemsList">
                  <i
                    className="fa fa-heart"
                    style={{ color: "rgb(90, 90, 90)" }}
                  ></i>
                </Link>
              </span>
            </div>
            {/* Avatar */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height={25}
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/getorder">
                    My orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="loginpage">
                    Login
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={LOGOUT_API}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
    </div>
  );
};

export default Navbar;
