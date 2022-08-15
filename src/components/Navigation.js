import React from "react";
import { Link } from "react-router-dom";
import Routing from "./Routing";

function Navigation() {
  return (
    <nav className="navbar navbar-light bg-light fixed-top mb-2">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="#">
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
        </Link>
        <div className="dropdown mt-2">
          <Link
            className="btn btn-light dropdown-toggle"
            to="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Your Address
          </Link>

          <ul
            className="dropdown-menu w-300"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <form>
                <label className="fw-bold">Enter Your Address :</label>{" "}
                <input
                  className="form-control border border-dark bg-light mt-2"
                  type="text"
                  placeholder="Address"
                ></input>
              </form>
            </li>
            <br />
            <li>
              <Link className="dropdown-item" to="#">
                <u>Signin for Saved Address</u>
              </Link>
            </li>
          </ul>
        </div>

        <form className="form-inline my-2 my-lg-0 w-50">
          <input
            className="form-control mr-sm-2 rounded-pill border border-warning text-white"
            type="search"
            placeholder= "       Search Your Favourite Food..."
            aria-label="Search"
          />
        </form>
        <Link>
        <button className="btn btn-outline-danger rounded-pill m-2">
          <i className="fa-solid fa-cart-plus"></i> - <span>0</span>
        </button>
        </Link>
        <Link className="signUp" to="/SignUp">
        <button className="btn btn-outline-dark rounded-pill">Sign Up</button>
        </Link>
        <Link
          to="#"
          id="menu-bar"
          data-toggle="popover"
          data-placement="left"
          title="Popover Header"
          data-content=""
        >
          <button
            className="navbar-toggle btn btn-dark m-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </Link>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-body bg-transparent">
            <ul className="navbar-nav flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold border border-d k rounded bg-warning p-2"
                  href="#"
                  id="offcanvasNavbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Partner with Us
                </a>
                <ul
                  className="dropdown-menu border border-warning bg-light"
                  aria-labelledby="offcanvasNavbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item text-muted" to="Rider">
                      <i className="fa-solid fa-person-biking text-dark p-2"></i>
                      Riders
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-muted"
                      href="./add-shop.html"
                    >
                      <i className="fa-solid fa-utensils text-dark p-2"></i>
                      Add Your Shop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-muted" href="#">
                      <i className="fa-solid fa-suitcase text-dark p-2"></i>
                      Career
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <br />
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="./index.html"
                >
                  <i className="fa-solid fa-house-chimney p-2"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa-solid fa-tag p-2"></i> Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa-solid fa-circle-info p-2"></i> Help
                </a>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <Link className="signin" to="SignIn">
            <button className="btn btn-outline-warning w-100 m-2">Sign In</button>
            </Link>
            </div>
            <div>
          
            <button className="btn btn-outline-warning w-100 m-2">Sign Up</button>
            </div>
            
            <br />
            <br />
            <div className="footer-card mb-3">
              <div className="card-body d-inline-flex m-4">
                <a className=" m-1" href="https://www.apple.com/in/app-store/">
                  <img width="130px" src="./images/apple.png" alt="" />
                </a>
                <a
                  className="m-1"
                  href="https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700065205026376_creativeid_535350509651_device_c&gclid=CjwKCAjwjtOTBhAvEiwASG4bCMnq60y2BDu9KWYVKMHaTyiyYHTFuMzpy29Ogwn_vuD9BWzZW3nJXRoCU5UQAvD_BwE&gclsrc=aw.ds"
                >
                  <img width="130px" src="./images/google.webp" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
