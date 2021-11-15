import React from "react";
import cate1 from "../../../images/cate-1.jpg";
import cate2 from "../../../images/cate-2.jpg";
import cate3 from "../../../images/cate-3.jpg";
import "./Categories.css";

const Categories = () => {
  return (
    <div>
      <div className="categories">
        <h2 className="pt-5 pb-3 text-center">Shop By Categories</h2>
        <div className="container">
          <div className="row my-3 pb-5">
            <div className="col-md-4 cat">
              <div className="cat-item">
                <img src={cate1} alt="" className="img-fluid" />
                <h4>Sports Bike</h4>
                <p>From $1120</p>
              </div>
            </div>
            <div className="col-md-4 cat">
              <div className="cat-item">
                <img src={cate2} alt="" className="img-fluid" />
                <h4>Travel Bike</h4>
                <p>From $1354</p>
              </div>
            </div>
            <div className="col-md-4 cat">
              <div className="cat-item">
                <img src={cate3} alt="" className="img-fluid" />
                <h4>Showcase Bike</h4>
                <p>From $1529</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
