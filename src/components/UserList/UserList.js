import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserItem from "../UserItem/UserItem";
import { CSVLink } from "react-csv";
import "./UserList.css";

const headers = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Date of joining", key: "date" },
];

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };
  }

  handleSearch = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  render() {
    const { usersList } = this.props;
    const { searchField } = this.state;
    const filteredList = usersList.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLowerCase()) || user.date.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div>
        <Link to="/add-user">
          <button>Add User</button>
        </Link>
        <CSVLink data={usersList} headers={headers} filename={"user_data.csv"} className="btn-download">
          Download CSV
        </CSVLink>{" "}
        <br />
        <input className="search" type="search" placeholder="Search" onChange={this.handleSearch} />
        {filteredList.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: state.users.usersList,
  };
};

export default connect(mapStateToProps)(UserList);
