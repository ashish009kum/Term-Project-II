import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";

const Library = () => {
  return (
    <div className="container mt-3 library">
      <h1 className="text-center">
        Shhh! <i className="fa-regular fa-face-meh-blank"></i> You are in a
        library <i className="fa-solid fa-book-open-reader"></i>
      </h1>
      <div className="d-flex justify-content-between mt-5">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80"
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">Nith Library</h5>
            <p className="card-text">
              So, if you are planning for going to the library my suggestion is
              to you is first to check the seat availability.
            </p>
            <Link to="/" className="btn btn-primary">
              Check Seat Availability{" "}
              <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
        </div>
        <div className="card ">
          <img
            src="https://images.unsplash.com/photo-1604648717742-f93ce63fc25c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              Did You Know? <i class="fa-solid fa-lightbulb"></i>
            </h5>
            <p className="card-text text-center">
              <strong>
                "Giving Is Not Just About Making A Donation. It Is About Making
                A Difference."
              </strong>
            </p>
            <Link to="#" className="btn btn-success">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
