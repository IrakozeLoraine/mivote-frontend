import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/poll.css';

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
          {[1, 2, 3].map(
            (poll, i) => (
              <div className="col" key={i}>
                <div className="card border-0 shadow-sm rounded-5 p-2">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4 className="card-title">Names</h4>
                      <span className="badge bg-dark text-white px-2 py-2 fw-normal text-lowercase d-flex align-items-center">
                        <i className="ri-checkbox-blank-circle-fill text-warning"></i>
                        <span className="ms-2">PENDING</span>
                      </span>
                    </div>
                    <h6 className="card-text mb-4">
                      <span className="rounded-circle px-2 py-1 bg-success text-white">
                        A
                      </span>
                      {'  '}
                      author
                    </h6>
                    <p className="card-text mb-4 truncate">
                      description descriptiondescription description description
                      description description descriptiondescription description
                      description description description description
                      descriptiondescription description description description
                    </p>
                    <div className="d-flex justify-content-between">
                      <a href="#" className="btn btn-outline-primary">
                        View Poll
                      </a>
                      <a href="#" className="btn" title="Edit Poll">
                        <i className="ri-edit-2-fill"></i>
                      </a>
                      <a href="#" className="btn btn-outline-danger">
                        Change Status
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ),
            3
          )}
        </div>
      </div>
    </>
  );
}
