import React from "react";

const CheckBox = ({ ...rest }) => {
  return (
    <label>
      <input {...rest} /> <span>I agree to the Terms and Conditions</span>
    </label>
  );
};

export default CheckBox;
