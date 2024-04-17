import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import LabelinputLayout from "../Layouts/LabelinputLayout";
import { switchh, swt } from "../assets/Icons";
import PulseLoader from "react-spinners/PulseLoader";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

function AudienceGame({ close }) {
  const [check, setCheck] = useState(false);
  const [anotherQuestion, setAnotherQuestion] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const successToastStyle = {
    backgroundColor: "green", // Set the background color to green
    color: "white",
  };
  const errorToastStyle = {
    backgroundColor: "red", // Set the background color to green
    color: "white",
  };

  useEffect(() => {
    const id = queryParams.get("id");
  }, [queryParams.get("id")]);

  const [addQuestion, setQuestion] = useState({
    gameId: queryParams.get("id"),
    question: "",
    gameSelectionType: {
      id: 1,
    },
    answerOptions: [
      {
        answer: "A",
        answerDescription: "Olusegun Obasanjo",
        isCorrectAsnwer: false,
      },
      {
        answer: "B",
        answerDescription: "Muhamadu Buhari",
        isCorrectAsnwer: false,
      },
      {
        answer: "C",
        answerDescription: "Bola ahmen Tinubu",
        isCorrectAsnwer: false,
      },
      {
        answer: "D",
        answerDescription: "Yakubu Gowon",
        isCorrectAsnwer: false,
      },
    ],
  });
  async function SubmitQuestion(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}addnewquestion`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(addQuestion),
        }
      );
      const server = await response.json();
      if (server?.status === true) {
        toast.success(server?.message, {
          style: successToastStyle, // Apply the custom style
        });
        setLoading(false);
      } else {
        toast.error(server?.message, {
          style: errorToastStyle, // Apply the custom style
        });
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <NewGame>
      <div className="new" onClick={() => close(false)}>
        <p>
          <IoMdArrowBack /> Back to Audience play
        </p>
        <h2>New Game</h2>
      </div>
      <div className="white">
        <div className="multiple">
          <div className="Bank">
            <p>Question Bank</p>
            <span>you can add multiple questions</span>
          </div>
          {/* <button onClick={() => setAnotherQuestion(true)}>
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
                fill="#464F60"
              />
            </svg>
            <p>Add another question</p>
          </button> */}
        </div>
        <div>
          <div className="labelinput">
            <LabelinputLayout
              inputstyle={{ width: "50%" }}
              label="Question"
              placeholder="who's the current president of Nigeria"
              value={addQuestion.question}
              onChange={(e) => {
                setQuestion((prev) => {
                  return { ...prev, question: e.target.value };
                });
              }}
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
            {addQuestion?.answerOptions?.map((p, index) => {
              return (
                <div className="answ" key={index}>
                  <LabelinputLayout
                    value={p.answerDescription}
                    label={p?.answer}
                    onChange={(e) => {
                      const updatedAnswerOptions = [
                        ...addQuestion.answerOptions,
                      ];
                      updatedAnswerOptions[index].answerDescription =
                        e.target.value;
                      setQuestion((prev) => {
                        return { ...prev, answerOptions: updatedAnswerOptions };
                      });
                    }}
                  />
                  <div className="check">
                    {/* Assuming optionA is specific to each answer option */}
                    <input
                      type="checkbox"
                      checked={p.optionA}
                      onChange={() => {
                        const updatedAnswerOptions = [
                          ...addQuestion.answerOptions,
                        ];
                        updatedAnswerOptions[
                          index
                        ].isCorrectAsnwer = !updatedAnswerOptions[index]
                          .isCorrectAsnwer;
                        setQuestion((prev) => {
                          return {
                            ...prev,
                            answerOptions: updatedAnswerOptions,
                          };
                        });
                      }}
                    />
                    <span>{p.optionA ? "Right Answer" : ""}</span>
                  </div>
                </div>
              );
            })}
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
          {anotherQuestion ? (
            ""
          ) : (
            <div className="btn">
              <button
                style={{ backgroundColor: "#38197A", color: "white" }}
                onClick={SubmitQuestion}
              >
                {loading ? (
                  <PulseLoader color="white" size={20} />
                ) : (
                  "Submit Question"
                )}
              </button>
            </div>
          )}
        </div>
        {anotherQuestion && (
          <div style={{ paddingTop: "40px" }}>
            <div className="secondquest">
              <div className="labelinput">
                <LabelinputLayout
                  inputstyle={{ width: "40vw" }}
                  label="Question 2"
                  placeholder="who's the current president of Nigeria"
                />
                <span>Make sure it's an easy question</span>
              </div>
              <span className="rmv" onClick={() => setAnotherQuestion(false)}>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.81889 0.757392C1.526 0.464499 1.05113 0.464498 0.758233 0.757392C0.46534 1.05029 0.46534 1.52516 0.758233 1.81805L3.94021 5.00003L0.758263 8.18198C0.46537 8.47487 0.46537 8.94974 0.758263 9.24264C1.05116 9.53553 1.52603 9.53553 1.81892 9.24264L5.00087 6.06069L8.18285 9.24267C8.47575 9.53557 8.95062 9.53557 9.24351 9.24267C9.53641 8.94978 9.53641 8.47491 9.24351 8.18201L6.06153 5.00003L9.24354 1.81802C9.53644 1.52512 9.53644 1.05025 9.24354 0.757357C8.95065 0.464464 8.47578 0.464464 8.18288 0.757357L5.00087 3.93937L1.81889 0.757392Z"
                    fill="#F04438"
                  />
                </svg>
                Remove Question
              </span>
            </div>

            <div className="answer">
              <p>Answers</p>
              <span>
                Input 3 wrong answers and 1 correct answer, and check the
                correct one
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
                  Add a start and end date for this question to be valid over
                  the duration
                </span>
              </div>
              <div onClick={() => setCheck(!check)}>
                {check ? (
                  <img src={swt} alt="" />
                ) : (
                  <img src={switchh} alt="" />
                )}
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
        )}
      </div>
    </NewGame>
  );
}

export default AudienceGame;
const NewGame = styled.div`
  .rmv {
    color: #f04438;
    font-size: 16px;
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 10px;
    line-height: 20px;
    letter-spacing: 2%;
  }
  .secondquest {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .multiple {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .multiple button {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: white;
    border: 1px solid #d0d5dd;
    border-radius: 5px;
    font-weight: 500;
    gap: 5px;
  }
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
