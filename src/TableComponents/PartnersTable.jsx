import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { TiArrowUnsorted, TiMediaRecord } from "react-icons/ti";
import { hope, opay } from "../assets/Images";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function PartnersTable({ view, search }) {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const [loading, setLoading] = useState(false);

  const [myData, setData] = useState();
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = myData?.slice(firstIndex, lastIndex); /// this is what you are mapping to the table
  const npage = Math?.ceil(myData?.length / recordPerPage);
  const numbers = Array.from(
    { length: npage > 0 ? npage : 1 },
    (_, i) => i + 1
  );
  // pagination state

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    setLoading(true);

    fetch("https://api.blkhut.com/wwtbam_v2//getpartners", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setData(result?.data);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);
  console.log(myData);
  return (
    <Head>
      {loading && <Skeleton count={5} width="" height="10vh" />}
      {loading ? (
        ""
      ) : (
        <div className="tablecontent">
          <div className="gridoutside">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    ACTION
                    <TiArrowUnsorted />
                  </th>
                  <th>PARTNER ID</th>
                  <th>PARTNER </th>
                  <th>USERNAME</th>
                  <th>DATE / TIME</th>
                  <th>SECTOR</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {records?.map((u) => {
                  return (
                    <tr>
                      <td
                        style={{ color: "#417CD4" }}
                        onClick={() => {
                          view(true);
                          localStorage.setItem(
                            "PartnerUserId",
                            JSON.stringify(u)
                          );
                        }}
                      >
                        View Details
                      </td>
                      <td>{u?.userId}</td>
                      <td
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={u.partnerLogo}
                          style={{ borderRadius: "50%" }}
                          width={30}
                          height={30}
                        />
                        <p>{u?.companyName}</p>
                      </td>
                      <td>{u?.username}</td>
                      <td>
                        {u?.dateCreated.toString().slice(0, 10)} /{" "}
                        {u?.dateCreated.toString().slice(11, 16)}
                      </td>
                      <td>{u?.sector}</td>
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
                          <TiMediaRecord /> {u.status}
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {/* <tr>
                <td style={{ color: "#417CD4" }}>View Details</td>
                <td>TX6352822</td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={opay} width={40} height={40} />
                  <p>HopePSBank</p>
                </td>
                <td>₦909272.00</td>
                <td>29/02/2023, 09:11:04</td>
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
                    <TiMediaRecord /> Successful
                  </div>
                </td>
              </tr> */}
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
                <button onClick={prevPage}>
                  <AiOutlineLeft />
                </button>
                <button>{currentPage}</button>
                <button onClick={NxtPage}>
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Head>
  );
  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function NxtPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default PartnersTable;
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
