import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

// database
const database = [
  {
    username: "admin1",
    password: "123",
  },
  {
    username: "admin2",
    password: "123",
  },
];



const Login = () => {
  const errors = {
    unname: "invalid username",
    pass: "invalid password",
  };
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    // find user
    const userData = database.find((user) => user.username === uname.value);

    // check if input user is in the database
    if ( userData ) {
      console.log("handle submit");
      console.log(userData);
      console.log(pass.value);
      if (userData.password !== pass.value) {
        // invalid password
        setErrorMessage({ name: errors.pass, message: errors.pass });
        setIsSubmitted(false);
        console.log(errorMessage);
      } else {
          navigate("/");
        setIsSubmitted(true);
      }
    } else {
      // user name not found
      setErrorMessage({ name: errors.username, message: errors.username });
      setIsSubmitted(false);
      // log message
      console.log(errorMessage.name);
    }

  };

  const renderErrorMessage = (name) => {
    name === errorMessage.name && (<div className="error">{errorMessage.name}</div>);
  };


  return (
    <div className="login_container">
      <div>
        <h1 style={{ fontSize: "40px" }}>Login</h1>
      </div>
      <form className="login_fields" onSubmit={handleSubmmit}>
        {/*login fields*/}

        {/*username field*/}
        <div className="login_input">
          <input type="text" name="uname" placeholder="Tên đăng nhập" />
         
          {renderErrorMessage(errors.unname)}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "3px",
          }}
          className="login_input"
        >
          {/*password name*/}
          <input type="password" name="pass" placeholder="mật khẩu" />
    
          {renderErrorMessage(errors.pass)}
          <a>Quen mat khau</a>
        </div>

        <input style={{ cursor: "pointer" }} type="submit" value="Đăng nhập" />

        <div className="login_bottom">
          <h1> Hoặc </h1>
          <p>Đăng nhập bằng</p>
          <div className="login_bottom_options">
            <a className="box" id="box1">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="box" id="box2">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a className="box" id="box3">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="box" id="box4">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="box" id="box5">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
