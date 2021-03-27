import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function LoginPage({ setsearchdata, setVali }) {
  const [{ data }] = useStateValue();
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Error, setError] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // var data1 = localStorage.getItem("data");
      // var data2 = JSON.parse(data1);
      // if(data.length===1){
      //   if( data[0].Email === Email &&
      //     data[0].password === password)
      //     {
      //       history.push('/')
      //       alert('success')
      //     }
      //     else {
      //       alert('plz enter correct')
      //     }
      // }
      // else
      // {
      //   alert('no data')
      // }
      data?.filter((product) => {
        if (
          product.Email.includes(Email) &&
          product.password.includes(password)
        ) {
          history.push("/");
          setVali(true);
        }
      });

      // if( data2.Email === Email &&
      //   data2.password === password)
      //   {
      //     history.push('/')
      //     alert('success')
      //   }
      //   else{
      //     alert('plz enter correct')
      //   }
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!password) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof password !== "undefined") {
      if (
        !password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        errors["password"] = "*Please Correct password.";
        formIsValid = false;
      }
    }
    if (!Email) {
      errors["email"] = "*Please enter your email-ID.";
      formIsValid = false;
    }

    if (typeof Email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(Email)) {
        errors["email"] = "*Please enter valid email-ID.";
        formIsValid = false;
      }
    }

    setError(errors);
    return formIsValid;
  };

  return (
   
    <div className="Login">
      {console.log(data)}
      <Link to="./">
        <img
          className="login-logo"
          src="https://www.flaticon.com/premium-icon/icons/svg/2593/2593549.svg"
          alt="im"
        />
      </Link>

      <div className="log-container">
        <h1>Log In</h1>
        <span style={{ color: "red" }}>
          <small>{Error.noo}</small>
        </span>
        <form>
          <h5>Email</h5>
          <input
            id="Email"
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span style={{ color: "red" }}>
            <small>{Error.email}</small>
          </span>

          <h5>password</h5>
          <input
            type="password"
            id="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <div>
            <small style={{ color: "red" }}>{Error.password}</small>
          </div>
          <div onClick={validateForm}>
            <button className="Button1" type="button" onClick={signIn}>
              signIn
            </button>
          </div>
        </form>
        <p>
          By continuing, you agree to Sites's Conditions of Use and Privacy
          Notice.
        </p>

        <br />
        <br />
        <Link>
          <p className="Need">Need Help</p>{" "}
        </Link>
        <small className="new">----------New To Site----------</small>

        <button className="Button1" onClick={() => history.push("./Signup")}>
          Create your New Account
        </button>
      </div>
      <br />
    </div>
  );
}

export default LoginPage;
