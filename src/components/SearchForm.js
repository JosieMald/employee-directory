import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.lastnames
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.result}
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
