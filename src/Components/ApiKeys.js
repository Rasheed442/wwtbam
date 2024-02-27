import React from "react";
import styled from "styled-components";
import LabelinputLayout from "../Layouts/LabelinputLayout";
import { FiCopy } from "react-icons/fi";

function ApiKeys() {
  return (
    <MyKeys>
      <div className="contain">
        <div className="keys">
          <h2>API Keys</h2>
          <p>
            This is your API key. You can use this key to integrate with other
            platforms enabling your application or service to
            <br /> effortlessly collaborate with other systems
          </p>
        </div>
        <div className="btn">
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #D0D5DD",
              color: "#344054",
            }}
          >
            Reveal keys
          </button>
          <button
            style={{
              backgroundColor: "#38197A",
              border: "none",
              color: "#FFFFFF",
            }}
          >
            Regenerate keys
          </button>
        </div>
      </div>

      <div className="livekeys">
        <div className="testkeys">
          <LabelinputLayout
            label="Test Keys"
            placeholder="*****************"
            disabled
          />
          <FiCopy size={20} style={{ color: "#667085" }} />
        </div>

        <div className="testkeys">
          <LabelinputLayout
            style={{ width: "100%" }}
            label="Live Keys"
            placeholder="*****************"
            disabled
          />
          <FiCopy size={20} style={{ color: "#667085" }} />
        </div>
      </div>
    </MyKeys>
  );
}

export default ApiKeys;
const MyKeys = styled.div`
  .livekeys {
    display: grid;
    grid-template-columns: auto auto;
    padding: 20px;
  }
  .testkeys {
    display: grid;
    grid-template-columns: auto auto;
    align-items: flex-end;
    gap: 10px;
  }
  .contain {
    display: flex;
    justify-content: space-between;
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .btn button {
    color: white;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    gap: 6px;
    cursor: pointer;
  }
  .keys {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .keys h2 {
    color: #090814;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
  }
  .keys p {
    color: #667085;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;
