import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { json_validator } from "../auth/functions/json_validator";

import history from "../../history";

import "./Counter.scss";

const Counter_Component = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("123");
    let phone = window.localStorage.getItem("Phone");
    let otp = window.localStorage.getItem("OTP");
    let result = json_validator(phone, otp);

    if (result.length === 0) {
      history.push("/");
    }
  }, []);

  const css_prefix = "counter__";

  return (
    <div className={`${css_prefix}main`}>
      <h1 className={`${css_prefix}heading`}>Counter</h1>
      <button
        className={`${css_prefix}inc`}
        onClick={(e) => setCount(count + 1)}
      >
        increment
      </button>
      <div className={`${css_prefix}count`}>{count}</div>
      <button
        className={`${css_prefix}dec`}
        onClick={(e) => setCount(count - 1)}
      >
        decrement
      </button>
      <Link className={`${css_prefix}link3`} to="/home">
        Go Home
      </Link>
    </div>
  );
};

export const Counter = Counter_Component;
