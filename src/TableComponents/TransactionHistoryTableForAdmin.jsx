import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { TiArrowUnsorted, TiMediaRecord } from "react-icons/ti";
import { hope, opay } from "../assets/Images";
import { useNavigate } from "react-router-dom";
function TransactionHistoryTable() {
  const token = localStorage.getItem("token");
  const [mydata, setData] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      credentials: "include",
    };

    fetch(`${process.env.REACT_APP_BASE_URL}getgamehistory`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Head>
      <div className="tablecontent">
        <div className="content">
          <h1>Recent History</h1>
          <button onClick={() => navigate("/history")}>
            See All <AiOutlineArrowRight size={17} />
          </button>
        </div>
        <div className="gridoutside">
          <table className="table">
            <thead>
              <tr>
                <th>
                  GAME REF
                  <TiArrowUnsorted />
                </th>
                <th>CHANNEL</th>
                <th> PARTICIPANT NUMBER</th>
                <th>PARTICIPANT NAME</th>
                <th>NUMBER OF ENTRIES</th>

                <th>STATUS CODE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {mydata?.slice(0, 10)?.map((d) => {
                return (
                  <tr>
                    <td>{d?.gameRef}</td>
                    <td>{d?.channel}</td>
                    <td>{d?.partcipantPhone}</td>

                    <td>{d?.participantName}</td>

                    <td>{d?.numerOfEntries}</td>
                    <td>{d?.statusCode}</td>

                    <td>
                      <div
                        style={{
                          color: "#027A48",
                          backgroundColor: "#ECFDF3",

                          display: "flex",
                          alignItems: "center",
                          width: " 100%",
                          padding: "9px",
                          gap: "5px",
                          borderRadius: "10px",
                        }}
                      >
                        <TiMediaRecord /> {d?.status}
                      </div>
                    </td>
                  </tr>
                  // <tr>
                  //   <td>{d?.gameRef}</td>
                  //   <td
                  //     style={{
                  //       display: "flex",
                  //       alignItems: "center",
                  //       gap: "10px",
                  //     }}
                  //   >
                  //     <img src={hope} width={40} height={40} alt="" />
                  //     <p>HopePSBank</p>
                  //   </td>
                  //   <td>09127805458</td>

                  //   <td>Hot Seat</td>

                  //   <td>Who's the president of nigeria</td>
                  //   <td>A</td>
                  //   <td>4</td>

                  //   <td>30.00</td>

                  //   <td>29/02/2023, 09:11:04</td>
                  //   <td>
                  //     <div
                  //       style={{
                  //         color: "#027A48",
                  //         backgroundColor: "#ECFDF3",

                  //         display: "flex",
                  //         alignItems: "center",
                  //         width: " 100%",
                  //         padding: "9px",
                  //         gap: "5px",
                  //         borderRadius: "10px",
                  //       }}
                  //     >
                  //       <TiMediaRecord /> Successful
                  //     </div>
                  //   </td>
                  // </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="row">
          <span>Showing 1-{mydata?.length} of entries</span>
          {/* <div className="pagins">
            <p>Rows per page:</p>
            <select>
              <option>5</option>
            </select>
            <div className="arrow">
              <button
                onClick={() => {
                  // setSortDate(sortdate - 1);
                  // setEnd((prev) => prev - end);
                }}
              >
                <AiOutlineLeft />
              </button>
              <button>1</button>
              <button>
                <AiOutlineRight />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </Head>
  );
}

export default TransactionHistoryTable;
const Head = styled.div`
  .tablecontent {
    background-color: white;
    margin: 20px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .content h1 {
    font-weight: 500;
    font-size: 20px;
    color: #212121;
    line-height: 32px;
  }
  .content button {
    background-color: transparent;
    border: 1px solid gainsboro;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 7rem;
    height: 40px;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
  }
  .gridoutside {
    overflow: hidden;
    overflow-x: scroll;
  }
  .gridoutside::-webkit-scrollbar-thumb {
    background-color: #0000001a;
  }

  .gridoutside::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
  }

  .gridoutside::-webkit-scrollbar-track {
    display: none;
  }
  .table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100vw;
  }

  .table th {
    font-weight: 500;
    text-align: left;
    font-size: 12px;
    padding: 15px;
    color: #687182;
    background-color: #f9fafb;
  }

  /* .table tr:nth-child(odd) {
    background-color: #f6f6f6;
} */

  .table td {
    padding: 18px;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    border-top: 1px solid gainsboro;
    color: #5a6376;
    line-height: 20px;
    font-weight: 500;
  }
  .table span {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
  .row {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }

  .row span {
    font-size: 13px;
    color: #687182;
  }

  .pagins {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .pagins p {
    font-size: 14px;
    color: #687182;
  }

  .pagins select {
    width: 48px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    padding: 2px;
    border-radius: 3px;
  }

  .arrow {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .arrow button {
    width: 28.8px;
    height: 24px;
    background-color: transparent;
    border: 1px solid gainsboro;
    border-radius: 3px;
  }
`;
