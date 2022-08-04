import React from "react";
import "./ListUp.css"

export const ListUp = (props) => {
  return (
    <tr class="white-space-no-wrap basics">
      <td>
        <h6 class="mb-0 text-uppercase text-secondary">
          <i class="uil uil-calendar-alt"></i> &ensp;{props.date}
        </h6>
      </td>
      <td class="pl-0 py-3">{props.event}</td>
    </tr>
  );
};
