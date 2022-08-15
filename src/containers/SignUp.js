import React from "react";

function SignUp() {
  return (
    <div>
      <div class="container col-sm-6">
        <div class="card bg-white w-100 border-0">
          <div class="card-body text-center">
            <h3 class="fw-bold">Sign Up</h3>
            <h6 class="text-secondary">
              Already have an Account?
              <a class="fw-bold text-danger" href="./signin.html">
                Sign In
              </a>
            </h6>
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                class="btn btn-primary disabled rounded-pill bg-primary fw-bold"
                type="button"
              >
                Continue with Google
              </button>
              <button
                class="btn btn-primary active rounded-pill fw-bold"
                type="button"
              >
                Continue with Facebook
              </button>
              <button
                class="btn btn-dark"
                style="border-radius: 50px"
                type="button"
              >
                Continue with Apple
              </button>
            </div>
            <br />
            <div>
              <p class="cont-email text-secondary" style="font-size: 1em">
                ---------- or continue with email ----------
              </p>
            </div>
          </div>
          <form role="form" onsubmit="signUp(event);">
            <div class="form-group col-6 mx-auto">
              <div class="row">
                <div class="col">
                  <label class="text-start fw-bold mb-2" for="firstname">
                    First Name<span class="text-danger">*</span>
                  </label>
                  <input
                    name="fname"
                    id="fname"
                    type="text"
                    class="form-control bg-light border-1 rounded-3"
                    aria-label="First name"
                    required
                  />
                </div>
                <div class="col">
                  <label class="text-start fw-bold mb-2" for="lastname">
                    Last Name<span class="text-danger">*</span>
                  </label>
                  <input
                    name="lname"
                    id="lname"
                    type="text"
                    class="form-control bg-light border-1 rounded-3 mb-2"
                    aria-label="Last name"
                    required
                  />
                </div>
              </div>

              <label class="text-start fw-bold mb-2" for="email">
                Email<span class="text-danger">*</span>
              </label>
              <input
                name="email"
                id="email"
                type="email"
                class="form-control bg-light border-1 rounded-3 mb-2"
                required
              />

              <label class="text-start fw-bold mb-2" for="email">
                password<span class="text-danger">*</span>
              </label>
              <input
                name="password"
                id="password"
                type="password"
                class="form-control bg-light border-1 rounded"
                required
              />
            </div>

            <br />
            <div class="form-group d-grid gap-2 col-6 mx-auto">
              <button
                class="btn btn-danger rounded-pill bg-danger fw-bold"
                type="submit"
              >
                Sign Up
              </button>
              <p class="term text-muted text-center">
                <small>
                  By clicking Sign up, Continue with Facebook, Continue with
                  Google or Continue with Apple, you agree to our
                  <a href="#" class="link-danger">
                    {" "}
                    Terms and Conditions
                  </a>{" "}
                  and
                  <a href="#" class="link-danger">
                    Privacy Policy.
                  </a>
                </small>
              </p>
            </div>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
