import React from "react";
import styled from "styled-components";
import Modal from "../Layouts/Modal";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Furo } from "../assets/Images";
import LabelinputLayout from "../Layouts/LabelinputLayout";
function UpdateCommission({ close }) {
  return (
    <Update>
      <Modal>
        <div className="header">
          <img src={Furo} />
          <AiOutlineClose size={20} onClick={() => close(false)} />
        </div>
        <p>Modify Commission</p>
        <div className="labels">
          <label>Games</label>
          <div className="select">
            <select>
              <option>Fixed</option>
            </select>
            <AiOutlineDown size={10} />
          </div>
        </div>
        <LabelinputLayout placeholder="20" label="Amount" />
        <div className="btn">
          <button
            style={{
              backgroundColor: "white",
              color: "#464F60",
              border: "1px  solid #D0D5DD",
            }}
            onClick={() => close(false)}
          >
            Cancel
          </button>
          <button style={{ backgroundColor: "#38197A", color: "white" }}>
            Submit Question
          </button>
        </div>
      </Modal>
    </Update>
  );
}

export default UpdateCommission;
const Update = styled.div`
  .btn {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    cursor: pointer;
  }
  .btn button {
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    border: none;
    padding: 10px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .labels {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .labels label {
    color: #344054;
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
  }
  .select select {
    appearance: none;
    padding: 5px;
    line-height: 24px;
    width: 100%;
    padding: 5px;
    color: #667085;
    border: none;
    outline: none;
  }
  .select {
    display: flex;
    align-items: center;
    border: 1px solid #d0d5dd;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
  }
`;
