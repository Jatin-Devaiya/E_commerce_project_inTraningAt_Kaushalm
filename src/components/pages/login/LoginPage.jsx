import React, { useState } from "react";
import "./loginform.css";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a user object with the form data
    const user = {
      email,
      password,
    };

    try {
      // Make API request to login the user
      const response = await axios.post(
        "https://fake-e-commerce-api.onrender.com/login",
        user,
        {
          withCredentials: true,
        }
      );

      // Handle the response
      console.log("Response:", response.data);
      console.log("User Succesfully Login:", { email, password });
      alert("Login successful")
      localStorage.setItem("token",email)
      window.location="/"
      // Perform any necessary actions based on the response
    } catch (error) {
      // Handle error
      console.log("Error:", error.message);
    }

    // Reset the form fields
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form
        action="action_page.php"
        method="post"
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="logincontainer">
          <h3>Login</h3>
        </div>
        <div className="container">
          <label htmlFor="uname">
            <b>Email</b>
          </label>
          <input
            className="input"
            type="email"
            placeholder="Enter Username"
            name="uname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            className="input"
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button">
            Login
          </button>
          <label>
            <input
              className="input"
              type="checkbox"
              defaultChecked="checked"
              name="remember"
            />{" "}
            Remember me
          </label>
        </div>
        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn button">
            <Link to="/" className="link">
              Cancel
            </Link>
          </button>
          <span className="psw span">
            Forgot <a href="#">password?</a>
          </span>
          <span className="psw span">
            If you have not Account :{" "}
            <Link to="/registrationpage">Create Account</Link>--
          </span>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
