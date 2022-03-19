import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../signup/Button";
import Form from "../signup/Form";
import Illustration from "../signup/Illustration";
import TextInput from "../signup/TextInput";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} />
        <Form action="#" className={classes.login}>
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <Button>
            <span>Login</span>
          </Button>
          <div className="info">
            Don't have an account ?<Link to="/signup">Signup </Link>instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
