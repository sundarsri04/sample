import React from "react";

function Category({imgUrl, title}) {
  return (
    <div className="cat ">
        <div className="inner rounded-circle">
            <a href="/delivery">
              <img
                className="menu-image rounded-circle"
                src={imgUrl}
                alt=""
              />
            </a>
          </div>
          <p className="text-center text-muted mt-2 hover-zoom">{title}</p>
    </div>    
  );
}

export default Category;
