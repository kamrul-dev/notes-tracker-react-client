import React from "react";

const inputForm = () => {



  return (
    <div className=" p-3 color-43919B">
      <form className="container" >
        <div className="input-group mb-3 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            aria-label="Username"
            name="user_name"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Write Notes</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="text"
          ></textarea>
        </div>
        <div className="mt-4">
          <input type="submit" value="Add Note" className="btn color-btn-30AADD w-50 fw-bold" />
        </div>
      </form>
    </div>
  );
};

export default inputForm;
