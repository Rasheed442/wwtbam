import React from "react";
import styled from "styled-components";

function ButtonLayout({ placeholder, onClick }) {
  return (
    <Head>
      <div className="btn" onClick={onClick}>
        <button>
          {" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.99999 2C8.4142 2 8.74999 2.33579 8.74999 2.75V7.25H13.25C13.6642 7.25 14 7.58579 14 8C14 8.41422 13.6642 8.75 13.25 8.75H8.74999V13.25C8.74999 13.6642 8.4142 14 7.99999 14C7.58578 14 7.24999 13.6642 7.24999 13.25V8.75H2.75C2.33579 8.75 2 8.41422 2 8C2 7.58579 2.33579 7.25 2.75 7.25H7.24999V2.75C7.24999 2.33579 7.58578 2 7.99999 2Z"
              fill="white"
            />
          </svg>
          {placeholder}
        </button>
      </div>
    </Head>
  );
}

export default ButtonLayout;
const Head = styled.div`
  .btn button {
    background-color: #38197a;
    color: white;
    padding: 10px 10px 10px 10px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    gap: 6px;
    cursor: pointer;
  }
`;
