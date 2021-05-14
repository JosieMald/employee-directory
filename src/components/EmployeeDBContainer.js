import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
// import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Navbar from "./Navbar";

class EmployeeDBContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  headings = [
    {
      name: "image",
      width: "10px",
    },
    {
      name: "First Name",
      width: "10px",
    },
    {
      name: "Last Name",
      width: "10px",
    },
    {
      name: "Email",
      width: "10px",
    },
    {
      name: "D.O.B",
      width: "10px",
    },
  ];

  componentDidMount() {
    API.searchEmployees()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchEmployees(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          console.log(this.state.search);
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <Navbar />
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <TableHead headings={this.headings} users={this.state.result} />
      </div>
    );
  }
}

export default EmployeeDBContainer;
