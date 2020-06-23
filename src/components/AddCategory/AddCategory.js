import React, { Component } from "react";
import { addCategory } from "../../actions/category";
import { connect } from "react-redux";

class AddCategory extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      subcategories: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddCategory = (e) => {
    e.preventDefault();
    const { name, subcategories } = this.state;
    this.props.dispatch(this.props.addCategory(name, subcategories));
    this.setState({
      name: "",
      subcategories: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Add Category</h1>
        <form>
          <input className="input-box" type="text" name="name" placeholder="Enter category" value={this.state.name} onChange={this.handleChange} autoComplete="off" /> <br />
          <textarea className="input-box" type="textarea" name="subcategories" placeholder="Enter sub-categories separated by space" value={this.state.subcategories} onChange={this.handleChange} autoComplete="off" /> <br />
          <button className="btn-add" onClick={this.handleAddCategory}>
            Add caegory
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => {
  return {
    dispatch,
    addCategory,
  };
};

export default connect(mapStateToProps)(AddCategory);
