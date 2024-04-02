import React, { useState } from "react";
import styled from "styled-components";
import { hope } from "../assets/Images";
import { RxPencil1 } from "react-icons/rx";
import { FiCopy } from "react-icons/fi";
import { TiMediaRecord } from "react-icons/ti";
// import OverviewDetail from "./OverviewDetail";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import OverviewDetailPartnerDash from "../Components/OverviewDetailPartnerDash";
import ApiKeysPartnerDash from "../Components/ApiKeysPartnerDash";
import TransactionHistoryTablePartners from "../TableComponents/TransactionHistoryTablePartners";
import PartnerHeader from "../Components/PartnerHeader";
import toast from "react-hot-toast";

// import ApiKeys from "./ApiKeys";

function PartnersDashboard({ close, update }) {
  const [overview, setOverView] = useState(true);
  const [commission, setCommission] = useState(false);
  const [apikeys, setApikeys] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  function HandleCopy() {
    navigator.clipboard
      .writeText(userDetails?.phone)
      .then(() => {
        toast.success("Copied");
      })
      .catch((error) => {
        toast.error("Copy failed: " + error);
      });
  }
  function HandleCopy2() {
    navigator.clipboard
      .writeText(userDetails?.email)
      .then(() => {
        toast.success("Copied");
      })
      .catch((error) => {
        toast.error("Copy failed: " + error);
      });
  }
  function HandleCopy3() {
    navigator.clipboard
      .writeText(userDetails?.address)
      .then(() => {
        toast.success("Copied");
      })
      .catch((error) => {
        toast.error("Copy failed: " + error);
      });
  }

  return (
    <DashBoardLayout>
      <PartnerHeader title="Partners Dashboard" />
      <Partners>
        <div className="white">
          <div className="flex">
            <div className="hope">
              <img src={userDetails?.partnerLogo} />
              <div className="payment">
                <h2>{userDetails?.companyName}</h2>
                <span>{userDetails?.clientKeys?.clientId}</span>
                <div className="registration">
                  <p>Registration Date</p>
                  <h3>{userDetails?.dateCreated}</h3>
                </div>
              </div>
            </div>
            <div className="status">
              <p>
                <TiMediaRecord />
                {userDetails?.status}
              </p>
            </div>
            <div className="line"></div>
            <div className="space">
              <div className="mobile">
                <div className="number">
                  <span>Mobile Number</span>
                  <p>{userDetails?.phone}</p>
                </div>
                <div className="edit">
                  <RxPencil1 size={22} />
                  <FiCopy size={18} onClick={HandleCopy} />
                </div>
              </div>
              <div className="mobile">
                <div className="number">
                  <span>Email Address</span>
                  <p>{userDetails?.email}</p>
                </div>
                <div className="edit">
                  <RxPencil1 size={22} />
                  <FiCopy size={18} onClick={HandleCopy2} />
                </div>
              </div>
              <div className="mobile">
                <div className="number">
                  <span>Address</span>
                  <p>
                    {userDetails?.address === ""
                      ? "-----------"
                      : userDetails?.address}
                  </p>
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

          {overview && <OverviewDetailPartnerDash />}
          {apikeys && <ApiKeysPartnerDash />}
          {commission && (
            <Comitt>
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
                      </tr>
                    </thead>
                    <tbody>
                      {userDetails?.partnerCommissions.map((p) => {
                        return (
                          <tr>
                            <td>{p?.game?.name}</td>
                            <td>{p?.commission}</td>
                            <td>{p?.game?.price}</td>
                            <td>
                              {p?.game?.gameQuestionSelectionType?.description}
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
            </Comitt>
          )}
        </div>
      </Partners>
    </DashBoardLayout>
  );
}

export default PartnersDashboard;
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
    padding-top: 120px;
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
    width: 100%;
    text-align: center;
    font-weight: 400;
    padding: 6px;
    border-radius: 10px;
  }
`;
const Comitt = styled.div`
  .searchh input {
    border: none;
    width: 100%;
    outline: none;
    background-color: transparent;
    padding: 5px;
  }
  .searchh {
    display: flex;
    border-radius: 6px;
    padding-left: 10px;
    align-items: center;
    gap: 2px;

    border: 1px solid gainsboro;
    width: 25vw;
  }
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
