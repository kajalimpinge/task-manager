import React, { Component } from "react";
import { Link } from "react-router";
import { urls } from "../../routes";
import "./styles.css";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <nav className="top-nav">
          <h1 className="brand">Task Manager</h1>

          <ul className="menu menu-left">
            <li className='menu-left__item'>
              <Link to={urls.trelloBoard}>Board</Link>
            </li>
          </ul>

          <ul className="menu menu-right">
            <li className='menu-right__item'>
              <Link className="login" to={urls.index}>
                Login
              </Link>
            </li>
            <li className='menu-right__item'>
              <Link to={urls.index}>SignUp</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
