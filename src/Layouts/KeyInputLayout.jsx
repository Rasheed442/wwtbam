import React from "react";
import styled from "styled-components";

function KeyinputLayout({
  label,
  placeholder,
  onChange,
  style,
  inputstyle,
  disabled,
  value,
  open,
}) {
  return (
    <Labels>
      <div className="labels" style={style}>
        <label>{label}</label>
        <input
          value={value}
          type={open ? "text" : "password"}
          disabled={disabled}
          style={inputstyle}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </Labels>
  );
}

export default KeyinputLayout;
const Labels = styled.div`
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
  .labels ::placeholder {
    color: #667085;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
  }
  .labels input {
    color: #667085;
    outline: none;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    background-color: white;
    padding: 5px;
    border: 1px solid #d0d5dd;
    border-radius: 5px;
    padding-left: 15px;
  }
`;
