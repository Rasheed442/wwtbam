import React from "react";
import SideBar from "../Components/SideBar";
import styled from "styled-components";

function DashBoardLayout({ children }) {
  return (
    <Head>
      <div className="top">
        <SideBar />
        <div className="container">
          <div className="main">{children}</div>
        </div>
      </div>
    </Head>
  );
}

export default DashBoardLayout;
const Head = styled.div`
  .top {
    display: grid;
    grid-template-columns: 1.9fr 9fr;
  }
  .container {
    overflow: hidden;
    overflow: scroll;
    height: 100vh;
  }
  .main {
    /* background-color: red; */
  }
`;
