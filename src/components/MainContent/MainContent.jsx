import React from "react";
import BarGraph from "../BarGarph/BarGraph";
import Chart from "../Chart/Chart";
import { Heading } from "../Heading/Heading";
import { ListUp } from "../ListUp/ListUp";
import { Mentions } from "../Mentions/Mentions";
import { NewCustomer } from "../NewCostumer/NewCustomer";
import { PieCharta } from "../PieChart/PieCharta";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { TopProducts } from "../TopProducts/TopProducts";
import { Card } from "./Card";
import "./MainContent.css";

export const MainContent = () => {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid fade-enter-done">
          <div className="row">
            <div className="mb-4 mt-1 col-md-12">
              <Heading />
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <Card title={"Total Profit"} cost={"50,000"} profit={1.55} />
                </div>
                <div className="col-lg-4 col-md-12">
                  <Card
                    title={"Total Expenses"}
                    cost={"12,000"}
                    profit={3.55}
                  />
                </div>
                <div className="col-lg-4 col-md-12">
                  <Card title={"New Users"} cost={"13,000"} profit={9.55} />
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <h4 className="font-weight-bold">Sales Reports</h4>
                        <Mentions />
                      </div>
                      <Chart title="Sales Reports" aspect={3 / 1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <TopProducts />
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="bg-primary card">
                    <div className="card-body chartet">
                      <div className="d-flex align-items-center">
                        <div className="fit-icon-2 text-info text-center">
                          <div className="progresschart">
                            <ProgressBar />
                          </div>
                        </div>
                        <div className="ml-3 texter">
                          <h5 className="text-white font-weight-bold">
                            1,860 <small> /3k Target</small>
                          </h5>
                          <small className="mb-0 aba">Order In Period</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                        <h6 class="font-weight-bold">Active Users</h6>
                        <div class="d-flex align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-2"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                          <span class=" font-weight-bold">200</span>
                        </div>
                      </div>
                      <p class="mb-0">Pages views per day</p>
                      <BarGraph aspect={1.5/1}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card-block card-stretch card-height card">
                <div class="header-title">
                  <h4 class="card-title" style={{ padding: "20px" }}>
                    Upcoming Events
                  </h4>
                </div>
                <div class="p-0 card-body">
                  <div class="table-responsive">
                    <table class="table table-spacing mb-0">
                      <tbody>
                        <ListUp
                          date={"30 JUN, TUE"}
                          event={"Big Billion Day Sale"}
                        />
                        <ListUp
                          date={"09 JULY, MON"}
                          event={"5% Off on Mobile"}
                        />
                        <ListUp
                          date={"15 AUG, SUN"}
                          event={"Electronics Sale"}
                        />
                        <ListUp
                          date={"26 OCT, THU"}
                          event={"Fashionable Sale"}
                        />
                        <ListUp
                          date={"25 DEC, FRI"}
                          event={"5% Off on Cloths"}
                        />
                      </tbody>
                    </table>
                  </div>
                  <div class="d-flex justify-content-end align-items-center border-top-table p-3">
                    <button class="btn btn-secondary btn-sm">See All</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4 class="font-weight-bold mb-3">Popular Categories</h4>
                  <PieCharta aspect={1.2/1} />
                  <div class="d-flex justify-content-around align-items-center">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#ffbb33"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          fill="#ffbb33"
                        ></rect>
                      </svg>
                      <span>Mobile</span>
                    </div>
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#e60000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          fill="#e60000"
                        ></rect>
                      </svg>
                      <span>Laptop</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-around align-items-center mt-3">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="primary"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          fill="#04237D"
                        ></rect>
                      </svg>
                      <span>Electronics</span>
                    </div>
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="primary"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          fill="#8080ff"
                        ></rect>
                      </svg>
                      <span>Others</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NewCustomer />
          </div>
        </div>
      </div>
    </div>
  );
};
