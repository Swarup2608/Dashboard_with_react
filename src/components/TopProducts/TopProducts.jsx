import React from "react";
import one from "../../assets/1.jpg"
import two from "../../assets/2.jpg"
import three from "../../assets/3.jpg"
import four from "../../assets/4.jpg"
import { ListTop } from "../ListTop/ListTop";
import "./TopProduct.css"

export const TopProducts = () => {
  return (
    <div className="card-block card-stretch card-height card">
      <div className="card-header-border d-flex justify-content-between card-header">
        <div className="header-title">
          <h4 className="card-title">Top Selling Products</h4>
        </div>
      </div>
      <div className="card-body-list">
        <ul className="list-style-3 mb-0">
            <ListTop img={one} title={'Rockerz Bluetooth Headset'} cost={'1,056'} />
            <ListTop img={two} title={'Wifi Security Camera'} cost={'1,799'} />
            <ListTop img={three} title={'Stone Bluetooth Speaker'} cost={'1,099'} />
            <ListTop img={four} title={'Ryzen 5 Hexa Core 5600H'} cost={'9,999'} />
        </ul>
      </div>
    </div>
  );
};
