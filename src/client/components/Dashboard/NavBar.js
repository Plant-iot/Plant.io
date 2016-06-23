// TODO: Top Nav bar. May want to DELETE if not needed
// Currently used in views
import React, { Component } from 'react';

const NavBar = () => (
  <nav className="navbar navbar-default navbar-fixed-top nav-main">
    <div className="container">
      <div className="navbar-header">
        <button 
          type="button" 
          className="navbar-toggle collapsed" 
          data-toggle="collapse" 
          data-target="#navbar" 
          aria-expanded="false" 
          aria-controls="navbar"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Fit Together</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#menu-toggle" id="menu-toggle">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a>Signout</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;