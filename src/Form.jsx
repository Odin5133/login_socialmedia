// import React from "react";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";

import "./Form.css";

export default function Form() {
  const [uname, setUsername] = useState("");
  const [pword, setPassword] = useState("");

  const [testingvar, setTestingvar] = useState(0);

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8000/verify/", {
  //       username: "anish",
  //       password: "12345",
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // });

  const signin = () => {
    if (uname === "" || pword === "") {
      alert("Please enter the details");
      return;
    }
    let username = uname;
    let password = pword;
    axios
      .post("http://localhost:8000/api/verify/", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Success") {
          setTestingvar(1);
        } else if (response.data.message === "Incorrect Password")
          setTestingvar(2);
        else if (response.data.message === "User not found") setTestingvar(3);
      });
  };

  const changeuname = (e) => {
    setUsername(e.target.value);
  };

  const changepword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="formx">
        <div className="formx-wel">Welcome.</div>
        <div className="formx-upper">
          <button className="formx-upper-btn">
            <Icon
              icon="flat-color-icons:google"
              color="white"
              className="formx-upper-icon"
            />
            <div className="formx-upper-name">Continue with Google</div>
            <div></div>
          </button>
          <button className="formx-upper-btn">
            <Icon
              icon="ic:baseline-apple"
              color="black"
              className="formx-upper-icon"
            />
            <div className="formx-upper-name">Continue with Apple</div>
            <div></div>
          </button>
        </div>
        <h4 className="formx-mid">
          <span className="formx-mid-txt">or, Continue with email</span>
        </h4>
        <div className="formx-bottom">
          <div>Your email</div>
          <input
            className="formx-bottom-btn"
            value={uname}
            onChange={changeuname}
          />
          <div>Password</div>
          <input
            type="password"
            className="formx-bottom-btn"
            value={pword}
            onChange={changepword}
          />
          <div className="formx-bottom-nece">
            <div>
              <input type="checkbox" />
              Keep me signed in
            </div>

            <span className="formx-bottom-nece-fmp">Forgot my password?</span>
          </div>
          <input
            type="submit"
            className="formx-bottom-sub"
            value="Sign In"
            onClick={signin}
          />
        </div>
      </div>
      <div>
        {testingvar === 1 ? (
          <h1>logged in</h1>
        ) : testingvar === 2 ? (
          <h1>wrong password</h1>
        ) : testingvar === 3 ? (
          <h1>user not found</h1>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
