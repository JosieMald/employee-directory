import React from "react";
import "./style.css";

function Navbar() {
  return (
    <header className="b">
      <div className="jumbotron jumbotron-fluid">
        {/* <div className="container"> */}
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">
            Use the search bar to search for employees by Last Name or click the
            email header to sort by email.
          </p>
        {/* </div> */}
      </div>
    </header>
  );
}

export default Navbar;
