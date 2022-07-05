import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
  const [user, setUser] = useState({
    names: '',
    phone: '',
    dob: '',
    password: '',
    confirmpassword: '',
  });
  const [error, setError] = useState({
    names: '',
    phone: '',
    dob: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.names) {
      setError({ ...error, names: 'Names is required' });
    } else if (!user.phone) {
      setError({ ...error, phone: 'Phone is required' });
    } else if (!user.dob) {
      setError({ ...error, dob: 'Date of birth is required' });
    } else if (!user.password) {
      setError({ ...error, password: 'Password is required' });
    } else if (!user.password) {
      setError({ ...error, password: 'Password confirmation is required' });
    } else if (user.password != user.confirmpassword) {
      setError({ ...error, confirmpassword: 'Passwords do not match' });
    } else {
      console.log(user);
    }
  };

  return (
    <>
      <Navbar noShadow={false} />
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 rounded-3 mt-3">
              <div className="card-body p-4 p-sm-5">
                <h2 className="card-title text-center fw-semibold h2 mb-4">
                  Sign up
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-4">
                    <input
                      className={`form-control border ${
                        error.names ? 'border-danger' : 'border-secondary'
                      }`}
                      id="floatingInput"
                      placeholder="John Doe"
                      value={user.names}
                      name="names"
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingInput">Names</label>

                    {error.names && (
                      <small className="text-danger">{error.names}</small>
                    )}
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      className={`form-control border ${
                        error.phone ? 'border-danger' : 'border-secondary'
                      }`}
                      id="floatingInput"
                      placeholder="0788102030"
                      value={user.phone}
                      name="phone"
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingInput">Phone number</label>

                    {error.phone && (
                      <small className="text-danger">{error.phone}</small>
                    )}
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      className={`form-control border ${
                        error.dob ? 'border-danger' : 'border-secondary'
                      }`}
                      id="floatingInput"
                      type="date"
                      value={user.dob}
                      placeholder="2000-01-01"
                      name="dob"
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingInput">Date of birth</label>

                    {error.dob && (
                      <small className="text-danger">{error.dob}</small>
                    )}
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className={`form-control border ${
                        error.password ? 'border-danger' : 'border-secondary'
                      }`}
                      id="floatingPassword"
                      placeholder="Password"
                      value={user.password}
                      name="password"
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingPassword">Password</label>

                    {error.password && (
                      <small className="text-danger">{error.password}</small>
                    )}
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className={`form-control border ${
                        error.confirmpassword
                          ? 'border-danger'
                          : 'border-secondary'
                      }`}
                      id="floatingPassword"
                      placeholder="Confirm Password"
                      value={user.confirmpassword}
                      name="confirmpassword"
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingPassword">Confirm Password</label>

                    {error.confirmpassword && (
                      <small className="text-danger">
                        {error.confirmpassword}
                      </small>
                    )}
                  </div>

                  <div className="d-grid mt-4">
                    <button
                      className="btn btn-primary btn-login py-3 px-4"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </div>

                  <div className="text-center mt-4">
                    <small className="text-center text-muted">
                      Already have an account? <Link to="/login">Sign in</Link>
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
