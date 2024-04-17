import React from "react";
import styled from "styled-components";
import Modal from "../Layouts/Modal";
import { IoIosCheckmarkCircle } from "react-icons/io";

function QuestionDetails({ onClick, questiondata }) {
  console.log(questiondata);
  const columns = [
    {
      title: "	QUESTION",
      dataIndex: "channel",
    },
    {
      title: "OPTION A",
      dataIndex: "optiona",
    },
    {
      title: "OPTION B",
      dataIndex: "optionb",
    },
    {
      title: "OPTION C",
      dataIndex: "optionc",
    },
    {
      title: "OPTION D",
      dataIndex: "optiond",
    },
    // {
    //   title: "	DURATION",
    //   dataIndex: "participantName",
    // },
    // {
    //   title: "	DATE",
    //   dataIndex: "numerOfEntries",
    // },
  ];
  return (
    <Modal>
      <Quest>
        <div className="add">
          <p>Question Logs</p>
          <div onClick={onClick} style={{ cursor: "pointer" }}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_41_51730)">
                <path
                  d="M11.2269 9.63609C10.7875 9.19675 10.0752 9.19675 9.63589 9.63609C9.19654 10.0754 9.19655 10.7877 9.63589 11.2271L14.4089 16L9.63593 20.773C9.19659 21.2123 9.19659 21.9246 9.63593 22.364C10.0753 22.8033 10.7876 22.8033 11.2269 22.364L15.9998 17.591L20.7728 22.364C21.2122 22.8033 21.9245 22.8033 22.3638 22.364C22.8031 21.9247 22.8031 21.2124 22.3638 20.773L17.5908 16L22.3639 11.227C22.8032 10.7877 22.8032 10.0754 22.3639 9.63604C21.9245 9.1967 21.2122 9.1967 20.7729 9.63604L15.9998 14.4091L11.2269 9.63609Z"
                  fill="#464F60"
                />
              </g>
              <defs>
                <clipPath id="clip0_41_51730">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(4 4)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="bases">
          <p>QUESTION</p>
          <span>{questiondata?.question}</span>
        </div>
        <div className="secbase">
          {Object.values(questiondata?.answerOptions).map((c) => {
            return (
              <div className="content">
                <p>
                  OPTION &nbsp; &nbsp; &nbsp;{c?.answer}{" "}
                  {c?.isCorrectAnswer === true && (
                    <IoIosCheckmarkCircle
                      size={20}
                      style={{ color: "#027A48" }}
                    />
                  )}
                </p>
                <span>{c?.answerDescription}</span>
              </div>
            );
          })}
        </div>
      </Quest>
    </Modal>
  );
}

export default QuestionDetails;
const Quest = styled.div`
  .secbase {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid gainsboro;
    border-top: none;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
  .content p {
    padding: 10px;
    width: 50%;
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .content span {
    border-left: 1px solid gainsboro;
    width: 50%;
    padding: 10px;
  }
  .bases {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid gainsboro;
  }
  .bases p {
    padding: 10px;
    width: 50%;
  }
  .bases span {
    overflow: hidden;
    overflow: scroll;
    border-left: 1px solid gainsboro;
    width: 50%;
    padding: 10px;
  }
  .add {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-bottom: 30px;
  }
  .add p {
    color: #101828;
    line-height: 28px;
    font-size: 20px;
    font-weight: 500;
  }
`;
