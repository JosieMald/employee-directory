import axios from "axios";

export default {
  searchEmployees: function () {
    return axios.get("https://randomuser.me/api/?nat=us&results=50");
},
// console.log(searchEmployees)
};
