import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 error</h1>
      <span>Looks like you are lost!</span>
      <Link to="/">Go back to Home page</Link>
    </div>
  );
}

export default NotFound;
