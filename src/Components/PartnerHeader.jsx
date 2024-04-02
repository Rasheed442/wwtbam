import React from "react";
import { albert } from "../assets/Images";
// import { AiOutlineDown } from "react-icons";
import styled from "styled-components";
function PartnerHeader({ title, othertitle }) {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <Head>
      <div className="head">
        <div className="top">
          <p>
            <span>Pages&nbsp; </span>/ &nbsp;{title} / &nbsp;{othertitle}
          </p>
        </div>
        <div className="content">
          <div className="search">
            {/* <BsSearch size={22} /> */}
            {/* <Link href="/settings">
            <AiFillSetting
              size={35}
              style={{
                backgroundColor:
                  router.pathname === "/settings" ? "#5E5ADB" : "",
                color: router.pathname === "/settings" ? "white" : "gray",
                padding: "4px",
                borderRadius: "3px",
              }}
            />
          </Link> */}
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.80646 11.5116C5.80646 7.91532 8.57962 4.99997 12.0005 4.99997C15.4214 4.99997 18.1945 7.91532 18.1945 11.5116V14.3289C18.1945 15.4999 18.6833 16.6195 19.5468 17.4264C20.4956 18.3131 19.8571 19.8837 18.5477 19.8837H5.45324C4.14391 19.8837 3.50534 18.3131 4.45417 17.4264C5.31764 16.6195 5.80646 15.4999 5.80646 14.3289V11.5116Z"
                fill="#A1A9B8"
              />
              <path
                d="M11.9998 25.0001C13.6792 25.0001 15.0407 23.7209 15.0407 22.1429C15.0407 22.1162 15.0403 22.0895 15.0395 22.0629C15.0327 21.8324 14.82 21.6648 14.5747 21.6622L9.4371 21.6075C9.19176 21.6049 8.97505 21.7679 8.96282 21.9981C8.96027 22.0461 8.95898 22.0944 8.95898 22.1429C8.95898 23.7209 10.3204 25.0001 11.9998 25.0001Z"
                fill="#A1A9B8"
              />
              <g filter="url(#filter0_dd_85_222)">
                <ellipse cx="19" cy="7" rx="4" ry="4" fill="#E01919" />
              </g>
              <defs>
                <filter
                  id="filter0_dd_85_222"
                  x="12"
                  y="0"
                  width="14"
                  height="15.5"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="3"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_85_222"
                  />
                  <feOffset />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.968627 0 0 0 0 0.975163 0 0 0 0 0.988235 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_85_222"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1.5" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_85_222"
                    result="effect2_dropShadow_85_222"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_85_222"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="line"></div>
          <div className="profile">
            <img src={userDetails?.partnerLogo} width={35} height={35} alt="" />
            <div className="user">
              <p>
                {userDetails?.username} &nbsp; &nbsp;
                {/* <AiOutlineDown size={10} /> */}
              </p>
              <span>Partner</span>
            </div>
          </div>
        </div>
      </div>
    </Head>
  );
}

export default PartnerHeader;
const Head = styled.div`
  .head {
    background-color: white;
    padding: 0px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: -webkit-fill-available;
    z-index: 1;
    box-shadow: 0px 0px 10px 0px #0000001a;
  }
  .top {
    display: flex;
    gap: 15px;
    padding-left: 20px;
  }
  .top span {
    color: #999999;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: -2%;

    font-weight: 400;
  }
  .top p {
    line-height: 20px;
    font-size: 12px;
    letter-spacing: -2%;
    font-weight: 500;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 30px;
    color: gray;
  }
  .profile {
    display: flex;
    gap: 15px;
  }
  .profile img {
    border-radius: 50%;
  }
  .profile p {
    color: black;
  }
  .profile span {
    font-size: 13px;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .line {
    height: 70px;
    background-color: #eeebeb;
    width: 2px;
    /* margin-top: 20px;
        margin-bottom: 20px; */
  }

  .user p {
    color: #212121;
    line-height: 19px;
    font-size: 16px;
    font-weight: 500;
  }
  .user span {
    font-size: 12px;
    font-weight: 300;
  }
`;
