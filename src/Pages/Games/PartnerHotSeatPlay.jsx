import React, { useState } from "react";
import DashBoardLayout from "../../Layouts/DashBoardLayout";
import TopHeader from "../../Components/TopHeader";
import styled from "styled-components";
import ButtonLayout from "../../Layouts/ButtonLayout";
import HotseatTable from "../../TableComponents/HotseatTable";
import AddNewGame from "../../Components/AddNewGame";
import AddNewGameForPartner from "../../Components/AddNewGameForPartner";
import ViewGamesDetailsPartners from "../../Components/ViewGamesDetailsPartners";
import PartnerHeader from "../../Components/PartnerHeader";

function PartnerHotseatplay() {
  const [newgame, setNewgame] = useState();
  const [viewGames, setViewGames] = useState(false);
  const statistics = [
    {
      name: "Total Games Played",
      amount: "1,450",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_87_3731)">
            <rect x="6" y="2" width="48" height="48" rx="24" fill="white" />
            <rect
              x="6.5"
              y="2.5"
              width="47"
              height="47"
              rx="23.5"
              stroke="#E3E0E0"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.9765 20.8766C19.9766 20.3418 20.3601 19.6854 20.8345 19.4093L29.1291 14.5828C29.6029 14.3071 30.3703 14.3071 30.845 14.5838L39.1424 19.4195C39.6164 19.6956 40.0003 20.3523 40.0002 20.8893L39.9967 30.5287C39.9966 31.0643 39.6125 31.7232 39.1394 32.0004L30.827 36.869C30.3537 37.1463 29.5873 37.1461 29.1132 36.8677L20.8299 32.0016C20.3567 31.7237 19.9734 31.0652 19.9736 30.5302L19.9765 20.8766ZM21.7211 20.0926L29.9627 24.5439L37.8202 20.1509L29.9494 15.6804L21.7211 20.0926ZM21.1896 21.5333C21.1896 21.7304 21.0563 30.235 21.0563 30.235C21.052 30.5021 21.2399 30.8304 21.4778 30.9693L29.1908 35.4718L29.2618 26.0976C29.2618 26.0976 21.1896 21.336 21.1896 21.5333ZM30.7172 35.4514L38.3426 30.77C38.6345 30.5908 38.8713 30.1748 38.8713 29.8401V21.4854L30.7172 26.028V35.4514Z"
            fill="#333B4A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.7151 26.2277C23.1165 26.5621 22.3228 26.3167 21.9425 25.6796C21.5623 25.0425 21.7394 24.255 22.3381 23.9206C22.9368 23.5862 23.7305 23.8316 24.1107 24.4687C24.491 25.1058 24.3139 25.8933 23.7151 26.2277ZM27.7211 28.7706C27.1225 29.1051 26.3288 28.8596 25.9485 28.2226C25.5683 27.5855 25.7454 26.7979 26.344 26.4636C26.9428 26.1291 27.7365 26.3746 28.1167 27.0116C28.497 27.6487 28.3199 28.4363 27.7211 28.7706ZM23.7151 30.7081C23.1165 31.0426 22.3228 30.7971 21.9425 30.1601C21.5623 29.523 21.7394 28.7354 22.3381 28.4011C22.9368 28.0666 23.7305 28.3121 24.1107 28.9491C24.491 29.5862 24.3139 30.3738 23.7151 30.7081ZM27.7211 33.2511C27.1225 33.5855 26.3288 33.3401 25.9485 32.703C25.5683 32.0659 25.7454 31.2783 26.344 30.944C26.9428 30.6095 27.7365 30.855 28.1167 31.4921C28.497 32.1291 28.3199 32.9167 27.7211 33.2511ZM37.5155 23.7995C36.9167 23.4651 36.1232 23.7105 35.7429 24.3476C35.3627 24.9847 35.5397 25.7723 36.1384 26.1066C36.7372 26.441 37.5309 26.1956 37.9111 25.5585C38.2914 24.9215 38.1143 24.1339 37.5155 23.7995ZM35.4827 27.3112C34.8841 26.9768 34.0904 27.2222 33.7101 27.8593C33.3299 28.4964 33.507 29.2839 34.1057 29.6183C34.7044 29.9527 35.4981 29.7073 35.8783 29.0702C36.2586 28.4331 36.0815 27.6456 35.4827 27.3112ZM33.3545 30.7018C32.7559 30.3674 31.9622 30.6128 31.5819 31.2499C31.2017 31.887 31.3788 32.6745 31.9775 33.0089C32.5762 33.3433 33.3699 33.0979 33.7501 32.4608C34.1304 31.8237 33.9533 31.0362 33.3545 30.7018ZM30.0671 18.5641C29.272 18.5641 28.6275 19.1605 28.6275 19.8961C28.6275 20.6317 29.272 21.2281 30.0671 21.2281C30.8622 21.2281 31.5068 20.6317 31.5068 19.8961C31.5068 19.1605 30.8622 18.5641 30.0671 18.5641Z"
            fill="#333B4A"
          />
          <defs>
            <filter
              id="filter0_dd_87_3731"
              x="0"
              y="0"
              width="60"
              height="60"
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
                radius="2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_87_3731"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_87_3731"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_87_3731"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_87_3731"
                result="effect2_dropShadow_87_3731"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_87_3731"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      name: "Total Revenue",
      amount: "5,280",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_87_4045)">
            <rect x="6" y="2" width="48" height="48" rx="24" fill="white" />
            <rect
              x="6.5"
              y="2.5"
              width="47"
              height="47"
              rx="23.5"
              stroke="#E3E0E0"
            />
          </g>
          <path
            d="M28.8533 16.3637C29.1862 16.1274 29.5878 16 30 16C30.4122 16 30.8138 16.1274 31.1467 16.3637L39.3922 22.2152C40.4778 22.9844 39.9189 24.6536 38.5767 24.6569H21.4222C20.08 24.6536 19.5222 22.9844 20.6067 22.2152L28.8522 16.3637H28.8533ZM31.1111 20.6043C31.1111 20.3178 30.994 20.043 30.7857 19.8404C30.5773 19.6377 30.2947 19.5239 30 19.5239C29.7053 19.5239 29.4227 19.6377 29.2143 19.8404C29.006 20.043 28.8889 20.3178 28.8889 20.6043C28.8889 20.8909 29.006 21.1657 29.2143 21.3683C29.4227 21.5709 29.7053 21.6847 30 21.6847C30.2947 21.6847 30.5773 21.5709 30.7857 21.3683C30.994 21.1657 31.1111 20.8909 31.1111 20.6043ZM29.1667 31.1382H26.9444V25.7362H29.1667V31.1382ZM33.0556 31.1382H30.8333V25.7362H33.0556V31.1382ZM37.2222 31.1382H34.7222V25.7362H37.2222V31.1382ZM37.5 32.2186H22.5C21.837 32.2186 21.2011 32.4747 20.7322 32.9306C20.2634 33.3865 20 34.0048 20 34.6495V35.1897C20 35.6381 20.3733 36 20.8333 36H39.1667C39.3877 36 39.5996 35.9146 39.7559 35.7627C39.9122 35.6107 40 35.4046 40 35.1897V34.6495C40 34.0048 39.7366 33.3865 39.2678 32.9306C38.7989 32.4747 38.163 32.2186 37.5 32.2186ZM25.2778 31.1382H22.7778V25.7362H25.2778V31.1382Z"
            fill="#333B4A"
          />
          <defs>
            <filter
              id="filter0_dd_87_4045"
              x="0"
              y="0"
              width="60"
              height="60"
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
                radius="2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_87_4045"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_87_4045"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_87_4045"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_87_4045"
                result="effect2_dropShadow_87_4045"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_87_4045"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      name: "Games Won",
      amount: "380",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_87_3731)">
            <rect x="6" y="2" width="48" height="48" rx="24" fill="white" />
            <rect
              x="6.5"
              y="2.5"
              width="47"
              height="47"
              rx="23.5"
              stroke="#E3E0E0"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.9765 20.8766C19.9766 20.3418 20.3601 19.6854 20.8345 19.4093L29.1291 14.5828C29.6029 14.3071 30.3703 14.3071 30.845 14.5838L39.1424 19.4195C39.6164 19.6956 40.0003 20.3523 40.0002 20.8893L39.9967 30.5287C39.9966 31.0643 39.6125 31.7232 39.1394 32.0004L30.827 36.869C30.3537 37.1463 29.5873 37.1461 29.1132 36.8677L20.8299 32.0016C20.3567 31.7237 19.9734 31.0652 19.9736 30.5302L19.9765 20.8766ZM21.7211 20.0926L29.9627 24.5439L37.8202 20.1509L29.9494 15.6804L21.7211 20.0926ZM21.1896 21.5333C21.1896 21.7304 21.0563 30.235 21.0563 30.235C21.052 30.5021 21.2399 30.8304 21.4778 30.9693L29.1908 35.4718L29.2618 26.0976C29.2618 26.0976 21.1896 21.336 21.1896 21.5333ZM30.7172 35.4514L38.3426 30.77C38.6345 30.5908 38.8713 30.1748 38.8713 29.8401V21.4854L30.7172 26.028V35.4514Z"
            fill="#333B4A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.7151 26.2277C23.1165 26.5621 22.3228 26.3167 21.9425 25.6796C21.5623 25.0425 21.7394 24.255 22.3381 23.9206C22.9368 23.5862 23.7305 23.8316 24.1107 24.4687C24.491 25.1058 24.3139 25.8933 23.7151 26.2277ZM27.7211 28.7706C27.1225 29.1051 26.3288 28.8596 25.9485 28.2226C25.5683 27.5855 25.7454 26.7979 26.344 26.4636C26.9428 26.1291 27.7365 26.3746 28.1167 27.0116C28.497 27.6487 28.3199 28.4363 27.7211 28.7706ZM23.7151 30.7081C23.1165 31.0426 22.3228 30.7971 21.9425 30.1601C21.5623 29.523 21.7394 28.7354 22.3381 28.4011C22.9368 28.0666 23.7305 28.3121 24.1107 28.9491C24.491 29.5862 24.3139 30.3738 23.7151 30.7081ZM27.7211 33.2511C27.1225 33.5855 26.3288 33.3401 25.9485 32.703C25.5683 32.0659 25.7454 31.2783 26.344 30.944C26.9428 30.6095 27.7365 30.855 28.1167 31.4921C28.497 32.1291 28.3199 32.9167 27.7211 33.2511ZM37.5155 23.7995C36.9167 23.4651 36.1232 23.7105 35.7429 24.3476C35.3627 24.9847 35.5397 25.7723 36.1384 26.1066C36.7372 26.441 37.5309 26.1956 37.9111 25.5585C38.2914 24.9215 38.1143 24.1339 37.5155 23.7995ZM35.4827 27.3112C34.8841 26.9768 34.0904 27.2222 33.7101 27.8593C33.3299 28.4964 33.507 29.2839 34.1057 29.6183C34.7044 29.9527 35.4981 29.7073 35.8783 29.0702C36.2586 28.4331 36.0815 27.6456 35.4827 27.3112ZM33.3545 30.7018C32.7559 30.3674 31.9622 30.6128 31.5819 31.2499C31.2017 31.887 31.3788 32.6745 31.9775 33.0089C32.5762 33.3433 33.3699 33.0979 33.7501 32.4608C34.1304 31.8237 33.9533 31.0362 33.3545 30.7018ZM30.0671 18.5641C29.272 18.5641 28.6275 19.1605 28.6275 19.8961C28.6275 20.6317 29.272 21.2281 30.0671 21.2281C30.8622 21.2281 31.5068 20.6317 31.5068 19.8961C31.5068 19.1605 30.8622 18.5641 30.0671 18.5641Z"
            fill="#333B4A"
          />
          <defs>
            <filter
              id="filter0_dd_87_3731"
              x="0"
              y="0"
              width="60"
              height="60"
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
                radius="2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_87_3731"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_87_3731"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_87_3731"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_87_3731"
                result="effect2_dropShadow_87_3731"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_87_3731"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
  ];
  return (
    <Hot>
      <DashBoardLayout>
        <PartnerHeader title="Games History" othertitle="Hot Seat Play" />
        {newgame && <AddNewGameForPartner close={setNewgame} />}
        {viewGames && <ViewGamesDetailsPartners closegame={setViewGames} />}
        {newgame || viewGames ? (
          ""
        ) : (
          <div className="overview">
            <div>
              <h2>Hot Seat Play</h2>
              <span>This page allows you to manage this game mode</span>
            </div>
            {/* <ButtonLayout
              placeholder="New Game"
              onClick={() => setNewgame(true)}
            /> */}
          </div>
        )}
        {newgame || viewGames ? (
          ""
        ) : (
          <div className="white">
            <div className="statistics">
              <p>Statistics</p>
              <div className="months">
                <span>12 months</span>
                <span>30 Days</span>
                <span>7 Days</span>
              </div>
            </div>
            <div className="grids">
              {statistics.map((s) => {
                return (
                  <div className="gamesplayed">
                    <div className="revenue">
                      <span>{s.name}</span>
                      <p>{s.amount}</p>
                    </div>
                    <div>{s.icon}</div>
                  </div>
                );
              })}
            </div>

            <div className="log">
              <h2>Question Log</h2>
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
            <HotseatTable table="Partner" viewGames={setViewGames} />
          </div>
        )}
      </DashBoardLayout>
    </Hot>
  );
}

export default PartnerHotseatplay;
const Hot = styled.div`
  background-color: #f6f6f6;
  .log {
    border-top: 1px solid #eaecf0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 20px 20px 20px;
  }
  .log h2 {
    color: #101828;
    line-height: 28px;
    font-size: 18px;
    font-weight: 500;
  }
  .grids {
    padding: 20px 20px 50px 20px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .statistics {
    display: flex;
    padding: 40px 20px 0px 20px;
    justify-content: space-between;
  }
  .statistics p {
    font-size: 15px;
    font-weight: 700;
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
  .months {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #d0d5dd;
    border-radius: 5px;
  }
  .months span {
    padding: 6px;
  }
  .months > * {
    border-right: 1px solid #d0d5dd;
  }

  .months > :last-child {
    border-right: none;
  }
  .white {
    background-color: white;
    margin: 20px;
    /* padding: 20px; */
    border-radius: 10px;
  }
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
`;
