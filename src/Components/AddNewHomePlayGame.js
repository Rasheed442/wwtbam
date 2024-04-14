import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import LabelinputLayout from "../Layouts/LabelinputLayout";
import { switchh, swt } from "../assets/Icons";
import PulseLoader from "react-spinners/PulseLoader";
import { useLocation } from "react-router-dom";

function AddNewHomePlayGame({ close }) {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

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
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  return (
    <NewGame>
      <div className="new" onClick={() => close(false)}>
        <p>
          <IoMdArrowBack /> Back to Home play
        </p>
        <h2>New Question</h2>
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
                    const updatedAnswerOptions = [...addQuestion.answerOptions];
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
                        return { ...prev, answerOptions: updatedAnswerOptions };
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
      </div>
    </NewGame>
  );
}

export default AddNewHomePlayGame;
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
    font-size: 20px;
    font-weight: 600;
  }
`;
