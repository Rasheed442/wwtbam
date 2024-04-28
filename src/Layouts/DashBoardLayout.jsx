import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import styled from "styled-components";

function DashBoardLayout({ children }) {
  const [back, setBack] = useState(true);

  return (
    <Head>
      <div
        className="top"
        style={{ gridTemplateColumns: back ? "" : " 1.2fr 9fr" }}
      >
        <SideBar back={back} setBack={setBack} />
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
