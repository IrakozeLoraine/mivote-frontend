import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({
  noShadow = true,
  isLoggedIn = false,
}: {
  noShadow?: boolean;
  isLoggedIn: boolean;
}) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light p-0 ${
        noShadow ? 'shadow-sm' : ''
      }`}
    >
      <Link to="/login">
        <img
          src="../../assets/img/mivote-logo.png"
          alt="logo"
          className="px-4 py-3 navbar-brand"
          width={200}
        />
      </Link>

      {isLoggedIn && (
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-5">
              <li className="nav-item active">
                <h6>
                  <a className="nav-link" href="#">
                    Polls
                  </a>
                </h6>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <h6>
                  <a className="nav-link" href="#">
                    Account
                  </a>
                </h6>
              </li>
              <li className="nav-item">
                <h6>
                  <Link className="nav-link" to="/login">
                    Logout
                  </Link>
                </h6>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
