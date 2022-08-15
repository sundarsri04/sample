import React from "react";


function Nav1() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-dark" href="#">
            <img
              className="avatar fw-bold"
              src="./images/logo-star.jpeg"
              alt=""
              width="80"
              height="65"
            />
            <span className="align-bottom text-dark fs-4 fw-bolder">
              S P A R K
            </span>
          </a>

          <form className="form-inline my-2 my-lg-0 w-50">
            <input
              className="form-control mr-sm-2 rounded-pill border border-warning text-white"
              type="search"
              placeholder="       Search Your Favourite Food..."
              aria-label="Search"
            />
          </form>

          <div>
            <ul class="nav fw-bold">
              <li class="nav-item">
                <a class="nav-link text-dark" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav1;
