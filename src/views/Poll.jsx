import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Poll() {
  return (
    <>
      <Navbar isLoggedIn />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="my-3">Polls</h4>
          <Link to="/poll/create" className="btn btn-primary">
            + Create Poll
          </Link>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card border-0 shadow-sm rounded-5 p-2">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="card-title">Names</h4>
                  <span className="badge badge-warning bg-warning text-dark text-lowercase">
                    PENDING
                  </span>
                </div>

                <h6 className="card-text mb-4">
                  <span className="rounded-circle px-3 py-2 bg-success text-white">
                    A
                  </span>
                  {'  '}
                  author
                </h6>
                <p className="card-text mb-4 text-truncate">
                  description descriptiondescription descriptiondescription
                  descriptiondescription descriptiondescription
                  descriptiondescription description
                </p>
                <div className="d-flex justify-content-between">
                  <a href="#" className="btn btn-outline-primary">
                    View Poll
                  </a>
                  <a href="#" className="btn btn-outline-secondary">
                    Edit Poll
                  </a>
                  <a href="#" className="btn btn-outline-danger">
                    Change Status
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-sm rounded-5 p-2">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="card-title">Names</h4>
                  <span className="badge bg-dark px-3 py-2">
                    <span className="text-warning fs-1">.</span>
                    <span className="text-white fw-normal text-lowercase">
                      PENDING
                    </span>
                  </span>
                </div>

                <h6 className="card-text mb-4">
                  <span className="rounded-circle px-3 py-2 bg-success text-white">
                    A
                  </span>
                  {'  '}
                  author
                </h6>
                <p className="card-text mb-4 text-truncate">
                  description descriptiondescription descriptiondescription
                  descriptiondescription descriptiondescription
                  descriptiondescription description
                </p>
                <div className="d-flex justify-content-between">
                  <a href="#" className="btn btn-outline-primary">
                    View Poll
                  </a>
                  <a href="#" className="btn btn-outline-secondary">
                    Edit Poll
                  </a>
                  <a href="#" className="btn btn-outline-danger">
                    Change Status
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-sm rounded-5 p-2">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="card-title">Names</h4>
                  <span className="badge badge-warning bg-warning text-dark text-lowercase">
                    PENDING
                  </span>
                </div>

                <h6 className="card-text mb-4">
                  <span className="rounded-circle px-3 py-2 bg-success text-white">
                    A
                  </span>
                  {'  '}
                  author
                </h6>
                <p className="card-text mb-4 text-truncate">
                  description descriptiondescription descriptiondescription
                  descriptiondescription descriptiondescription
                  descriptiondescription description
                </p>
                <div className="d-flex justify-content-between">
                  <a href="#" className="btn btn-outline-primary">
                    View Poll
                  </a>
                  <a href="#" className="btn btn-outline-secondary">
                    Edit Poll
                  </a>
                  <a href="#" className="btn btn-outline-danger">
                    Change Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
