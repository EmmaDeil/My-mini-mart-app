import React from "react";

const Plans = (props) => {
  return (
    <div>
      <h2>Choose the plan that's right for you</h2>
      <div className="container my-5">
            <div className="col-md-4">
               <h3>{props.plan}</h3>
               <p>{props.price}</p>
               <button>{props.buttonText}</button>
               <ul>
                {props.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
               </ul>
            </div>
      </div>
    </div>
  );
};

export default Plans;
