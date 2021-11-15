import React from "react";
import "./Blog.css";
const blog = () => {
  return (
    <div>
      <div className=" mt-3 pb-5">
        <div className="banner-content">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="blog-item">
              <img className="img-fluid" src="https://ic1.maxabout.us/autos/tw_india//D/2021/3/dhoom-3-bike-bmw-k1300r.jpg" alt="" />
              <h3>BMW Ninet</h3>
              <p>Currently, there are 63 bike manufacturers in India with 203 bike models in the market. Major Brands selling Bikes in India are Hero, Honda, Suzuki, TVS, Royal Enfield. And Some of the popular bikes in India are KTM RC 200, Honda Shine, Royal Enfield Meteor 350, KTM RC 390, Hero Splendor Plus.</p>
              <button className="blog-btn">Read More</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-item">
              <img className="img-fluid" src="https://economictimes.indiatimes.com/thumb/msid-71939224,width-1200,height-900,resizemode-4,imgsize-482211/the-amb-001-by-aston-martin.jpg?from=mdr" alt="" />
              <h3>Police Pick</h3>
              <p>Currently, there are 63 bike manufacturers in India with 203 bike models in the market. Major Brands selling Bikes in India are Hero, Honda, Suzuki, TVS, Royal Enfield. And Some of the popular bikes in India are KTM RC 200, Honda Shine, Royal Enfield Meteor 350, KTM RC 390, Hero Splendor Plus.</p>
              <button className="blog-btn">Read More</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-item">
              <img className="img-fluid" src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
              <h3>KTM v6</h3>
              <p>Currently, there are 63 bike manufacturers in India with 203 bike models in the market. Major Brands selling Bikes in India are Hero, Honda, Suzuki, TVS, Royal Enfield. And Some of the popular bikes in India are KTM RC 200, Honda Shine, Royal Enfield Meteor 350, KTM RC 390, Hero Splendor Plus.</p>
              <button className="blog-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
