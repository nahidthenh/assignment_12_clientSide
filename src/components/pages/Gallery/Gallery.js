import React from "react";
import banner from "../../../images/banner.jpg";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div>
      <div className="cta-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-area">
                <h3>Click here to Explore More</h3>
                <p>Currently, there are 63 bike manufacturers in India with 203 bike models in the market. Major Brands selling Bikes in India are Hero, Honda, Suzuki, TVS, Royal Enfield. And Some of the popular bikes in India are KTM RC 200, Honda Shine, Royal Enfield Meteor 350, KTM RC 390, Hero Splendor Plus.</p>
                <button className="buy-now-btn">Buy Now</button>
              </div>
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
