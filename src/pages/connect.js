import React from "react";

const Connect = () => {
  const connectNow = () => {
    console.log("connected");
  };
  return (
    <div className="container w-50 mt-5">
      <div className="mb-3">
        <label for="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="mb-3">
        <label for="opt" className="form-label">
          Related field
        </label>
        <select className="form-control" id="opt">
          <option selected>Choose one</option>
          <option value="1">Found a bug</option>
          <option value="2">Suggestions</option>
          <option value="3">Contribute</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="text" className="form-label">
          Elaborate the issue
        </label>
        <textarea className="form-control" id="text" rows="5"></textarea>
      </div>
      <button className="btn btn-success" onClick={connectNow}>
        Submit
      </button>
    </div>
  );
};

export default Connect;
