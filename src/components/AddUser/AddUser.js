import React, { Component } from "react";
import { addUser } from "../../actions/users";
import { connect } from "react-redux";
import "./AddUser.css";

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddUser = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    this.props.dispatch(this.props.addUser(name, email));
    this.setState({
      name: "",
      email: "",
    });
  };
  render() {
    return (
      <div>
        <h1>Add User</h1>
        <form>
          <input className="input-box" type="input" name="name" placeholder="Enter user name" value={this.state.name} onChange={this.handleChange} autoComplete="off" /> <br />
          <input className="input-box" type="email" name="email" placeholder="Enter user email" value={this.state.email} onChange={this.handleChange} autoComplete="off" /> <br />
          <button className="btn-add" onClick={this.handleAddUser}>
            Add User
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => {
  return {
    dispatch,
    addUser,
  };
};

export default connect(mapStateToProps)(AddUser);
