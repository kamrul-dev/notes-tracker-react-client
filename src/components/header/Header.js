import React from "react";

const Header = () => {
  
  

  
  return (
    <nav className="navbar navbar-dark" style={{backgroundColor: "#247881"}}>
      <div className="container mx-auto container-fluid">
        <span className="fw-bold fs-5 text-white">Notes Tracker</span>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            name="searchText"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn color-btn-30AADD" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );



};

export default Header;
