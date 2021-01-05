import data from "../../../data.json";

function json_validator_func(phone, otp) {
  let result = data.filter(
    (val) =>
      val["Phone_number"] === parseInt(phone) && val["OTP"] === parseInt(otp)
  );

  return result;
}

export const json_validator = json_validator_func;
