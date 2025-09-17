import React from "react";

const Market = ({ price }) => {
  return (
    <div>
      <div className="card text-center m-5" style={{width: "18rem"}}>
        <img src="testimg.jpg" alt="" className="card-img-top" />
        <div className="card-body">
          <p className="card-text" style={{fontWeight: "bold", display: "flex", alignItems: "flex-start"}}>Beauty Chocolate Book</p>
          <div className="card-title" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h3>#20,000</h3>
            <div className="card-text d-flex justify-content-end align-items-end gap-3">
              <button>+</button>
              <h3>{price}</h3>
              <button>-</button>
            </div>
          </div>
            <button className="btn btn-primary w-100 mt-3 mb-1">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Market;
