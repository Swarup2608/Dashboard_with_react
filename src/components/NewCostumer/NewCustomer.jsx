import React from "react";
import user1 from "../../assets/user1.jpg";
import { NewList } from "../NewList/NewList";

export const NewCustomer = () => {
  return (
    <div class="col-lg-8 col-md-12">
      <div class="card">
        <div class="d-flex justify-content-between card-header">
          <div class="header-title">
            <h4 class="card-title">New Customer</h4>
          </div>
        </div>
        <div class="p-0 card-body">
          <div class="table-responsive">
            <table class="table mb-0">
              <thead class="table-color-heading">
                <tr class="text-secondary">
                  <th scope="col">Date</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Status</th>
                  <th scope="col" class="text-right">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <NewList img={user1} date={'01 Jun 2020'} name={'Maggie Potts'} cost={104.98} color={'Completed'}/>
                <NewList img={user1} date={'02 Jun 2020'} name={'Kevin Adkins'} cost={233.00} color={'Completed'}/>
                <NewList img={user1} date={'05 Jun 2020'} name={'Max Lynn'} cost={150.00} color={'Pending'}/>
                <NewList img={user1} date={'06 Jun 2020'} name={'Danniw Yatt'} cost={200.23 } color={'Cancelled'}/>
              </tbody>
            </table>
            <div class="d-flex justify-content-end align-items-center border-top-table p-3">
              <button class="btn btn-secondary btn-sm">See All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
