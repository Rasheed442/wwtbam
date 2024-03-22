import React from "react";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

function ButtonLayout({ title, onClick, loading }) {
  return (
    <Head>
      <button onClick={onClick}>
        {loading ? <PulseLoader color="white" size={20} /> : title}
      </button>
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
    padding: 10px;
    line-height: 21px;
    font-size: 15px;
    border-radius: 15px;
    cursor: pointer;
  }
`;
