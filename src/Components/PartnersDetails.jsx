import React from "react";
import styled from "styled-components";
import { hope } from "../assets/Images";
import { RxPencil1 } from "react-icons/rx";
import { FiCopy } from "react-icons/fi";
import { TiMediaRecord } from "react-icons/ti";

function PartnersDetails({ close }) {
  return (
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
            <img src={hope} />
            <div className="payment">
              <h2>
                Hope Payment
                <br />
                Service Bank ltd
              </h2>
              <span>TX24252424</span>
              <div className="registration">
                <p>Registration Date</p>
                <h3>23-09-2023 16:19:05</h3>
              </div>
            </div>
            <div className="status">
              <p>
                <TiMediaRecord />
                active
              </p>
            </div>
          </div>
          {/* <div className="line"></div> */}
          <div className="space">
            <div className="mobile">
              <div className="number">
                <span>Mobile Number</span>
                <p>+234 (0) 901 785 6291</p>
              </div>
              <div>
                <RxPencil1 size={15} />
                <FiCopy size={15} />
              </div>
            </div>
            <div className="mobile">
              <div className="number">
                <span>Email Address</span>
                <p>Customercare@hopepsbank.com</p>
              </div>
              <div>
                <RxPencil1 size={15} />
                <FiCopy size={15} />
              </div>
            </div>
            <div className="mobile">
              <div className="number">
                <span>Address</span>
                <p>
                  1, idowu Taylor street, Victoia Island,
                  <br />
                  Lagos.
                </p>
              </div>
              <div>
                <RxPencil1 size={15} />
                <FiCopy size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Partners>
  );
}

export default PartnersDetails;
const Partners = styled.div`
  .white {
    background-color: white;
    padding: 20px;
  }
  .status {
    background-color: #ecfdf3;
    color: #027a48;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    left: 470px;
    bottom: 130px;
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
    align-items: center;
    position: relative;
    justify-content: space-around;
  }
  .line {
    height: 170px;
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
    gap: 5px;
  }
  .payment h2 {
    color: #333b4a;
    line-height: 32px;
    letter-spacing: 1%;
    font-weight: 300;
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
