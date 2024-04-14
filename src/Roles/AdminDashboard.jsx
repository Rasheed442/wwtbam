import React from "react";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import styled from "styled-components";
import TopHeader from "../Components/TopHeader";
import { FCMB, hope, opay, palmpay } from "../assets/Images";
import { FaArrowDown, FaChevronDown } from "react-icons/fa";
import PartnersChartComponent from "../ChartComponents/PartnersChartComponent";
import GamesChartComponent from "../ChartComponents/GamesChartComponent";
import ChannelChartComponent from "../ChartComponents/ChannelChartComponent";
import TransactionHistoryTable from "../TableComponents/TransactionHistoryTableForAdmin";
import { useNavigate } from "react-router";
function AdminDashboard() {
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log(userDetails);
  const numberWithSeparator = (number) => {
    return number?.toLocaleString(); // This will add thousand separators
  };
  // const collections = [
  //   {
  //     icon: FCMB,
  //     name: "FCMB",
  //     amount: "₦0",
  //     rate: "24.5%",
  //   },
  //   {
  //     name: "OPAY",
  //     amount: "₦0",
  //     rate: "24.5%",
  //     icon: opay,
  //   },
  //   {
  //     name: "Hope PS Bank",
  //     amount: "₦0",
  //     rate: "24.5%",
  //     icon: hope,
  //   },
  //   {
  //     name: "Palmpay",
  //     amount: "₦0",
  //     rate: "24.5%",
  //     icon: palmpay,
  //   },
  // ];
  return (
    <Head>
      <DashBoardLayout>
        <TopHeader title="Dashboard" />
        <div className="overview">
          <h2>Overview</h2>
          <span>
            This overview provides a comprehensive snapshot of transactions on
            your system
          </span>
        </div>

        {/* dashboard part */}
        <div className="content1">
          <div className="contside1">
            <div className="contside1Text">
              <h1>{userDetails?.totalGamePlayed}</h1>
              <p>Total Games played</p>
            </div>
          </div>
          <div className="contside2">
            <div className="contside22">
              <div className="contside2up">
                <div className="contside2child1">
                  {/* <CountryDropdown defaultValue={"Nigeria"} /> */}
                  <select>
                    <option>All Games</option>
                    <option>Hot Seat Play</option>
                    <option>Audience Play</option>
                    <option>Home Play</option>
                  </select>
                  <FaChevronDown style={{ color: "#667085" }} size={13} />
                </div>
                <div className="contside2child2">
                  {/* <div className="box">
                    <h2>3,534333</h2>
                    <span>Today’s total</span>
                  </div> */}
                  <div className="box">
                    <h2>
                      {numberWithSeparator(userDetails?.gamePlayedRevenue)}
                    </h2>
                    <span>Games Revenue</span>
                  </div>
                  <div className="box">
                    <h2>{userDetails?.totalUsers}</h2>
                    <span>Total Users</span>
                  </div>
                  <div className="box">
                    <h2>{userDetails?.totalGamePlayed}</h2>
                    <span>Game Played</span>
                  </div>
                </div>
              </div>
              <div className="smallbox">
                <div
                  className="smallcard"
                  onClick={() => navigate("/hotseat")}
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.476329 6.8766C0.476454 6.34185 0.859903 5.68541 1.33436 5.40932L9.62889 0.582797C10.1027 0.307069 10.8701 0.307068 11.3448 0.583766L19.6422 5.41949C20.1162 5.69558 20.5002 6.35226 20.5 6.88931L20.4965 16.5287C20.4964 17.0643 20.1123 17.7232 19.6392 18.0004L11.3268 22.869C10.8535 23.1463 10.0871 23.1461 9.61299 22.8678L1.32973 18.0016C0.856523 17.7237 0.473199 17.0652 0.47345 16.5302L0.476329 6.8766ZM2.22094 6.09264L10.4625 10.5439L18.32 6.15089L10.4492 1.68038L2.22094 6.09264ZM1.68939 7.53328C1.68939 7.73042 1.55607 16.235 1.55607 16.235C1.55181 16.5021 1.73972 16.8304 1.97757 16.9693L9.69061 21.4718L9.76159 12.0976C9.76159 12.0976 1.68939 7.33602 1.68939 7.53328ZM11.217 21.4514L18.8424 16.77C19.1344 16.5908 19.3711 16.1748 19.3711 15.8401V7.48545L11.217 12.028V21.4514Z"
                      fill="#5A6376"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.21505 12.2277C3.61641 12.5621 2.82272 12.3167 2.4424 11.6796C2.06221 11.0426 2.23935 10.255 2.83799 9.92063C3.43676 9.58617 4.23045 9.83162 4.61064 10.4687C4.99096 11.1058 4.81382 11.8934 4.21505 12.2277ZM8.22104 14.7706C7.6224 15.1051 6.82871 14.8596 6.44839 14.2226C6.0682 13.5855 6.24534 12.7979 6.84398 12.4636C7.44275 12.1291 8.23644 12.3746 8.61663 13.0116C8.99695 13.6487 8.81981 14.4363 8.22104 14.7706ZM4.21505 16.7081C3.61641 17.0426 2.82272 16.7971 2.4424 16.1601C2.06221 15.523 2.23935 14.7354 2.83799 14.4011C3.43676 14.0666 4.23045 14.3121 4.61064 14.9491C4.99096 15.5862 4.81382 16.3738 4.21505 16.7081ZM8.22104 19.2511C7.6224 19.5855 6.82871 19.3401 6.44839 18.703C6.0682 18.0659 6.24534 17.2783 6.84398 16.944C7.44275 16.6096 8.23644 16.855 8.61663 17.4921C8.99695 18.1291 8.81981 18.9167 8.22104 19.2511ZM18.0154 9.79953C17.4167 9.46508 16.6231 9.71053 16.2428 10.3476C15.8626 10.9847 16.0396 11.7723 16.6384 12.1066C17.2372 12.4411 18.0308 12.1956 18.411 11.5585C18.7914 10.9215 18.6142 10.1339 18.0154 9.79953ZM15.9827 13.3112C15.384 12.9768 14.5903 13.2222 14.21 13.8593C13.8298 14.4964 14.0069 15.2839 14.6056 15.6183C15.2044 15.9527 15.998 15.7073 16.3782 15.0702C16.7586 14.4332 16.5814 13.6456 15.9827 13.3112ZM13.8545 16.7018C13.2558 16.3674 12.4621 16.6128 12.0818 17.2499C11.7016 17.887 11.8788 18.6745 12.4774 19.0089C13.0762 19.3433 13.8699 19.0979 14.2501 18.4608C14.6304 17.8237 14.4532 17.0362 13.8545 16.7018ZM10.5671 4.56409C9.77199 4.56409 9.1274 5.16047 9.1274 5.89611C9.1274 6.63175 9.77199 7.22813 10.5671 7.22813C11.3621 7.22813 12.0067 6.63175 12.0067 5.89611C12.0067 5.16047 11.3621 4.56409 10.5671 4.56409Z"
                      fill="#5A6376"
                    />
                  </svg>

                  <p>Games</p>
                </div>
                <div
                  className="smallcard"
                  onClick={() => navigate("/partners")}
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 12V21M17.5 12V21"
                      stroke="#5A6376"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 12H21.5"
                      stroke="#5A6376"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 13.75C3 10.0966 3 8.26992 4.11299 7.13496C5.22599 6 7.01733 6 10.6 6H14.4C17.9827 6 19.774 6 20.887 7.13496C22 8.26992 22 10.0966 22 13.75C22 17.4034 22 19.2301 20.887 20.365C19.774 21.5 17.9827 21.5 14.4 21.5H10.6C7.01733 21.5 5.22599 21.5 4.11299 20.365C3 19.2301 3 17.4034 3 13.75Z"
                      stroke="#5A6376"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17 6L16.9007 5.69094C16.4056 4.15089 16.1581 3.38087 15.5689 2.94043C14.9796 2.5 14.197 2.5 12.6316 2.5H12.3684C10.803 2.5 10.0204 2.5 9.43111 2.94043C8.84186 3.38087 8.59436 4.15089 8.09934 5.69094L8 6"
                      stroke="#5A6376"
                      stroke-width="1.5"
                    />
                  </svg>

                  <p>Partners</p>
                </div>
                <div
                  className="smallcard"
                  onClick={() => navigate("/history")}
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4915 3.00349C7.40153 2.86349 3.23153 6.95349 3.23153 12.0035H2.58151C2.13151 12.0035 1.73151 12.0035 2.23151 12.8535L3.88153 15.6535C4.08153 15.8535 4.39153 15.8535 4.59153 15.6535L6.09151 12.8535C6.16061 12.783 6.2073 12.6936 6.2257 12.5966C6.24409 12.4996 6.23336 12.3994 6.19486 12.3085C6.15636 12.2176 6.09182 12.1401 6.00936 12.0858C5.9269 12.0316 5.83023 12.0029 5.73151 12.0035H5.23153C5.23153 8.10349 8.41153 4.95349 12.3315 5.00349C16.0515 5.05349 19.1815 8.18349 19.2315 11.9035C19.2815 15.8135 16.1315 19.0035 12.2315 19.0035C10.6215 19.0035 9.13153 18.4535 7.95153 17.5235C7.76 17.3726 7.51968 17.2974 7.2763 17.3121C7.03292 17.3269 6.80344 17.4306 6.63153 17.6035C6.21153 18.0235 6.24153 18.7335 6.71153 19.0935C8.28266 20.336 10.2285 21.0092 12.2315 21.0035C17.2815 21.0035 21.3715 16.8335 21.2315 11.7435C21.1015 7.05349 17.1815 3.13349 12.4915 3.00349ZM11.9815 8.00349C11.5715 8.00349 11.2315 8.34349 11.2315 8.75349V12.4335C11.2315 12.7835 11.4215 13.1135 11.7215 13.2935L14.8415 15.1435C15.2015 15.3535 15.6615 15.2335 15.8715 14.8835C16.0815 14.5235 15.9615 14.0635 15.6115 13.8535L12.7315 12.1435V8.74349C12.7315 8.34349 12.3915 8.00349 11.9815 8.00349Z"
                      fill="#464F60"
                    />
                  </svg>

                  <p>View History</p>
                </div>
                <div className="smallcard">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6161 20H19.1063C20.2561 20 21.1707 19.4761 21.9919 18.7436C24.078 16.8826 19.1741 15 17.5 15M15.5 5.06877C15.7271 5.02373 15.9629 5 16.2048 5C18.0247 5 19.5 6.34315 19.5 8C19.5 9.65685 18.0247 11 16.2048 11C15.9629 11 15.7271 10.9763 15.5 10.9312"
                      stroke="#5A6376"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M4.48131 16.1112C3.30234 16.743 0.211137 18.0331 2.09388 19.6474C3.01359 20.436 4.03791 21 5.32572 21H12.6743C13.9621 21 14.9864 20.436 15.9061 19.6474C17.7889 18.0331 14.6977 16.743 13.5187 16.1112C10.754 14.6296 7.24599 14.6296 4.48131 16.1112Z"
                      stroke="#5A6376"
                      stroke-width="1.5"
                    />
                    <path
                      d="M13 7.5C13 9.70914 11.2091 11.5 9 11.5C6.79086 11.5 5 9.70914 5 7.5C5 5.29086 6.79086 3.5 9 3.5C11.2091 3.5 13 5.29086 13 7.5Z"
                      stroke="#5A6376"
                      stroke-width="1.5"
                    />
                  </svg>

                  <p>Shortcut 1</p>
                </div>
              </div>
            </div>
            <div className="contside2down">
              <div className="contside2childdown">
                {userDetails?.partners.slice(0, 4).map((c) => {
                  return (
                    <div className="box2" onClick={() => navigate("/partners")}>
                      <div className="boxcont">
                        <img src={c.partnerLogo} alt="" />
                        <p>{c.companyName}</p>
                      </div>
                      <h2>{c.partnerTotalGamePlayed}</h2>
                      <div className="rate">
                        <p>
                          {" "}
                          <span>
                            <FaArrowDown size={10} style={{ color: "red" }} />
                            24.5%
                          </span>
                          &nbsp; vs last month
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <PartnersChartComponent /> */}
        <div className="gameschannel">
          <GamesChartComponent />
          <ChannelChartComponent />
        </div>
        <TransactionHistoryTable />
      </DashBoardLayout>
    </Head>
  );
}

export default AdminDashboard;
const Head = styled.div`
  background-color: #f6f6f6;

  .gameschannel {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .contside2child1 {
    position: absolute;
    top: 10px;
    left: 20px;
    border: 1px solid #d0d5dd;
    padding: 0px 5px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .contside2child1 select {
    border: none;
    appearance: none;
    height: 38px;
    color: #667085;
    line-height: 24px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    outline: none;
    border-radius: 5px;
  }
  .rate span {
    color: red;
    align-items: center;
    gap: 5px;
  }
  .rate p {
    color: #667085;
  }
  .rate {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
  }
  .overview {
    padding: 100px 0px 0px 20px;
  }
  .overview h2 {
    color: #090814;
    font-size: 29px;
    font-weight: 600;
    line-height: 43px;
  }
  .overview span {
    color: #848d87;
    letter-spacing: 0.5%;
    line-height: 20px;
    font-size: 12.5px;
    font-weight: 300;
  }
  .limit {
    display: flex;
    justify-content: space-between;
  }
  .limit p {
    font-size: 14px;
    font-weight: 500;
    color: #5a6376;
  }
  .limit span {
    color: #464f60;
    font-weight: 500;
    font-size: 14px;
  }
  .feeslimit {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 20px 20px 20px;
  }
  .score {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 40px 20px 20px 20px;
  }
  .score span {
    font-size: 16px;
    font-weight: 400;
    color: #5a6376;
    line-height: 19.36px;
  }
  .flexhold {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .monthlyThreshold {
    background-color: white;
    border-radius: 10px;
  }
  .PaymentTypeChart {
    display: grid;
    grid-template-columns: 60% 40%;
    padding: 30px 0px 30px 0px;
    gap: 10px;
  }
  .PaymentTypeChart2 {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 30px 0px 30px 0px;
    gap: 10px;
  }
  .Payment {
    background-color: white;
    border-radius: 10px;
    padding-left: 10px;
  }
  .type {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .type p {
    font-size: 24px;
    font-weight: 500;
    line-height: 29.05px;
  }
  .type span {
    font-size: 14px;
    font-weight: 500;
    color: #909090;
  }
  .paymentmethod {
    padding: 20px 20px 40px 20px;
    display: flex;
    gap: 20px;
  }
  .color1 {
    background-color: #2a278f;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .color2 {
    background-color: #d94040;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .color3 {
    background-color: #d94040;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .color4 {
    background-color: #d94040;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  .card {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .card span {
    font-size: 14px;
    color: #464f60;
    font-weight: 500;
    line-height: 16.94px;
  }
  .content1 {
    display: flex;
    gap: 10px;
    overflow: hidden;
    padding: 20px;
    flex-wrap: wrap;
    @media screen and (max-width: 40em) {
      width: 100%;
      flex: 1;
    }

    .box {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .box span {
      color: #667085;
      line-height: 20px;
      font-size: 12px;
      font-weight: 400;
    }
    .box h2 {
      color: #333b4a;
      font-size: 30px;
      font-weight: 600;
    }
    .box2 h2::-webkit-scrollbar-thumb {
      background-color: #0000001a;
    }

    .box2 h2::-webkit-scrollbar {
      width: 5px !important;
      height: 5px !important;
    }

    .box2 h2::-webkit-scrollbar-track {
      display: none;
    }
    .box2 {
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow: hidden;
      width: 100%;
      overflow: scroll;
      cursor: pointer;

      .boxcont {
        display: flex;
        align-items: center;
        gap: 15px;
        /* display: flex;
        justify-content: space-around;
        gap: 20px;
        padding: 10px;
        align-items: center;
        flex-wrap: wrap;
        @media screen and (max-width: 40em) {
          justify-content: center;
        } */
      }
      .boxcont p {
        color: #667085;
        letter-spacing: 1%;
        line-height: 19px;
        font-size: 14px;
        font-weight: 500;
      }
      .boxcont img {
        width: 30px;
      }
    }
    .box2 h2 {
      color: #333b4a;
      overflow: hidden;
      overflow: scroll;
      font-size: 30px;
      font-weight: 500;
    }
  }

  .contside1 {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2em;
    text-align: center;
    border-radius: 10px;
    @media screen and (max-width: 40em) {
      flex: 1 !important;
    }
    > .contside1Text {
      height: 100%;
      vertical-align: center;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: clamp(3rem, 5vw, 4rem);
      }
      p {
        color: #667085;
        line-height: 19px;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  .contside2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;
    flex: 1;
  }
  .contside22 {
    width: 100%;
    display: flex;
    gap: 10px;
    @media screen and (max-width: 40em) {
      flex: 1 !important;
      flex-direction: column;
    }

    .smallbox {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
      gap: 10px;
      .smallcard {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        background-color: #fff;
        border-radius: 10px;

        @media screen and (max-width: 40em) {
          gap: 8px !important;
          font-size: 10px;
        }
      }
    }
  }
  .contside2up {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 4em 0em 2em 0em;
    border-radius: 10px;
    width: 100%;
    gap: 20px;
    .contside2child2 {
      display: flex;

      .box {
        border-right: 1px solid rgba(213, 219, 229, 1);
        padding-inline-start: 20px;
        &:last-of-type {
          border-right: none;
        }
      }
      @media screen and (max-width: 40em) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  .contside2down {
    .contside2childdown {
      display: flex;
      background-color: #fff;
      /* padding: 1em; */
      justify-content: space-between;
      align-items: center;
      /* text-align: center; */
      border-radius: 10px;
      .box2 {
        width: 100%;
        padding: 1rem;
        border-right: 1px solid rgba(213, 219, 229, 1);
        /* padding-inline-start: 30px; */

        /* display: inline-flex; */
        &:last-of-type {
          border-right: none;
        }
      }
      @media screen and (max-width: 40em) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;
