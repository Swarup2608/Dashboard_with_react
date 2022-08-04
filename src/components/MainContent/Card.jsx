import React from "react";

export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="card-main">
            <div className="mb-2 text-secondary">{props.title}</div>
            <div className="d-flex flex-wrap justify-content-start align-items-center">
              <h5 className="mb-0 font-weight-bold">Rs. {props.cost}</h5>
              <p className="mb-0 ml-3 text-success font-weight-bold">+{props.profit}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
