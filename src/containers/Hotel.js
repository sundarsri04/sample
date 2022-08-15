import React from "react";

function Hotel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img
              src="./images/hotels/hotel-florida.jpeg"
              class="d-block w-100"
              style="height: 400px;"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="./images/hotels/hotel-miracle.webp"
              class="d-block w-100"
              style="height: 400px;"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./images/hotels/hotel-titanic.jpeg"
              class="d-block w-100"
              style="height: 400px;"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />
      <div class="container border-light line "></div>
      <br />

      <div class="container-fluid">
        <h1 class="border-light">Offer for you</h1> <br />
        <div class="card-deck row">
          <div class="card border-0 rounded col-3 inner">
            <img
              class="card-img-top"
              src="./images/hotels/hotel-days.jpeg"
              alt="Card image cap"
            />
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card border-0 rounded col-3 inner">
            <img
              class="card-img-top"
              src="./images/hotels/hotel-best.webp"
              alt="Card image cap"
            />
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card border-0 rounded col-3 inner">
            <img
              class="card-img-top"
              src="./images/hotels/hotel-florida.jpeg"
              alt="Card image cap"
            />
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card border-0 rounded col-3 inner">
            <img
              class="card-img-top"
              src="./images/hotels/hotel-holiday.jpeg"
              alt="Card image cap"
            />
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <div class="container border-light line "></div>
      <br />
      <br />
      <div class="container-fluid">
        <h1 class="border-light">Hot Selling</h1> <br />
        <div class="card-deck row">
          <div class="card border-0 rounded col-3 inner">
            <img
              class="card-img-top"
              src="./images/hotels/hotel-miracle.webp"
              alt="Card image cap"
            />
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card border-0 rounded col-3 inner">
            <img
              class="card-img-top"
              src="./images/hotels/hotel-sangeetha.webp"
              alt="Card image cap"
            />
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card border-0 rounded col-3 inner">
            <img
              class="card-img-top"
              src="./images/hotels/hotel-seashore.jpeg"
              alt="Card image cap"
            />
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card border-0 rounded col-3 inner">
            <img
              class="card-img-top"
              src="./images/hotels/hotel-titanic.jpeg"
              alt="Card image cap"
            />
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <div class="container border-light line "></div>
      <br />
      <br />
    </div>
  );
}

export default Hotel;
