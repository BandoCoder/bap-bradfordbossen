import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Link to="/login">
        <h1>LOGIN</h1>
      </Link>
      <Link to="/signup">
        <h1>Signup</h1>
      </Link>
    </>
  );
}
