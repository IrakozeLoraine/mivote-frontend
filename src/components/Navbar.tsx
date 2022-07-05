import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-5">
              
            </ul> */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <h6>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-decoration-underline text-primary nav-link ms-2'
                        : 'nav-link ms-2'
                    }
                    to="/poll"
                  >
                    Polls
                  </NavLink>
                </h6>
              </li>
              <li className="nav-item">
                <h6>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? 'text-decoration-underline text-primary nav-link ms-2'
                        : 'nav-link ms-2'
                    }
                  >
                    Account
                  </NavLink>
                </h6>
              </li>
              <li className="nav-item me-4">
                <h6>
                  <Link className="nav-link ms-2" to="/login">
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
