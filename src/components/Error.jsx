import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

export const Error = () => {
  return (
    <div>
      <div className="Error-Container">
        <div className="Error">
          <div className="error-heading">
            <h1>404</h1>
          </div>
          <h3>Oops! That page can’t be found</h3>
          <h4>The page you are looking for it maybe deleted</h4>
          <div className="gotToHome">
            <Link to={"/"}>
              <button>Go To Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
