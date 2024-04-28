import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TiMediaRecord } from "react-icons/ti";
import { hope } from "../assets/Images";
import { Table, TableColumnProps } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
function HistoryTable({ view, search }) {
  const currentItems = view?.data?.filter((u) => {
    if (!search?.length) return u;
    else if (
      Object.values(u).some((value) =>
        value?.toString()?.toLowerCase()?.includes(search)
      )
    ) {
      return u;
    }
  });

  const columns = [
    {
      title: "GAME REF",
      dataIndex: "gameRef",
    },
    {
      title: "CHANEEL",
      dataIndex: "channel",
    },
    {
      title: "PARTCIPANT PHONE",
      dataIndex: "partcipantPhone",
    },
    {
      title: "PARTICIPANT NAME",
      dataIndex: "participantName",
    },
    {
      title: "	NUMBER OF ENTRIES",
      dataIndex: "numerOfEntries",
    },
    {
      title: "STATUS CODE",
      dataIndex: "statusCode",
    },
    {
      title: "STATUS",
      dataIndex: "status",
    },
  ];

  return (
    <Head>
      <div className="tablecontent">
        <Table
          columns={columns}
          data={currentItems}
          onChange={(pagination, changedSorter) => {
            console.log(changedSorter);
          }}
          scroll={{
            x: 1600,
            y: 400,
          }}
        />
        {/* <div className="gridoutside">
          <table className="table">
            <thead>
              <tr>
                <th>GAME REF</th>
                <th>PARTICIPANT PHONE </th>
                <th>PARTICIPANT NAME </th>
                <th>NUMBER OF ENTRIES </th>
                <th>STATUS CODE </th>
                <th>STATUS </th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((v, index) => {
                return (
                  <tr key={index}>
                    <td>{v?.gameRef}</td>

                    <td>{v?.partcipantPhone}</td>
                    <td>{v?.participantName}</td>
                    <td>{v?.numerOfEntries}</td>
                    <td>{v?.statusCode}</td>

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
                        <TiMediaRecord /> {v?.status}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
        {/* <div className="row">
          <span>Showing 1-5 of entries</span>
          <div className="pagins">
            <p>Rows per page:</p>
            <select>
              <option>{totalPages}</option>
            </select>
            <div
              className="arrow"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <button>
                <AiOutlineLeft />
              </button>
              <button>{currentPage}</button>
              <button onClick={nextPage} disabled={currentPage === totalPages}>
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </Head>
  );
}

export default HistoryTable;
const Head = styled.div`
  .tablecontent {
    background-color: white;
    margin: 20px;
    padding-top: 20px;
    border-radius: 20px;
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
    font-weight: 600;
    text-align: left;
    font-size: 11px;
    padding: 15px;
    color: #687182;
    background-color: #f9fafb;
  }

  .table tr:nth-child(even) {
    background-color: #f9fafb;
  }

  .table td {
    padding: 18px;
    font-weight: 500;
    font-size: 11px;
    text-transform: uppercase;
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
