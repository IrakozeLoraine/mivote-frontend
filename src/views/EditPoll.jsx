import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function EditPoll() {
  const [poll, setPoll] = useState({
    name: '',
    author: '',
    description: '',
    location: '',
  });
  const [error, setError] = useState({
    name: '',
    author: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    setPoll({
      ...poll,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!poll.name) {
      setError({ ...error, name: 'Name is required' });
    } else if (!poll.location) {
      setError({ ...error, location: 'Location is required' });
    } else if (!poll.description) {
      setError({ ...error, description: 'Description is required' });
    } else {
      console.log(poll);
    }
  };

  return (
    <>
      <Navbar isLoggedIn />
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5">
            <div className="card border-0 rounded-3 mt-3">
              <div className="card-body p-4 p-sm-5">
                <h2 className="card-title fw-semibold h2 mb-4">New Poll</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-4">
                    <input
                      className={`form-control border ${
                        error.name ? 'border-danger' : 'border-secondary'
                      }`}
                      id="floatingInput"
                      placeholder="John Doe"
                      value={poll.name}
                      name="name"
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingInput">Name / Title</label>

                    {error.name && (
                      <small className="text-danger">{error.name}</small>
                    )}
                  </div>

                  <div className="form-floating mb-4">
                    <input
                      className={`form-control border ${
                        error.location ? 'border-danger' : 'border-secondary'
                      }`}
                      id="floatingInput"
                      placeholder="New York, USA"
                      value={poll.location}
                      name="location"
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="floatingInput">Location</label>

                    {error.location && (
                      <small className="text-danger">{error.location}</small>
                    )}
                  </div>

                  <div className="form-floating mb-4">
                    <textarea
                      className={`form-control border ${
                        error.location ? 'border-danger' : 'border-secondary'
                      }`}
                      style={{ height: '150px' }}
                      placeholder="Provide more description about the poll."
                      id="floatingInput"
                      name="description"
                      value={poll.description}
                      onChange={(e) => handleChange(e)}
                    ></textarea>

                    <label htmlFor="floatingInput">Description</label>

                    {error.description && (
                      <small className="text-danger">{error.description}</small>
                    )}
                  </div>

                  <div className="d-grid mt-4">
                    <button className="btn btn-primary py-3 px-4" type="submit">
                      Edit
                    </button>
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
