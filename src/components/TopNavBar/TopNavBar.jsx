import React from "react";
import "./TopNavBar.css";

export const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <nav class="navbar-light p-0 navbar navbar-expand-lg navbar-light">
        <div className="side-menu-bt-sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-secondary wrapper-menu"
            width="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <div className="d-flex align-items-center">
          <div className="mode">
            <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
              <div className="switch-inner">
              <input type="checkbox" class="custom-control-input" id="dark-mode" data-active="true" />
              <label class="custom-control-label" for="dark-mode" data-mode="toggle">
                <span class="switch-icon-left"><svg class="svg-icon" id="h-sun" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></span><span class="switch-icon-right"><svg class="svg-icon" id="h-moon" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg></span></label>
              </div>
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
};
