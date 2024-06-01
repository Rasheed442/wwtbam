import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Layouts/Modal";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { Furo } from "../assets/Images";
import LabelinputLayout from "../Layouts/LabelinputLayout";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";

function UpdateCommission({ close, setRefresh }) {
  const token = localStorage.getItem("token");

  const commissionId = localStorage.getItem("commissionId");
  const [loading, setLoading] = useState(false);
  const successToastStyle = {
    backgroundColor: "green", // Set the background color to green
    color: "white",
  };
  const errorToastStyle = {
    backgroundColor: "red", // Set the background color to green
    color: "white",
  };
  const [updateCommission, setCommission] = useState({
    id: commissionId,
    commissionType: {
      id: 1,
    },
    commission: 7.5,
  });
  function UpdateHandler() {
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);

    const raw = JSON.stringify(updateCommission);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    setLoading(true);

    fetch(
      "https://api.blkhut.com/wwtbam_v2//updatepartnercommission",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result?.status) {
          setLoading(false);
          toast.success(result?.message, {
            style: successToastStyle, // Apply the custom style
          });
          setTimeout(() => {
            close(false);
          }, 1000);
        } else {
          setLoading(false);
          toast.error(result?.message, {
            style: errorToastStyle, // Apply the custom style
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
    setRefresh((prev) => !prev);
  }
  return (
    <Update>
      <Modal>
        <div className="header">
          <img src={Furo} />
          <AiOutlineClose size={20} onClick={() => close(false)} />
        </div>
        <p>Modify Commission</p>
        {/* <div className="labels">
          <label>Games</label>
          <div className="select">
            <select>
              <option>Fixed</option>
            </select>
            <AiOutlineDown size={10} />
          </div>
        </div> */}
        <LabelinputLayout
          placeholder="20"
          label="UPDATE COMMISSION"
          onChange={(e) => {
            setCommission((prev) => {
              return { ...prev, commission: e.target.value };
            });
          }}
        />
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
          <button
            style={{ backgroundColor: "#38197A", color: "white" }}
            onClick={UpdateHandler}
          >
            {loading ? <PulseLoader color="white" size={20} /> : "Update"}
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
