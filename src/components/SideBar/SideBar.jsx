import React from "react";
import Logo from "../../assets/logo.png";
import "./SideBar.css";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo d-flex align-items-end justify-content-between">
        <img src={Logo} alt="" />
        <span>Datum</span>
      </div>
      <nav className="sidebar-menu">
        <ul className="side-menu">
          <li className="active sidebar-layout">
            <div className="class">
              <i class="uil uil-home"></i>
              <span className="ml-2">Dashboard</span>
              <p class="mb-0 w-10 badge badge-pill badge-primary">6</p>
            </div>
          </li>
          <li class="px-3 pt-3 pb-2 ">
            <span class="text-uppercase small font-weight-bold">
              Application
            </span>
          </li>
          <li className="sidebar-layout">
            <div className="class">
              <i class="uil uil-users-alt"></i>
              <span className="ml-2">Customers</span>
            </div>
          </li>
          <li className="sidebar-layout">
            <div className="class">
              <i class="uil uil-tag-alt"></i>
              <span className="ml-2">Product</span>
            </div>
          </li>
          <li className="sidebar-layout">
            <div className="class">
            <i class="uil uil-shopping-cart-alt"></i>
              <span className="ml-2">Order</span>
            </div>
          </li>
          <li className="sidebar-layout">
            <div className="class">
            <i class="uil uil-clipboard-notes"></i>
              <span className="ml-2">Invoice</span>
            </div>
          </li>
          <li className="sidebar-layout">
            <div className="class">
            <i class="uil uil-clipboard"></i>
              <span className="ml-2">Todo</span>
            </div>
          </li>
          <li className="sidebar-layout">
            <div className="class">
            <i class="uil uil-schedule"></i>
              <span className="ml-2">Calendar</span>
              <p class="mb-0 px-2 badge badge-pill badge-success">New</p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
