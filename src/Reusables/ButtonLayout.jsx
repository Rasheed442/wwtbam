import React from "react";
import styled from "styled-components";

function ButtonLayout({ title, onClick }) {
  return (
    <Head>
      <button onClick={onClick}>{title}</button>
    </Head>
  );
}

export default ButtonLayout;
const Head = styled.div`
  button {
    background-color: #38197a;
    color: white;
    width: 30vw;
    border: none;
    padding: 13px 12px 13px 12px;
    line-height: 21px;
    font-size: 15px;
    border-radius: 15px;
    cursor: pointer;
  }
`;
