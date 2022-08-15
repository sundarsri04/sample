import React from "react";

function AddShop() {
  return (
    <div>
      <div class="row bg-light">
        <div class="col-3"></div>
        <div class="col-6 bg-white">
          <h2 class="mx-5 mt-3 mb-3 text-center">Start Selling On Us</h2>
          <p class="text-center text-muted mb-4">
            Welcome! Let's get you set up. It will only take a few minutes.
          </p>
          <form action="">
            <div class="form-group col mx-5">
              <label class="text-start fw-bold mb-2" for="sName">
                Restaurant or Shop Name
              </label>
              <input
                type="text"
                class="form-control bg-light border-1 rounded-3 p-2 mb-3"
                name="sName"
                placeholder="E.g. Star Briyani"
              />

              <label class="text-start fw-bold mb-2" for="sAddress">
                Restaurant or Shop Address
              </label>
              <input
                type="text"
                class="form-control bg-light border-1 rounded-3 p-2 mb-3"
                name="sAddress"
                placeholder="E.g. 1 2 3 O M R"
              />
              <div class="row">
                <div class="col">
                  <label class="text-start fw-bold mb-2" for="city">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control bg-light border-1 rounded-3 p-2"
                    aria-label="city"
                    placeholder="E.g. Chennai"
                  />
                </div>
                <div class="col">
                  <label class="text-start fw-bold mb-2" for="email">
                    Pincode
                  </label>
                  <input
                    type="text"
                    class="form-control bg-light border-1 rounded-3 p-2"
                    aria-label="Last name"
                    placeholder="E.g. 600 123"
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
                placeholder="E.g. 1234@xxx.com"
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
        <div class="col-3"></div>
      </div>
    </div>
  );
}

export default AddShop;
