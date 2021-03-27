import React, { useState } from "react";
import "./Signup.css";

import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { fetch } from "./Action";

function Signup({ setsearchdata }) {
  const [name, setname] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState("");
  const [Error, setError] = useState("");
  const [startDate, setstartDate] = useState("");

  const history = useHistory();

  const [{ data }, dispatch] = useStateValue();

  const validateForm = () => {
    var dat = {
      name: name,
      Email: Email,
      number: number,
      startDate: startDate,
      password: password,
    };
    let errors = {};
    let validate = true;
    var dob = new Date(startDate);
    var now = new Date();

    if (!name) {
      validate = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z ]*$/)) {
        validate = false;

        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    if (!number) {
      validate = false;

      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof number !== "undefined") {
      if (!number.match(/^[0-9]{10}$/)) {
        validate = false;

        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }
    if (!password) {
      validate = false;

      errors["password"] = "*Please enter your password.";
    }

    if (typeof password !== "undefined") {
      if (
        !password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        validate = false;

        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    if (!Email) {
      validate = false;

      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof Email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(Email)) {
        validate = false;

        errors["email"] = "*Please enter valid email-ID.";
      }
    }
    if (now - dob < 568024668000) {
      validate = false;
      errors["DOB"] = "*Age must be more than 18";
    }

    if (validate) {
      // localStorage.setItem("data", JSON.stringify(dat));
      // dispatch({ type: "Fetch", item: dat });
      dispatch(fetch(dat));
      history.push("/Login");
    }

    setError(errors);
    return validate;
  };

  return (
    <div className="Login">
      <Link to="./">
        <img
          className="login-logo"
          src="https://www.flaticon.com/premium-icon/icons/svg/2593/2593549.svg"
          alt="im"
        />
      </Link>

      <div className="log-container">
        <h1>Sign-Up</h1>
        <form>
          <h5>Your Name</h5>
          <input
            name="name"
            placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <span style={{ color: "red" }}>
            <small>{Error.username}</small>
          </span>
          <h5>Date Of Birth</h5>
          <input
            type="Date"
            value={startDate}
            onChange={(e) => setstartDate(e.target.value)}
          />
          <span style={{ color: "red" }}>
            <small>{Error.DOB}</small>
          </span>

          <h5>Mobile Number</h5>
          <input
            type="text"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setnumber(e.target.value.replace(/[^0-9.]+/g, ""))}
          />
          <span style={{ color: "red" }}>
            <small>{Error.mobileno}</small>
          </span>

          <h5>Email</h5>
          <input
            type="text"
            placeholder="Enter Email"
            name="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span style={{ color: "red" }}>
            <small>{Error.email}</small>
          </span>
          <h5>password</h5>
          <input
            type="password"
            placeholder="At least 8 characters"
            onChange={(e) => setpassword(e.target.value)}
          />
          <span style={{ color: "red" }}>
            <small>{Error.password}</small>
          </span>
        </form>
        <p>
          We will send you a text to verify your phone. Message and Data rates
          may apply.
        </p>

        <button className="signup" onClick={validateForm}>
          Continue
        </button>

        <br />
        <br />
        <hr />
        <br />
        <p>
          Already have an account?<Link to="/Login">Sign in</Link>{" "}
        </p>
      </div>
      {console.log(data)}
    </div>
  );
}

export default Signup;
