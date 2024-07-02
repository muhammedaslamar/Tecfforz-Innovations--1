import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import authService from '../authService'


function Navbar() {
  //Take the user id
 const userId=authService.getCurrentId()
 const tockenId=authService.getCurrentUser()
  //Logout Function
  const userLogout =()=>{
    authService.logout()
  }

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light bd">
        <div >
          <span className="title-name">Tecfforz Innovations</span>
        </div>
        <div className="forms">
        <form className="d-flex form" role="search">
          <i className="fa fa-search"></i>
          <input className="form-control me-2 form-input" type="search" placeholder="Search" aria-label="Search" />
          <span className="left-pan">
            <i className="fa fa-arrows-alt text-secondary"></i>
            <i className="fa fa-facebook-official text-secondary"></i>
          </span>
        </form>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <span className="fs-6 text-secondary pt-3"><i className="fa fa-question-circle"></i>  Help Center</span>
              </Link>
            </li>
            <li className="nav-item active">
              <div className="dropdown">
              <button className="btn btn-primory dropdown-toggle fw-bolder" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                  !userId&&!tockenId&&
                  <>
                    <li>
                    <Link className="dropdown-item" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Signin
                    </Link>
                  </li>
                  </>
                }
                {
                  userId&&tockenId&&
                  <>
                    <li onClick={userLogout}>
                    <Link className="dropdown-item" to="/login">
                      Logout
                    </Link>
                  </li>
                  </>
                }                 
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
