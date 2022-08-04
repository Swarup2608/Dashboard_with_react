import React from "react";

export const ListTop = (props) => {
  return (
    <li className="p-3 list-item d-flex justify-content-start align-items-center">
      <div className="avatar">
        <img src={props.img} alt="" className="avatar avatar-img avatar-60 rounded" />
      </div>
      <div className="list-style-detail ml-3 mr-2">
        <p class="mb-0">{props.title}</p>
      </div>
      <div class="list-style-action d-flex justify-content-end ml-auto">
        <h6 class="font-weight-bold">${props.cost}</h6>
      </div>
    </li>
  );
};
