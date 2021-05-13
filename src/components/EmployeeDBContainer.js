import React, { Component } from "react";
import API from "../utils/API";

class EmployeeDBContainer extends Component {
state = {
    result: {},
    search: ""
};
componentDidMount() {
    // this.searchEmployees()
    // console.log("componentDidMount");
    API.searchEmployees()
    .then(res => {this.setState({ result: res.data });
    console.log(res)})
    .catch(err => console.log(err));
}

// searchEmployees = () => {
//         API.searchEmployees()
//         .then(res => {this.setState({ result: res.data });
//     console.log(res)})
//         .catch(err => console.log(err));
//     };
render () {
return (
<div>
    <p>HI</p>
</div>
);
}
}

export default EmployeeDBContainer;