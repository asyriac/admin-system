import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CategoryItem from "../CategoryItem/CategoryItem";

class CategoryList extends Component {
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
    const { categoryList } = this.props;
    console.log(categoryList);
    const { searchField } = this.state;
    const filteredList = categoryList.filter((category) => {
      return category.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div>
        <Link to="/add-category">
          <button>Add category</button>
        </Link>
        <br />
        <input className="search" type="search" placeholder="Search" onChange={this.handleSearch} />
        {filteredList.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryList: state.category.categoryList,
  };
};

export default connect(mapStateToProps)(CategoryList);
