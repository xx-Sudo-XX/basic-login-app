import React, { useState, useEffect, useRef } from "react";
// import { toast } from "react-toastify";

import history from "../../history";

import {
  initial_ph_validator,
  final_ph_validator,
} from "./functions/phone_validator";
import {
  final_otp_validator,
  initial_otp_validator,
} from "./functions/otp_validator";
import { json_validator } from "./functions/json_validator";

import { AuthView } from "./AuthView";

const Auth_Component = () => {
  const otp_ref = useRef();
  const phone_ref = useRef();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    phone_ref.current.focus();
  }, []);

  useEffect(() => {
    let phone = window.localStorage.getItem("Phone");
    let otp = window.localStorage.getItem("OTP");
    let result = json_validator(phone, otp);

    if (result.length > 0) {
      history.push("/home");
    }
  }, []);

  const on_handle_phone_change = (e) => {
    let initial_ph = e.target.value;
    let val = initial_ph_validator(initial_ph);

    if (val) {
      setPhone(initial_ph);
      if (error !== "") {
        setError("");
      }
    }
  };

  const on_handle_otp_change = (e) => {
    let initial_otp = e.target.value;
    let val = initial_otp_validator(initial_otp);

    if (val) {
      setOtp(initial_otp);
      if (error !== "") {
        setError("");
      }
    }
  };

  const on_handle_otp_key_down = (e) => {
    if (e.key === "Enter") {
      on_handle_submit();
    }
  };

  const on_handle_phone_key_down = (e) => {
    if (e.key === "Enter") {
      otp_ref.current.focus();
    }
  };

  const on_handle_submit = () => {
    console.log("calling");
    if (phone.length < 10) {
      setError("Invalid phone number");
    } else if (otp.length < 6) {
      setError("Invalid OTP");
    } else if (!final_ph_validator(phone) || !final_otp_validator(otp)) {
      setError("Invalid Credentails");
    } else if (final_ph_validator(phone) && final_otp_validator(otp)) {
      let result = json_validator(phone, otp);

      if (result.length > 0) {
        window.localStorage.setItem("Phone", phone);
        window.localStorage.setItem("OTP", otp);
        history.push("/home");
      } else {
        setError("Incorrect Credentials");
      }
    }
  };
  return (
    <AuthView
      phone={phone}
      otp={otp}
      error={error}
      on_handle_phone_change={on_handle_phone_change}
      on_handle_otp_change={on_handle_otp_change}
      on_handle_submit={on_handle_submit}
      on_handle_phone_key_down={on_handle_phone_key_down}
      on_handle_otp_key_down={on_handle_otp_key_down}
      otp_ref={otp_ref}
      phone_ref={phone_ref}
    />
  );
};

export const Auth = Auth_Component;
