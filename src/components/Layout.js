import React from "react";
import classes from "../styles/Layout.module.css";
import Nav from "./common/navbar/Nav";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
