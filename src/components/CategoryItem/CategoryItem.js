import React, { Component } from "react";
import { connect } from "react-redux";
import { editCategory, cancelEdit, saveEdit, deleteCategory } from "../../actions/category";
import "./CategoryItem.css";

class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.category.name,
      subcat: this.props.category.subcat.join(" "),
    };
  }

  handleEdit = (id) => {
    this.props.dispatch(this.props.editCategory(id));
  };

  handleCancelEdit = (e) => {
    e.preventDefault();
    this.props.dispatch(this.props.cancelEdit());
    this.setState({
      name: this.props.category.name,
      subcat: this.props.category.subcat.join(" "),
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSaveEdit = (e) => {
    e.preventDefault();
    const { name, subcat } = this.state;
    this.props.dispatch(this.props.saveEdit(this.props.category.id, name, subcat));
  };

  handleDelete = (id) => {
    this.props.dispatch(this.props.deleteCategory(id));
  };

  render() {
    const { category, editableCategoryNumber } = this.props;
    let isEditable = editableCategoryNumber === category.id;
    let moreItemsPresent = category.subcat.length > 5;
    return (
      <div className="item-container">
        <form className={isEditable ? "item" : "optional"}>
          <div className="form_input">
            Category name <input className="input-box" type="text" name="name" value={this.state.name} onChange={this.handleChange} autoComplete="off" /> <br />
            Subcategories <textarea className="input-box" type="text" name="subcat" value={this.state.subcat} onChange={this.handleChange} autoComplete="off" /> <br />
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
            <h1>Category name : {category.name}</h1>
            <span>Subcategories : </span>
            {category.subcat.map((i, index) => {
              console.log(typeof i);
              if (i.length !== 0 && index < 5)
                return (
                  <span key={index} className="subcategory">
                    {i}{" "}
                  </span>
                );
            })}
            {moreItemsPresent ? <span> ... more {category.subcat.length - 5 - 1} items present</span> : null}
          </div>
          <div>
            <button className="btn" onClick={() => this.handleEdit(category.id)}>
              Edit
            </button>
            <button className="btn" onClick={() => this.handleDelete(category.id)}>
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
    editableCategoryNumber: state.category.editableCategoryNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    editCategory,
    cancelEdit,
    saveEdit,
    deleteCategory,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
