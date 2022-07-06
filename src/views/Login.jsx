import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signin } from '../../services/auth';
import Navbar from '../components/Navbar';

export default function Login() {
  const initialUserState = {
    phone: '',
    password: '',
  };
  const [user, setUser] = useState(initialUserState);
  const [error, setError] = useState(initialUserState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.phone) {
      setError({ ...error, phone: 'Phone is required' });
    } else if (!user.password) {
      setError({ ...error, password: 'Password is required' });
    } else {
      signin(user)
        .then(async (res) => {
          try {
            localStorage.setItem('user', JSON.stringify(res.data)),
              toast.success(`Welcome back, ${res.data.names}`);
            setUser(initialUserState);
            navigate('/polls');
          } catch (error) {
            toast.error(error.message);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  };

  return (
    <>
      <Navbar noShadow={false} />
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h2 className="card-title text-center fw-semibold h2">
                  Welcome Back!
                </h2>
                <h2 className="text-center mb-5">👋</h2>
                <form onSubmit={handleSubmit}>
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

                  <div className="d-grid mt-4">
                    <button
                      className="btn btn-primary btn-login py-3 px-4"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <small className="text-center text-muted">
                      Don't have an account? <Link to="/register">Sign up</Link>
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
