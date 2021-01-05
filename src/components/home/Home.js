import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import history from "../../history";
import { json_validator } from "../auth/functions/json_validator";

import "./Home.scss";

const HomeComponent = () => {
  const css_prefix = "home__";
  useEffect(() => {
    let phone = window.localStorage.getItem("Phone");
    let otp = window.localStorage.getItem("OTP");
    let result = json_validator(phone, otp);

    if (result.length === 0) {
      history.push("/");
    }
  }, []);

  const on_handle_logout = (e) => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className={`${css_prefix}main`}>
      <button className={`${css_prefix}logout`} onClick={on_handle_logout}>
        Logout
      </button>
      <h3 className={`${css_prefix}heading`}>Home</h3>

      <Link className={`${css_prefix}link1`} to="/counter">
        counter
      </Link>
      <Link className={`${css_prefix}link2`} to="/todo">
        todo
      </Link>
    </div>
  );
};

export const Home = HomeComponent;
