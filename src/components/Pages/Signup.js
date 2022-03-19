import React from "react";
import { Link } from "react-router-dom";
import signupImage from "../../assets/signup.svg";
import classes from "../../styles/Signup.module.css";
import CheckBox from "../signup/CheckBox";
import Form from "../signup/Form";
import Illustration from "../signup/Illustration";
import TextInput from "../signup/TextInput";
import Button from "./../signup/Button";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signupImage} />
        <Form actions="#" className={classes.signup}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <CheckBox
            type="checkbox"
            text="I agree to the Terms &amp; Conditions"
          />

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Aready have an account ? <Link to="/login">login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
