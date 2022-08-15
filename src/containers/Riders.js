import React from "react";

function Riders() {
  return (
    <div>
      <div class="container-fluid mb-lg-0 rider-card">
        <img
          class="col m-0 w-100"
          src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg"
          alt="Responsive image"
        />
        <div class="centered">
          <h1 class="fw-bold">JOIN WITH US</h1>
          <br />
          <a href="./rider-apply.html">
            <button class="btn btn-lg btn-warning text-secondary fw-bold">
              Apply now
            </button>
          </a>
        </div>
        <br />
      </div>
      <br />

      <div class="container-fluid">
        <div class="row">
          <div class="col-7">
            <div class="card border-0">
              <div class="card-body">
                <img
                  src="https://media.edgeprop.my/s3fs-public/editorial/my/2021/March/23/delivery-man-with-face-mask-delivering-order-motorcycle_154993-160.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="card border-0" style="width: 35rem;">
              <div class="card-body">
                <h1 class="card-title order-content display-5 fw-bold">
                  We're always here for you
                </h1>
                <br />
                <p
                  class="card-text text-muted"
                  style="font-size: 1.5rem; line-height: 1.5;"
                >
                  When you are the road we are with you for help, advise and
                  support, message or call as in the app, your safety is our
                  priority so we will insure is in case of accidents, too. It's
                  totally free and applies from the moment you go Online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="container-fluid border-light line mb-5"></div>

      <div class="container-fluid text-center">
        <h1>Why Deliver with us !</h1>
        <a href="#">
          <i class="fa-solid fa-indian-rupee-sign fs-1 text-danger mt-5"></i>
        </a>
        <h5 class="mt-3">Earn extra money for your goals</h5>
        <p class="text-muted mt-2">
          Acheive your short - term goals or long - term dreams <br /> by
          joining with us.
        </p>

        <a href="#">
          <i class="fa-solid fa-calendar-days fs-1 mt-3"></i>
        </a>
        <h5 class="mt-3">Choose your own hours</h5>
        <p class="text-muted mt-2">
          Unlike full-time jobs, when and where you work is totally <br /> upto
          you.
        </p>

        <a href="#">
          <i class="fa-solid fa-person-biking fs-1 text-warning mt-5"></i>
        </a>
        <h5 class="mt-3">Freedom to ride anywhere</h5>
        <p class="text-muted mt-2">
          Don't worry about vehicle restrictions. Just sign up and receive{" "}
          <br /> everything you need to start earning.
        </p>

        <a href="#">
          <i class="fa-solid fa-person-booth fs-1 text-info mt-5"></i>
        </a>
        <h5 class="mt-3">Receive deliveries right away</h5>
        <p class="text-muted mt-2">
          Once approved, log on to the app to receive nearby <br /> orders
          immediately.
        </p>
      </div>

      <div class="container-fluid bg-warning">
        <h1 class="text-center">SignUp Details</h1>
        <div class="row mt-5">
          <div class="col-2"></div>
          <div class="col">
            <h4>Requirments</h4>
            <ul class="mx-5">
              <li>18 or older</li>
              <li>Any Bike, Scooter, or Bicycle(in selected cities)</li>
              <li>Driver's license number</li>
              <li>Aadhar number</li>
              <li>Final step: consent to a background check</li>
            </ul>
          </div>
          <div class="col">
            <h4>How to sign up</h4>
            <ul class="mx-5">
              <li>Submit application</li>
              <li>Complete Signup</li>
              <li>Get the App and go</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Riders;
