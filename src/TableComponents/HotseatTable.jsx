import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TiMediaRecord } from "react-icons/ti";

import { TiArrowUnsorted } from "react-icons/ti";
function HotseatTable({ viewGames, table }) {
  return (
    <Head>
      {table === "Partner" && (
        <div className="tablecontent">
          <div className="gridoutside">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    ACTION
                    <TiArrowUnsorted />
                  </th>
                  <th>QUESTION</th>
                  <th>CORRECT ANSWER </th>
                  <th>DURATION</th>

                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{ color: "#417CD4" }}
                    // onClick={() => viewGames(true)}
                  >
                    View Details
                  </td>
                  <td>who's the president of nigeria</td>
                  <td>A</td>
                  <td>2 days</td>
                  <td>29/02/2023, 09:11:04</td>
                </tr>
                <tr>
                  <td style={{ color: "#417CD4" }}>View Details</td>
                  <td>who's the president of nigeria</td>
                  <td>A</td>
                  <td>2 days</td>
                  <td>29/02/2023, 09:11:04</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <span>Showing 1-5 of entries</span>
            <div className="pagins">
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
            </div>
          </div>
        </div>
      )}
      {table === "admin" && (
        <div className="tablecontent">
          <div className="gridoutside">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    ACTION
                    <TiArrowUnsorted />
                  </th>
                  <th>QUESTION</th>
                  <th>CORRECT ANSWER </th>
                  <th>DURATION</th>

                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: "#417CD4" }}>View Details</td>
                  <td>who's the president of nigeria</td>
                  <td>A</td>
                  <td>2 days</td>
                  <td>29/02/2023, 09:11:04</td>
                </tr>
                <tr>
                  <td style={{ color: "#417CD4" }}>View Details</td>
                  <td>who's the president of nigeria</td>
                  <td>A</td>
                  <td>2 days</td>
                  <td>29/02/2023, 09:11:04</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <span>Showing 1-5 of entries</span>
            <div className="pagins">
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
            </div>
          </div>
        </div>
      )}
    </Head>
  );
}

export default HotseatTable;
const Head = styled.div`
  .tablecontent {
    background-color: white;
    margin: 20px 0px 0px 0px;
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
    width: 100%;
  }

  .table th {
    font-weight: 600;
    text-align: left;
    font-size: 11px;
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
    font-size: 11px;
    border-top: 1px solid gainsboro;
    color: #5a6376;
    line-height: 20px;
    cursor: pointer;
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
