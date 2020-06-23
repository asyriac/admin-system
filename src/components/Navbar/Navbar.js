import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="header_nav">
        <div className="nav_content">
          <h2 className="logo">Admin System</h2>
          <nav className="nav">
            <ul className="nav_list">
              <li className="nav_item">
                <NavLink to="/users" className="nav_link">
                  Users
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to="/category" className="nav_link">
                  Category
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
