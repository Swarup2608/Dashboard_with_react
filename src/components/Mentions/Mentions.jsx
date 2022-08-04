import React from "react";

export const Mentions = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="mentions">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#3378FF"></rect>
        </svg>
        <span>Incomes</span>
      </div>
      <div className="ml-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#19b3b3"></rect>
        </svg>
        <span>Expenses</span>
      </div>
    </div>
  );
};
