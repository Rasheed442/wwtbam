import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styled from "styled-components";

function PasswordInputLayout({
  label,
  placeholder,
  onChange,
  style,
  inputstyle,
  disabled,
  value,
}) {
  const [open, setOpen] = useState(false);
  return (
    <PassWordInput>
      <div className="labels" style={style}>
        <label>{label}</label>
        <div className="eyes">
          <input
            value={value}
            type={open ? "text" : "password"}
            disabled={disabled}
            style={inputstyle}
            placeholder={placeholder}
            onChange={onChange}
          />
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <AiOutlineEye size={17} />
            ) : (
              <AiOutlineEyeInvisible size={17} />
            )}
          </div>
        </div>
      </div>
    </PassWordInput>
  );
}

export default PasswordInputLayout;
const PassWordInput = styled.div`
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
    width: 100%;
    border: none;
    padding: 5px;
  }
  .eyes {
    border-radius: 5px;
    padding-right: 20px;
    padding-left: 10px;
    display: flex;

    align-items: center;
    border: 1px solid #d0d5dd;
  }
`;
