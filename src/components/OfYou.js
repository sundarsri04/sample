import React from "react";

function Ofyou({menuUrl, star, price}) {
  return (
    <div class="container-fluid">
      <div
        class="card border border-info rounded inner"
        
      >
        <img class="img-thumbnail" src={menuUrl} alt="" style={{ width: 400, height: 200 }}/>
        <div class="card-footer row bg-info">
          <small class="col text-white fs-5">{star}</small>
          <small class="col text-warning fw-bold fs-4">
            $<span class="text-dark">-{price}</span>
          </small>
        </div>
      </div><br /><br />
    </div>
  );
}

export default Ofyou;
