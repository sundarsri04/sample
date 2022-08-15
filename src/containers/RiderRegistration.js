import React from "react";

function RiderRegistration() {
  return (
    <div>
      <div class="container-fluid mt-3">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-4 bg-white">
            <h2 class="mx-5 mt-3 mb-5">Let's Get Started</h2>
            <form action="">
              <div class="form-group col mx-5">
                <div class="row">
                  <div class="col">
                    <label class="text-start fw-bold mb-2" for="email">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control bg-light border-1 rounded-3 p-2"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <label class="text-start fw-bold mb-2" for="email">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control bg-light border-1 rounded-3 p-2"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <br />
                <label class="text-start fw-bold mb-2" for="email">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control bg-light border-1 rounded-3 p-2 mb-3"
                  name="email"
                />

                <label class="text-start fw-bold mb-2" for="phone">
                  Pone Number
                </label>
                <input
                  type="text"
                  class="form-control bg-light border-1 rounded p-2 mb-4"
                  name="phone"
                />
              </div>
              <div class="mx-5 mt-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    I agree, on behalf of my company, to the Business
                    <a href="#">Terms and Conditions,</a>
                    and I agree to our <a href="#">Terms of Use</a> and
                    <a href="#">Privacy Notice.</a>
                  </label>
                </div>
              </div>
              <button class="btn btn-dark mt-4 mx-5" style="float: center">
                Submit
              </button>
              <br />
              <p class="mx-5 mt-4">
                Already have an account <a href="./signin.html">Sign in</a>
              </p>
            </form>
          </div>
          <div class="col-4 bg-info">
            <h2 class="mx-3 mt-4 mb-5 fw-bold text-white">
              What you will need ?
            </h2>
            <p class="mx-5 text-white fs-5">
              <i class="fa-regular fa-circle-check text-warning fw-bold p-2"></i>
              Scooter, bike or Bicycle (with licence and insurance)
            </p>
            <p class="mx-5 text-white fs-5">
              <i class="fa-regular fa-circle-check text-warning fw-bold p-2"></i>
              Safety equipment (e.g. helmet)
            </p>
            <p class="mx-5 text-white fs-5">
              <i class="fa-regular fa-circle-check text-warning fw-bold p-2"></i>
              Smartphone with iOS 13.6 / Android 6 or above
            </p>
            <p class="mx-5 text-white fs-5">
              <i class="fa-regular fa-circle-check text-warning fw-bold p-2"></i>
              Proof of your right to work self-employed in INDIA
            </p>
            <p class="mx-5 text-white fs-5">
              <i class="fa-regular fa-circle-check text-warning fw-bold p-2"></i>
              Age 18+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderRegistration;
