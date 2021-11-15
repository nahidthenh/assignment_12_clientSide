import React from "react";
import banner from "../../../images/banner.jpg";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cta-area">
              <h3>Click here to Explore More</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quas.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-12 m-0 p-0 galery">
            <img src={banner} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
