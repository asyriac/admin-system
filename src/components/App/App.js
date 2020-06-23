import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import UserList from "../UserList/UserList";
import AddUser from "../AddUser/AddUser";
import { getUsers } from "../../actions/users";
import { getCategories } from "../../actions/category";

import { connect } from "react-redux";
import CategoryList from "../CategoryList/CategoryList";
import AddCategory from "../AddCategory/AddCategory";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(this.props.getUsers());
    this.props.dispatch(this.props.getCategories());
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/users" exact component={UserList} />
          <Route path="/add-user" exact component={AddUser} />
          <Route path="/category" exact component={CategoryList} />
          <Route path="/add-category" exact component={AddCategory} />
          <Redirect from="/" exact to="/users" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getUsers,
    getCategories,
  };
};

export default connect(null, mapDispatchToProps)(App);
