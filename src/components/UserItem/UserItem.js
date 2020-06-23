import React, { Component } from "react";
import { editUser, cancelEdit, saveEdit, deleteUser } from "../../actions/users";
import { connect } from "react-redux";
import "./UserItem.css";

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      date: this.props.user.date,
    };
  }

  handleEdit = (id) => {
    this.props.dispatch(this.props.editUser(id));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCancelEdit = (e) => {
    e.preventDefault();
    this.props.dispatch(this.props.cancelEdit());
    this.setState({
      name: this.props.user.name,
      email: this.props.user.email,
      date: this.props.user.date,
    });
  };

  handleSaveEdit = (e) => {
    e.preventDefault();
    const { name, email, date } = this.state;
    this.props.dispatch(this.props.saveEdit(this.props.user.id, name, email, date));
  };

  handleDelete = (id) => {
    this.props.dispatch(this.props.deleteUser(id));
  };

  render() {
    const { user, editableUserNumber } = this.props;
    let isEditable = editableUserNumber === user.id;
    return (
      <div className="item-container">
        <form className={isEditable ? "item" : "optional"}>
          <div className="form_input">
            User name <input className="input-box" type="text" name="name" value={this.state.name} onChange={this.handleChange} autoComplete="off" /> <br />
            Email <input className="input-box" type="email" name="email" value={this.state.email} onChange={this.handleChange} autoComplete="off" /> <br />
          </div>
          <div>
            <button className="btn" onClick={this.handleSaveEdit}>
              Save
            </button>
            <button className="btn" onClick={this.handleCancelEdit}>
              Cancel
            </button>
          </div>
        </form>
        <div className={isEditable ? "optional" : "item"}>
          <div>
            <h1>User name : {user.name}</h1>
            <h2>Email : {user.email}</h2>
            <h2>DOJ : {user.date}</h2>
          </div>
          <div>
            <button className="btn" onClick={() => this.handleEdit(user.id)}>
              Edit
            </button>
            <button className="btn" onClick={() => this.handleDelete(user.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editableUserNumber: state.users.editableUserNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    editUser,
    cancelEdit,
    saveEdit,
    deleteUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
