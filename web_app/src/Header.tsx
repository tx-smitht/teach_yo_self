import React from 'react';
import './App.css';

function SiteHeader() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <h2 className="nav-link text-dark">Weightlifting Prediction</h2>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
