import React, { useState } from "react";
import styled from "styled-components";
import { background, wwtlogo } from "../assets/Icons";
import { CiMail } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import ButtonLayout from "../Reusables/ButtonLayout";
import { useNavigate } from "react-router-dom";
function Login() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Head>
      <div className="top">
        <div className="container">
          <div className="header">
            <div className="logo">
              <img src={wwtlogo} alt="" />
              <h2>Admin Login</h2>
              <p>Welcome back! Please enter your details</p>
            </div>
            <div className="email">
              <label>Email Address</label>
              <div className="mail">
                <CiMail />
                <input type="text" placeholder="Enter your email" />
              </div>
            </div>
            <div className="password">
              <label>Password</label>
              <div className="pass">
                <div className="lock">
                  <svg
                    width="13"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.55667 15.704C1.74407 17.0958 2.89694 18.1863 4.29988 18.2508C5.48039 18.305 6.67958 18.3333 8.00016 18.3333C9.32074 18.3333 10.5199 18.305 11.7004 18.2508C13.1034 18.1863 14.2563 17.0958 14.4437 15.704C14.566 14.7956 14.6668 13.8647 14.6668 12.9167C14.6668 11.9686 14.566 11.0378 14.4437 10.1294C14.2563 8.73752 13.1034 7.64707 11.7004 7.58258C10.5199 7.52831 9.32074 7.5 8.00016 7.5C6.67958 7.5 5.48039 7.52831 4.29988 7.58258C2.89694 7.64707 1.74407 8.73752 1.55667 10.1294C1.43437 11.0378 1.33349 11.9686 1.33349 12.9167C1.33349 13.8647 1.43437 14.7956 1.55667 15.704Z"
                      stroke="#667085"
                      stroke-width="1.5"
                    />
                    <path
                      d="M4.25 7.50001V5.41667C4.25 3.3456 5.92893 1.66667 8 1.66667C10.0711 1.66667 11.75 3.3456 11.75 5.41667V7.50001"
                      stroke="#667085"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.99707 12.9167H8.00455"
                      stroke="#667085"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    type={open ? "text" : "password"}
                    placeholder="Password"
                  />
                </div>
                <div onClick={() => setOpen(!open)}>
                  {open ? (
                    <FaRegEye size={15} style={{ color: "#667085" }} />
                  ) : (
                    <FaRegEyeSlash size={15} style={{ color: "#667085" }} />
                  )}
                </div>
              </div>
              <p>Forgot Password</p>
            </div>
            <ButtonLayout title="Login" onClick={() => navigate("/overview")} />
          </div>
          <div className="bgg">
            <img src={background} alt="" />
          </div>
        </div>
      </div>
    </Head>
  );
}

export default Login;
const Head = styled.div`
  .bgg img {
    width: 60vw;
    height: 100vh;
  }

  .email {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 5px;
  }
  .email label {
    color: #344054;
    font-size: 12px;
    font-weight: 500;
  }
  .password label {
    color: #344054;
    font-size: 12px;
    font-weight: 500;
  }
  .password {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 10px;
  }
  .password p {
    color: #38197a;
    text-align: end;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .logo img {
    width: 70px;
  }
  .logo p {
    color: #667085;
    line-height: 24px;
    font-size: 14px;
    font-weight: 300;
  }
  .logo h2 {
    color: #101828;
    line-height: 38px;
    font-size: 28px;
    font-weight: 600;
  }
  .mail input {
    border: none;
    outline: none;
    width: 100%;
  }
  .mail {
    display: flex;
    border: 1px solid #d0d5dd;
    gap: 10px;
    padding: 8px;
    align-items: center;
    width: 30vw;
    border-radius: 10px;
  }
  .lock {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .lock input {
    outline: none;
    border: none;
    width: 100%;
    width: 25vw;
  }
  .pass {
    display: flex;
    border: 1px solid #d0d5dd;
    justify-content: space-between;
    padding: 8px;
    align-items: center;
    width: 30vw;
    border-radius: 10px;
  }

  .top {
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .header {
    display: flex;
    flex-direction: column;
    width: 50vw;
    /* justify-content: center; */
    padding-top: 150px;
    align-items: center;
    gap: 25px;
  }
`;
