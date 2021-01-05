function initial_ph_validator_func(val) {
  let initial_ph_regex = "^[0-9]{0,10}$";

  if (val.match(initial_ph_regex)) {
    return true;
  }
}

function final_ph_validator_func(val) {
  let final_ph_regex = "^[6-9][0-9]{9}$";

  if (val.match(final_ph_regex)) {
    return true;
  }
}

export const initial_ph_validator = initial_ph_validator_func;
export const final_ph_validator = final_ph_validator_func;
