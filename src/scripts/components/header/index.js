import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="sub-header">
      <div className="app-logo">
        <img src="assets/app-logo.png" alt="App Logo" />
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/contribution">
              Other Product
            </Link>
          </li>
          <li>
            <Link to="/cart">
              My Cart (0)
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <Link className="create-book" to="/create-book">
              Create Book
            </Link>
            {/* <a className="create-book" href="/">Create Book</a> */}
          </li>
        </ul>
      </nav>
    </div>

    <div className="description">
      <h1>Card</h1>
      <p>
        The products you've chosen are among our most popular.
        <br />
        Time to grab these goods before they sell out!
      </p>
    </div>
  </div>
);

export default Header;
