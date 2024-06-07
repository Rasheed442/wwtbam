import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import LabelinputLayout from "../Layouts/LabelinputLayout";
import { switchh, swt } from "../assets/Icons";
function AddNewGameForPartner({ close }) {
  const [check, setCheck] = useState(false);
  return (
    <NewGame>
      <div className="new" onClick={() => close(false)}>
        <p>
          <IoMdArrowBack /> Back to Hot seat play
        </p>
        <h2>New Game</h2>
      </div>
      <div className="white">
        <div className="Bank">
          <p>Question Bank</p>
          <span>Add a new question</span>
        </div>
        <div className="labelinput">
          <LabelinputLayout
            inputstyle={{ width: "50%" }}
            label="Question"
            placeholder="who's the current president of Nigeria"
          />
          <span>Make sure it's an easy question</span>
        </div>

        <div className="answer">
          <p>Answers</p>
          <span>
            Input 3 wrong answers and 1 correct answer, and check the correct
            one
          </span>
        </div>
        <div className="flexout">
          <div className="answ">
            <LabelinputLayout
              placeholder="Olusegun Obansanjo"
              label="Option A"
              disabled
            />
            <div className="check">
              <input type="checkbox" />
              <span>Right Answer</span>
            </div>
          </div>
          <div className="answ">
            <LabelinputLayout
              placeholder="Muhammadu Buhari"
              label="Option B"
              disabled
            />
            <div className="check">
              <input type="checkbox" />
              <span>Right Answer</span>
            </div>
          </div>
          <div className="answ">
            <LabelinputLayout
              placeholder="Bola Ahmed Tinubu"
              label="Option C"
              disabled
            />
            <div className="check">
              <input type="checkbox" />
              <span>Right Answer</span>
            </div>
          </div>
          <div className="answ">
            <LabelinputLayout
              placeholder="Yakubu Gowon"
              label="Option D"
              disabled
            />
            <div className="check">
              <input type="checkbox" />
              <span>Right Answer</span>
            </div>
          </div>
        </div>

        <div className="time">
          <div className="bound">
            <p>Time-Bound</p>
            <span>
              Add a start and end date for this question to be valid over the
              duration
            </span>
          </div>
          <div onClick={() => setCheck(!check)}>
            {check ? <img src={swt} alt="" /> : <img src={switchh} alt="" />}
          </div>
        </div>
        <div className="btn">
          <button
            style={{
              backgroundColor: "white",
              color: "#464F60",
              border: "1px  solid #D0D5DD",
            }}
          >
            Cancel
          </button>
          <button style={{ backgroundColor: "#38197A", color: "white" }}>
            Submit Question
          </button>
        </div>
      </div>
    </NewGame>
  );
}

export default AddNewGameForPartner;
const NewGame = styled.div`
  .btn {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    padding-top: 20px;
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
  .time {
    transition: 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 90px;
    padding: 20px 0px 20px 0px;
    border-bottom: 1px solid #eaecf0;
  }
  .bound p {
    color: #101828;
    font-size: 13px;
    line-height: 20px;
    font-weight: 500;
  }
  .bound span {
    color: #667085;
    line-height: 20px;
    font-size: 12px;
    font-weight: 400;
  }
  .flexout {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    padding: 20px 90px 20px 0px;
    border-bottom: 1px solid #eaecf0;
  }
  .check {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .check span {
    font-size: 11px;
    line-height: 24px;
    color: #464f60;
    font-weight: 400;
  }
  .check input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }
  .answ {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .white {
    background-color: white;
    padding: 20px;
  }
  .answer p {
    color: #101828;
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
  }
  .answer {
    /* padding: 0px 20px 0px 20px; */
  }
  .answer span {
    color: #667085;
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
  }
  .labelinput {
    padding: 20px 0px 15px 0px;
    border-top: 1px solid #eaecf0;
  }
  .labelinput span {
    color: #667085;
    line-height: 20px;
    font-size: 12px;
    font-weight: 300;
  }
  .Bank {
    padding: 20px 0px 20px 0px;
    display: flex;
    flex-direction: column;
  }
  .Bank p {
    color: #101828;
    font-size: 16px;
    line-height: 28px;
    font-weight: 500;
  }
  .Bank span {
    color: #667085;
    line-height: 20px;
    font-size: 14px;
    font-weight: 300;
  }
  .new {
    padding: 100px 20px 0px 20px;
    gap: 7px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .new p {
    color: #38197a;
    line-height: 19px;
    font-size: 14px;
    font-weight: 400;
  }
  .new h2 {
    color: #090814;
    line-height: 32px;
    font-size: 24px;
    font-weight: 600;
  }
`;
