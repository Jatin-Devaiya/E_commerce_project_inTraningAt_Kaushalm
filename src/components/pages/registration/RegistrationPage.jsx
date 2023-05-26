import React, { useState } from "react";
import "./registrationform.css";
import { Link } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make API request to register the user
    axios
      .post("https://fake-e-commerce-api.onrender.com/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        console.log("Form submitted:", { name, email, password });
      });

    // Reset the form fields
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            className="inp"
            type="text"
            placeholder="Enter Name"
            name="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            className="inp"
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
            <span>
              {" "}
              - should be string and include at least : one number, one
              uppercase, lowercase letter, one special caracter, and at least 8
              or more characters
            </span>
          </label>
          <input
            className="inp"
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <hr />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>
        <div className="container signin">
          <p>
            Already have an account? <Link to="/loginpage">Sign in</Link>.
          </p>
        </div>
      </form>
    </>
  );
};

export default RegistrationPage;
