import React, { useEffect, useState } from "react";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import TopHeader from "../Components/TopHeader";
import styled from "styled-components";
import LabelinputLayout from "../Layouts/LabelinputLayout";
import { AiOutlineDown } from "react-icons/ai";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import HistoryTable from "../TableComponents/HistoryTable";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Aos from "aos";
import "aos/dist/aos.css";

import Axios from "axios";
function AdminHistory() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState();
  const [partnername, setPartnerName] = useState();
  const [endDate, setEndDate] = useState();
  const [games, setGames] = useState();
  const [search, setSearch] = useState();

  const [gameID, setGamesID] = useState();

  const [gameData, setGameData] = useState();
  const [partnerID, setPartnerID] = useState();
  const [gameEntries, setGameEntries] = useState();
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);
    // console.log(partnerID);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    fetch(
      `${process.env.REACT_APP_BASE_URL}${
        startDate || partnerID || gameID ? "" : `getgamehistory`
      }${partnerID ? `getgamehistory/${partnerID}` : ""}${
        startDate
          ? `getgamehistorybydate?startDate=${startDate}&endDate=${endDate}`
          : ""
      }${gameID ? `getgamehistory?gameId=${gameID}` : ""}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result?.data);
        setGameData(result);
      })
      .catch((error) => console.log(error));
  }, [startDate, partnerID, gameID]);

  // ENDPOINT TO GET PARTNER NAME
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_BASE_URL}getpartners`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setPartnerName(result?.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    //  ENDPOINT TO GET GAME ID
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_BASE_URL}getallgames`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setGames(result?.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // DOWNLOADING GAME HISTORY AS CSV

  const dataArray = gameData?.data ? [...gameData.data] : [];

  const convertToCSV = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return "";
    }
    const header = Object.keys(arr[0]).join(",");
    const rows = arr.map((item) => Object.values(item).join(","));
    return [header, ...rows].join("\n");
  };

  const downloadCSV = () => {
    const csvContent = convertToCSV(dataArray);
    if (!csvContent) {
      console.error("No data to download");
      return;
    }
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Report Download";
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    const data = dataArray.map((item) => Object.values(item));

    const tableColumn = Object.keys(dataArray[0]);
    const tableRows = [];

    data.forEach((row) => {
      const rowData = [];
      row.forEach((element) => {
        rowData.push(element.toString());
      });
      tableRows.push(rowData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("report.pdf");
  };
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
                <select
                  onChange={(e) => {
                    alert(e.target.value);
                    setPartnerID(e.target.value);
                    setGamesID("");
                  }}
                >
                  <option>All</option>
                  {partnername?.map((p) => {
                    return <option value={p?.userId}>{p?.companyName}</option>;
                  })}
                </select>
                <AiOutlineDown size={10} />
              </div>
            </div>
            <div className="labels">
              <label>Games</label>
              <div className="select">
                <select
                  onChange={(e) => {
                    setPartnerID("");
                    alert(e.target.value);
                    setGamesID(e.target.value);
                  }}
                >
                  <option>All</option>
                  {games?.map((g) => {
                    return <option value={g?.id}>{g?.name}</option>;
                  })}
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
                  if (value && value[0] && value[1]) {
                    setStartDate(value[0]?.toISOString()?.slice(0, 10));
                    setEndDate(value[1]?.toISOString()?.slice(0, 10));
                  } else {
                    setStartDate("");
                    setEndDate("");
                  }
                }}
                placeholder="Jan 7, 2023 - Jan 13, 2023"
              />
            </div>
          </div>
          <div className="btn">
            {show && (
              <div className="searchh" data-aos="slide-right">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            )}

            <button
              style={{ backgroundColor: "#38197A", color: "white" }}
              onClick={() => setShow(!show)}
            >
              Search
            </button>
            <button
              style={{ border: "1px solid gainsboro" }}
              onClick={downloadCSV}
            >
              Export AS CSV
            </button>
            <button
              style={{ border: "1px solid gainsboro" }}
              onClick={downloadPDF}
            >
              Export AS PDF
            </button>
          </div>
        </div>
        <div>
          <HistoryTable view={gameData} search={search} />
        </div>
      </DashBoardLayout>
    </Hist>
  );
}

export default AdminHistory;
const Hist = styled.div`
  background-color: #f6f6f6;
  .searchh {
    display: flex;
    align-items: center;
    border: 1px solid #d0d5dd;
    border-radius: 8px;
    width: 25vw;
    padding-left: 10px;
  }
  .searchh input {
    border: none;
    outline: none;
    width: 24vw;
    border-radius: 8px;
    padding: 10px 2px 10px 5px;
    color: #667085;
  }
  .searchh ::placeholder {
    color: #667085;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
  }
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
