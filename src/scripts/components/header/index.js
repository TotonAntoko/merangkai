import React from 'react';
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
            <a className="other-product" href="#other-product">Other Product</a>
          </li>
          <li>
            <a href="#my-cart">My Cart (0)</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <a className="create-book" href="#create-book">Create Book</a>
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
