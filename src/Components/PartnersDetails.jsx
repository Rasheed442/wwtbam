import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { hope } from "../assets/Images";
import { RxPencil1 } from "react-icons/rx";
import { FiCopy } from "react-icons/fi";
import { TiMediaRecord } from "react-icons/ti";
import OverviewDetail from "./OverviewDetailAdminDash";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Axios from "axios";
import ApiKeys from "./ApiKeys";
import UpdateCommission from "./UpdateCommission";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";

function PartnersDetails({ close, update, refresh }) {
  const [overview, setOverView] = useState(true);
  const [commission, setCommission] = useState(false);
  const [apikeys, setApikeys] = useState(false);
  const [PartnerDetails, setData] = useState();
  const [loading, setLoading] = useState(false);
  // const [PartnerDetails, setPartnerDetails] = useState();

  const PartnerD = JSON.parse(localStorage.getItem("PartnerUserId"));
  const token = localStorage.getItem("token");
  // console.log(PartnerDetails);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = PartnerDetails?.partnerCommissions?.slice(
    firstIndex,
    lastIndex
  ); /// this is what you are mapping to the table
  const npage = Math?.ceil(
    PartnerDetails?.partnerCommissions?.length / recordPerPage
  );
  const numbers = Array.from(
    { length: npage > 0 ? npage : 1 },
    (_, i) => i + 1
  );
  // pagination state

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);
    // myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    setLoading(true);
    fetch(
      `https://api.blkhut.com/wwtbam_v2/getpartners/${PartnerD?.userId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setData(result?.data?.[0]);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [refresh]);

  // console.log(PartnersTrans);
  // const Dtdata = PartnersTrans.map((item) => Object.values(item));
  // const tableColumn = Object.values(Dtdata[0]);

  console.log(PartnerDetails);

  useEffect(() => {}, []);
  function HandleCopy1() {
    navigator.clipboard
      .writeText(PartnerDetails?.phone)
      .then(() => {
        toast.success("Copied");
      })
      .catch((error) => {
        toast.error("Copy failed: " + error);
      });
  }
  function HandleCopy2() {
    navigator.clipboard
      .writeText(PartnerDetails?.email)
      .then(() => {
        toast.success("Copied");
      })
      .catch((error) => {
        toast.error("Copy failed: " + error);
      });
  }
  function HandleCopy3() {
    navigator.clipboard
      .writeText(PartnerDetails?.address)
      .then(() => {
        toast.success("Copied");
      })
      .catch((error) => {
        toast.error("Copy failed: " + error);
      });
  }

  return (
    <div>
      <Partners>
        <div className="details">
          <div className="back" onClick={() => close(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12.2743L19.25 12.2743"
                stroke="#38197A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2993 18.2987L4.24932 12.2747L10.2993 6.24969"
                stroke="#38197A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Back to Partners</p>
          </div>
          <h2>Hope PS Bank</h2>
        </div>

        <div className="white">
          <div className="flex">
            <div className="hope">
              {loading ? (
                <Skeleton count={1} width="10vw" height="20vh" />
              ) : (
                <img src={PartnerDetails?.partnerLogo} />
              )}
              <div className="payment">
                <h2>{PartnerDetails?.companyName}</h2>

                <span>{PartnerDetails?.userId}</span>

                <div className="registration">
                  <p>Registration Date</p>
                  <h3>{PartnerDetails?.dateCreated}</h3>
                </div>
              </div>
            </div>
            {loading ? (
              <Skeleton count={1} width="10vw" height="7vh" />
            ) : (
              <div className="status">
                <p>
                  <TiMediaRecord />
                  {PartnerDetails?.status}
                </p>
              </div>
            )}
            <div className="line"></div>
            <div className="space">
              <div className="mobile">
                <div className="number">
                  <span>Mobile Number</span>
                  {loading ? (
                    <Skeleton count={1} width="10vw" height="2vh" />
                  ) : (
                    <p>{PartnerDetails?.phone}</p>
                  )}
                </div>
                <div className="edit">
                  <RxPencil1 size={22} />
                  <FiCopy size={18} onClick={HandleCopy1} />
                </div>
              </div>
              <div className="mobile">
                <div className="number">
                  <span>Email Address</span>
                  {loading ? (
                    <Skeleton count={1} width="10vw" height="2vh" />
                  ) : (
                    <p>{PartnerDetails?.email}</p>
                  )}
                </div>
                <div className="edit">
                  <RxPencil1 size={22} />
                  <FiCopy size={18} onClick={HandleCopy2} />
                </div>
              </div>
              <div className="mobile">
                <div className="number">
                  <span>Address</span>
                  {loading ? (
                    <Skeleton count={1} width="10vw" height="2vh" />
                  ) : (
                    <p>{PartnerDetails?.address}</p>
                  )}
                </div>
                <div className="edit">
                  <RxPencil1 size={22} />
                  <FiCopy size={18} onClick={HandleCopy3} />
                </div>
              </div>
            </div>
          </div>

          <div className="over">
            <span
              style={{
                color: overview ? "#38197A" : "",
                borderBottom: overview ? "2px solid #38197A" : "",
              }}
              onClick={() => {
                setOverView(true);
                setCommission(false);
                setApikeys(false);
              }}
            >
              Overview
            </span>
            <span
              style={{
                color: commission ? "#38197A" : "",
                borderBottom: commission ? "2px solid #38197A" : "",
              }}
              onClick={() => {
                setOverView(false);
                setCommission(true);
                setApikeys(false);
              }}
            >
              Commissions
            </span>
            <span
              style={{
                color: apikeys ? "#38197A" : "",
                borderBottom: apikeys ? "2px solid #38197A" : "",
              }}
              onClick={() => {
                setOverView(false);
                setCommission(false);
                setApikeys(true);
              }}
            >
              Api Keys
            </span>
          </div>

          {overview && <OverviewDetail />}
          {apikeys && <ApiKeys />}
          {commission && (
            <Comit>
              <div className="head">
                <h2>Commissions</h2>
                <div className="searchh">
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
                  <input type="text" placeholder="Search" />
                </div>
              </div>

              {/* for table component */}
              <div className="tablecontent">
                <div className="gridoutside">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ACTIONS</th>
                        <th>COMMISSION </th>
                        <th>PRICE </th>
                        <th>GAME DESCRIPTION </th>
                        <th>STATUS </th>
                        <th> </th>
                      </tr>
                    </thead>
                    {loading ? (
                      <Skeleton count={1} width="100vw" height="10vh" />
                    ) : (
                      <tbody>
                        {records?.map((p) => {
                          return (
                            <tr>
                              <td
                                style={{ color: "#417CD4" }}
                                onClick={() => {
                                  localStorage.setItem("commissionId", p?.id);
                                  update(true);
                                }}
                              >
                                Update Commission
                              </td>
                              <td>{p?.game?.name}</td>
                              <td>{p?.commission}</td>
                              <td>{p?.game?.price}</td>
                              <td>
                                {
                                  p?.game?.gameQuestionSelectionType
                                    ?.description
                                }
                              </td>
                              <td>
                                <div className="statuss">
                                  <TiMediaRecord size={16} />
                                  {p?.game?.status}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    )}
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
            </Comit>
          )}
        </div>
      </Partners>
    </div>
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

export default PartnersDetails;
const Partners = styled.div`
  .banks {
    display: flex;
    gap: 10px;
    padding: 40px 20px 30px 20px;
  }
  .overtime {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px 0px 20px;
  }
  .content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .content p {
    color: #464f60;
    line-height: 19px;
    font-size: 12px;
    font-weight: 300;
  }
  .line2 {
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  .statuss {
    background-color: #ecfdf3;
    color: #027a48;
    padding: 10px;
    border-radius: 10px;
    width: 50%;
    border: 1px solid green;
    display: flex;
    gap: 6px;
    align-items: center;
    /* position: absolute; */
    /* left: 370px; */
    /* bottom: 130px; */
  }
  .start {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 20px 0px 20px;
  }
  .start h2 {
    color: #101828;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
  }
  .grids {
    padding: 0px 20px 20px 0px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .revenue {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .revenue p {
    color: #333b4a;
    line-height: 32px;
    font-size: 24px;
    font-weight: 600;
  }
  .revenue span {
    color: #667085;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
  .gamesplayed {
    padding: 15px 15px 15px 15px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #eaecf0;
    box-shadow: 0px 0px 10px 0px #eaecf0;
    border-radius: 10px;
    width: 25%;
  }
  .statistics {
    display: flex;
    padding: 20px 20px 0px 20px;
    justify-content: space-between;
  }
  .statistics p {
    font-size: 21px;
    font-weight: 500;
  }
  .months {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #d0d5dd;
    border-radius: 5px;
  }
  .months span {
    padding: 6px;
    font-weight: 600;
    font-size: 13px;
  }
  .months > * {
    border-right: 1px solid #d0d5dd;
  }

  .months > :last-child {
    border-right: none;
  }
  .over {
    padding: 35px 20px 0px 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    border-bottom: 2px solid #eaecf0;
  }
  .over span {
    color: #667085;
    padding: 0px 0px 10px 0px;
  }
  .edit {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .white {
    background-color: white;
    /* padding: 20px; */
  }
  .status {
    background-color: #ecfdf3;
    color: #027a48;
    padding: 10px;
    border-radius: 10px;
    margin-left: 160px;
    /* position: absolute; */
    /* left: 370px; */
    /* bottom: 130px; */
  }
  .status p {
    display: flex;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    font-weight: 400;
    align-items: center;
  }
  .space {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .number {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 120px;
  }
  .number p {
    color: #333b4a;
    letter-spacing: 1%;
    line-height: 21px;
    font-size: 16px;
    font-weight: 500;
  }
  .number span {
    color: #909090;
    line-height: 19px;
    font-size: 14px;
    font-weight: 300;
  }
  .details {
    padding: 100px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .details h2 {
    color: #090814;
    line-height: 32px;
    font-size: 19px;
    font-weight: 500;
  }
  .mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex {
    display: flex;
    align-items: flex-start;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid #eaecf0;
    padding: 20px;
    padding-bottom: 40px;
  }
  /* .flex > * {
    border-right: 1px solid #d0d5dd;
  }

  .flex > :last-child {
    border-right: none;
  } */
  .line {
    height: 190px;
    width: 2px;
    background-color: #eaecf0;
    border-radius: 10px;
  }
  .registration {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .registration p {
    color: #909090;
    line-height: 19px;
    letter-spacing: 1%;
    font-size: 13px;
    font-weight: 400;
  }
  .registration h3 {
    color: #333b4a;
    letter-spacing: 1%;
    line-height: 21px;
    font-size: 15px;
    font-weight: 300;
  }
  .back {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  .back p {
    color: #38197a;
    line-height: 19px;
    font-size: 14px;
    font-weight: 500;
  }
  .hope {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .hope img {
    width: 130px;
  }
  .payment {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .payment h2 {
    color: #333b4a;
    line-height: 32px;
    letter-spacing: 1%;
    font-weight: 500;
    font-size: 20px;
  }
  .payment span {
    background-color: #e9edf5;
    color: #5a6376;
    line-height: 20px;
    font-size: 14px;
    width: 64%;
    font-weight: 400;
    padding: 6px;
    border-radius: 10px;
  }
`;
const Comit = styled.div`
  .head {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 40px 20px 20px 20px;
  }
  .head h2 {
    font-size: 22px;
    line-height: 32px;
    color: #090814;
    font-weight: 400;
  }

  /* for table */

  .tablecontent {
    background-color: white;
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
