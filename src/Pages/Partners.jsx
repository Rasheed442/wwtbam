import React, { useState } from "react";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import TopHeader from "../Components/TopHeader";
import ButtonLayout from "../Layouts/ButtonLayout";
import styled from "styled-components";
import PartnersTable from "../TableComponents/PartnersTable";
import AddNewPartner from "../Components/AddNewPartner";
import PartnersDetails from "../Components/PartnersDetails";

function Partners() {
  const [addPartner, setAddPartner] = useState(false);
  const [ViewPartnerDetails, setViewPartnerDetails] = useState(false);
  return (
    <Partner>
      {addPartner && <AddNewPartner close={setAddPartner} />}
      <DashBoardLayout>
        <TopHeader title="Game History" />
        {ViewPartnerDetails && (
          <PartnersDetails close={setViewPartnerDetails} />
        )}
        {ViewPartnerDetails ? (
          ""
        ) : (
          <div className="overview">
            <div>
              <h2>Partners</h2>
              <span>This page allows you to manage all history</span>
            </div>
            <ButtonLayout
              placeholder="New Partner"
              onClick={() => setAddPartner(true)}
            />
          </div>
        )}
        {ViewPartnerDetails ? (
          ""
        ) : (
          <div className="white">
            <div className="contain">
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
            <PartnersTable view={setViewPartnerDetails} />
          </div>
        )}
      </DashBoardLayout>
    </Partner>
  );
}

export default Partners;
const Partner = styled.div`
  background-color: #f6f6f6;

  .overview {
    padding: 100px 20px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    margin: 20px;
    background-color: white;
    height: 100%;
    border-radius: 20px;
  }
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
  .contain {
    padding: 30px 20px 20px 20px;
  }
`;
