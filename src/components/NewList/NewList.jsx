import React from "react";
import "./NewList.css";

export const NewList = (props) => {
  return (
    <tr class="white-space-no-wrap">
      <td>{props.date}</td>
      <td>
        <div class="d-flex align-items-center">
          <div class="avatar-45 mr-2">
            <img src={props.img} class="img-fluid rounded-circle" alt="user2" />
          </div>
          <div>{props.name}</div>
        </div>
      </td>
      <td>
        <p class={'mb-0 d-flex justify-content-start align-items-center '+props.color}>
          <small><i class='uil uil-circle-layer '></i></small>&ensp; {props.color}
        </p>
      </td>
      <td class="text-right">Rs. {props.cost}</td>
    </tr>
  );
};
