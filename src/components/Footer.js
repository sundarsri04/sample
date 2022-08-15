import React from "react";

function Footer() {
  return (
    <div className="footer container-fluid bg-dark">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2 m-4">
          <div class="footer-card text-white bg-dark mb-1">
            <div class="card-header">
              <h5 className="fw-bold fs-4">Discover</h5>
            </div>
            <div class="card-body fw-lighter mt-4">
              <p class="card-text">Investors</p>
              <p class="card-text">About Us</p>
              <p class="card-text">Takeaway</p>
              <p class="card-text">More</p>
              <p class="card-text">Newsroom</p>
              <p class="card-text">Foodscene Blog</p>
              <p class="card-text">Design Blog</p>
              <p class="card-text">Career</p>
              <p class="card-text">Become a Rider</p>
              <p class="card-text">Restaurant Signup</p>
            </div>
          </div>
        </div>
        <div className="col-2 m-4">
          <div class="footer-card text-white bg-dark mb-3">
            <div class="card-header">
              <h5 className="fw-bold fs-4">Legal</h5>
            </div>
            <div class="card-body fw-lighter mt-4">
              <p class="card-text">Terms and conditions</p>
              <p class="card-text">Privacy</p>
              <p class="card-text">Cookies</p>
              <p class="card-text">Modern Slavery</p>
              <p class="card-text">Tax Strategy</p>
            </div>
          </div>
        </div>
        <div className="col-2 m-4">
          <div class="footer-card text-white bg-dark mb-3">
            <div class="card-header">
              <h5 className="fw-bold fs-4">Help</h5>
            </div>
            <div class="card-body fs-6 fw-lighter mt-4">
              <p class="card-text">Contact</p>
              <p class="card-text">FAQs</p>
              <p class="card-text">cuisines</p>
              <p class="card-text">Brands</p>
            </div>
          </div>
        </div>
        <div className="col-2 m-4">
          <div class="footer-card text-white bg-dark mb-3">
            <div class="card-header text-center">
              <h5 className="fw-bold fs-4">Take Us with You</h5>
            </div>
            <div class="card-body mt-5">
              <div class="apple text-center ">
                <a href="#">
                  <img width="150px" src="./images/apple.png" alt="" />
                </a>
              </div>
              <br />
              <div class="google text-center">
                <a href="#">
                  <img width="150px" src="./images/google.webp" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
