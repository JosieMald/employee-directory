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
    filteredResults: [],
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
      name: "State",
      width: "10px",
    },
  ];

  componentDidMount() {
    API.searchEmployees()
      .then((res) =>
        this.setState({
          result: res.data.results,
          filteredResults: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
    const filterEmployees = this.state.result.filter((employee) => {
        const employeeObject = employee.name.last.toLowerCase();
      return employeeObject.indexOf(this.state.search.toLowerCase()) !== -1;
    });
    this.setState({ filteredResults: filterEmployees });
  };

  render() {
    return (
      <div>
        <Navbar />
        <SearchForm
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <TableHead
          headings={this.headings}
          users={this.state.filteredResults}
        />
      </div>
    );
  }
}

export default EmployeeDBContainer;
