import React from "react";
import { ToastContainer } from "react-toastify";

import "./AuthView.scss";

const AuthViewComponent = ({
  phone,
  otp,
  error,
  on_handle_phone_change,
  on_handle_otp_change,
  on_handle_submit,
  on_handle_phone_key_down,
  on_handle_otp_key_down,
  otp_ref,
  phone_ref,
}) => {
  const css_prefix = "auth__";

  return (
    <div className={`${css_prefix}main`}>
      <div className={`${css_prefix}headingdiv`}>
        <h4 className={`${css_prefix}heading`}>LOGIN FORM</h4>
      </div>

      <div className={`${css_prefix}input1`}>
        <input
          type="text"
          placeholder="Enter Phone Number"
          onChange={on_handle_phone_change}
          onKeyDown={on_handle_phone_key_down}
          value={phone}
          ref={phone_ref}
        />
      </div>
      <div className={`${css_prefix}input2`}>
        <input
          type="password"
          placeholder="Enter OTP"
          onChange={on_handle_otp_change}
          onKeyDown={on_handle_otp_key_down}
          value={otp}
          ref={otp_ref}
        />
      </div>
      <button className={`${css_prefix}login`} onClick={on_handle_submit}>
        LOGIN
      </button>
      <div className={`${css_prefix}error`}>{error}</div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export const AuthView = AuthViewComponent;
