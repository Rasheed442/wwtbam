import React, { useEffect, useState } from "react";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import TopHeader from "../Components/TopHeader";
import styled from "styled-components";
import LabelinputLayout from "../Layouts/LabelinputLayout";
import { AiOutlineDown } from "react-icons/ai";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import HistoryTable from "../TableComponents/HistoryTable";
import Axios from "axios";
function AdminHistory() {
  const token = localStorage.getItem("token");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  // useEffect(() => {
  //   const fecther = async () => {
  //     const myHeaders = new Headers();
  //     // myHeaders.append("x-session-id", "4F048581D04ACBD155CA5A159EB9D22E");

  //     const requestOptions = {
  //       method: "GET",
  //       headers: myHeaders,
  //       redirect: "follow",
  //     };

  //     fetch("https://api.blkhut.com/wwtbam_v2/getgamehistory", requestOptions)
  //       .then((response) => response.text())
  //       .then((result) => console.log(result))
  //       .catch((error) => console.error(error));
  //   };
  //   fecther();
  // }, []);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_BASE_URL}${startDate ? "" : `getgamehistory`}${
        startDate
          ? `getgamehistorybydate?startDate=${startDate}&endDate=${endDate}`
          : ""
      }`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }, [startDate]);

  // const handleDateRangeChange = (value) => {
  //   setSelectedDateRange(value);
  //   const headers = {
  //     "x-session-id": `${token}`,
  //   };

  //   if (value && value[0] && value[1]) {
  //     const firstDate = value[0].toISOString().slice(0, 10);
  //     const secondDate = value[1].toISOString().slice(0, 10);
  //     console.log("dates:", firstDate, secondDate);
  //     Axios.get(
  //       `${process.env.REACT_APP_BASE_URL}getgamehistorybydate?startDate=${firstDate}&endDate=${secondDate}`,
  //       headers
  //     )
  //       .then((response) => {
  //         console.log(response?.data);
  //       })
  //       .catch((error) => console.error(error));
  //   }
  // };

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
            <div className="labels">
              <label>Partner name</label>
              <div className="select">
                <select>
                  <option>All</option>
                  <option>HopePSBank</option>
                  <option>FCMB</option>
                </select>
                <AiOutlineDown size={10} />
              </div>
            </div>
            <div className="labels">
              <label>Games</label>
              <div className="select">
                <select>
                  <option>All</option>
                  <option>Hot Seat</option>
                  <option>Audience Play</option>
                  <option>Home</option>
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
            <div className="datelabel">
              <label>Date Range</label>
              <DateRangePicker
                onChange={(value) => {
                  setStartDate(value[0]?.toISOString()?.slice(0, 10));
                  setEndDate(value[1]?.toISOString()?.slice(0, 10));
                }}
                placeholder="Jan 7, 2023 - Jan 13, 2023"
                // onChange={handleDateRangeChange}
              />
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

export default AdminHistory;
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
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
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
