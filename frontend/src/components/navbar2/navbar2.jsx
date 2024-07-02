import React from "react";
import "./navbar2.css";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="width"></div>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Contacts
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  {" "}
                  <i class="fa fa-bars" aria-hidden="true"></i> Lists{" "}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa fa-align-right" aria-hidden="true"></i> Kanaban{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa fa-th-list" aria-hidden="true"></i> Table{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa fa-th-large" aria-hidden="true"></i> Grid{" "}
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item p-2 ">
                <button type="button" className="button-style">
                  <i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Sort
                  By
                </button>
              </li>
              <li className="nav-item p-2 ">
                <button type="button" className="button-style">
                  <i class="fa fa-filter" aria-hidden="true"></i> Filter
                </button>
              </li>
              <li className="nav-item p-2 ">
                <Link to="/addcontact">
                  <button
                    type="button"
                    className="bg-dark text-white add-button-style"
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i>Add Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
