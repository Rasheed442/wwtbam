import React from "react";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import TopHeader from "../Components/TopHeader";
import styled from "styled-components";
import LabelinputLayout from "../Layouts/LabelinputLayout";
import { AiOutlineDown } from "react-icons/ai";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import HistoryTable from "../TableComponents/HistoryTable";

function PartnerHistory() {
  return (
    <Hist>
      <DashBoardLayout>
        <TopHeader title="Game History" />
        <div className="overview">
          <h2>Game History</h2>
          <span>
            This overview provides a comprehensive snapshot of transactions on
            your system
          </span>
        </div>
        <div className="white">
          <div className="mylabels">
            {/* <LabelinputLayout
              label="Partner name"
              placeholder="Hope Bank"
              style={{ width: "20vw" }}
            /> */}
            <div className="datelabel">
              <label>Date Range</label>
              <DateRangePicker
                placeholder="Jan 7, 2023 - Jan 13, 2023"
                style={{ width: "80%" }}
              />
            </div>
            <div className="labels">
              <label>Games</label>
              <div className="select">
                <select>
                  <option>All</option>
                </select>
                <AiOutlineDown size={10} />
              </div>
            </div>
            <div className="labels">
              <label>Status</label>
              <div className="select">
                <select>
                  <option>All</option>
                </select>
                <AiOutlineDown size={10} />
              </div>
            </div>
          </div>

          <div className="btn">
            <button style={{ backgroundColor: "#38197A", color: "white" }}>
              Search
            </button>
            <button style={{ border: "1px solid gainsboro" }}>
              Export PDF
            </button>
          </div>
        </div>
        <div>
          <HistoryTable />
        </div>
      </DashBoardLayout>
    </Hist>
  );
}

export default PartnerHistory;
const Hist = styled.div`
  background-color: #f6f6f6;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 20px 0px;
    gap: 10px;
    border-top: 1px solid #eaecf0;
  }
  .btn button {
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    background-color: white;
  }
  .mylabels {
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    padding-right: 120px;
    padding-bottom: 20px;
  }
  .labels {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .datelabel {
    display: flex;
    width: 43%;
    flex-direction: column;
    gap: 5px;
  }
  .labels label {
    color: #344054;
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
  }
  .select {
    display: flex;
    align-items: center;
    border: 1px solid #d0d5dd;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    width: 20vw;
  }
  .select select {
    appearance: none;
    padding: 5px;
    line-height: 24px;
    width: 100%;
    padding: 5px;
    color: #667085;
    border: none;
    outline: none;
  }
  .overview {
    padding: 100px 0px 0px 20px;
  }
  .overview h2 {
    color: #090814;
    font-size: 29px;
    font-weight: 500;
    line-height: 43px;
  }
  .overview span {
    color: #848d87;
    letter-spacing: 0.5%;
    line-height: 20px;
    font-size: 12.5px;
    font-weight: 300;
  }
  .white {
    padding: 20px;
    margin: 20px;
    background-color: white;
    border-radius: 15px;
  }
`;
