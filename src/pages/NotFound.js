import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/css/error-page.min.css";

export const NotFound = () => {
  return (
    <div className="error-page">
      <h1>404 error</h1>
      <div className="content">
        <span>Looks like you are lost!</span>
        <Link to="/">Go back to Home page</Link>
      </div>
    </div>
  );
};
