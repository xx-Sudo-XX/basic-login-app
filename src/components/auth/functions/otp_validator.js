function initial_otp_validator_func(val) {
  let initial_otp_regex = "^[0-9]{0,6}$";

  if (val.match(initial_otp_regex)) {
    return true;
  }
}

function final_otp_validator_func(val) {
  let final_otp_regex = "^[0-9]{6}$";

  if (val.match(final_otp_regex)) {
    return true;
  }
}

export const initial_otp_validator = initial_otp_validator_func;
export const final_otp_validator = final_otp_validator_func;
