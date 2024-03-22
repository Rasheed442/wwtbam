import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Layouts/Modal";
import LabelinputLayout from "../Layouts/LabelinputLayout";
import PasswordInputLayout from "../Layouts/PasswordInputLayout";
function AddNewPartner({ close }) {
  const [partnerLogo, setPartnerLogo] = useState();
  const [image, setImage] = useState(null);
  const [upload, setUpload] = useState(false);
  const [addPartners, setAddpartners] = useState({
    companyName: "",
    address: "",
    city: {
      id: 77002,
    },
    state: {
      id: 306,
    },
    country: {
      id: 161,
    },
    phone: "",
    email: "",
    password: "?",
    bvn: "",
    idType: {
      id: 1,
    },
    idNumber: "",
    idURL: "",
    companyRegistrationNumber: "",
    companyCertificateURL: "",
    dateRegistered: "",
    formCo7URL: "",
    formCo2URL: "",
    articlesAndMemorandumOfAssociation: "",
    utilityBill: "",
    sector: "Fintech",
    partnerLogo: "",
  });
  const token = localStorage.getItem("token");
  const userID = localStorage.getItem("userID");

  // const handleFileChanges = async (event) => {
  //   try {
  //     const file = event.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         setImage(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     }

  //     // fetch handler
  //     const myHeaders = new Headers();

  //     myHeaders.append("x-session-id", `${token}`);

  //     const formdata = new FormData();
  //     formdata.append("file", file);

  //     const requestOptions = {
  //       method: "POST",
  //       headers: myHeaders,
  //       body: formdata,
  //       redirect: "follow",
  //     };

  //     const response = await fetch(
  //       `${process.env.REACT_APP_BASE_URL}FileUploadAPI/${userID}`,
  //       requestOptions
  //     );
  //     const data = await response.json();

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleFileChange = async (event) => {
    const fileInputElement = document.getElementById("fileInput");
    const file = fileInputElement.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    console.log("🚀 ~ handleFileChange ~ file:", file);
    var myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);

    var formdata = new FormData();
    formdata.append("file", file, "ID.jpeg");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch(
      `${process.env.REACT_APP_BASE_URL}FileUploadAPI/${userID}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  // add handler
  async function AddHandler(e) {
    try {
      e.preventDefault();
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}addnewpartner`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `x-session-id ${token}`,
          },
          body: JSON.stringify(addPartners),
        }
      );
      const server = await response.json();
      console.log(server);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <NewPartner>
      <Modal>
        <div className="top">
          <div className="add">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="11.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="11.5"
                stroke="#E4E7EC"
              />
              <path
                d="M24.5 34H18.5909C17.0455 34 15.8163 33.248 14.7127 32.1966C12.4534 30.0441 16.1628 28.324 17.5776 27.4816C19.6784 26.2307 22.1368 25.7719 24.5 26.1052C25.3575 26.2261 26.1926 26.4514 27 26.7809"
                stroke="#38197A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.5 18.5C28.5 20.9853 26.4853 23 24 23C21.5147 23 19.5 20.9853 19.5 18.5C19.5 16.0147 21.5147 14 24 14C26.4853 14 28.5 16.0147 28.5 18.5Z"
                stroke="#38197A"
                stroke-width="1.5"
              />
              <path
                d="M30.5 34L30.5 27M27 30.5H34"
                stroke="#38197A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            <p>Add New Partner</p>
          </div>
          <div onClick={() => close(false)}>
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

        {/* upload logo */}
        <div className="upload">
          <span>Upload logo</span>
          <div className="logo">
            {image ? (
              ""
            ) : (
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="40"
                  height="40"
                  rx="20"
                  fill="#F2F4F7"
                />
                <rect
                  x="3"
                  y="3"
                  width="40"
                  height="40"
                  rx="20"
                  stroke="#F9FAFB"
                  stroke-width="6"
                />
                <g clip-path="url(#clip0_42_61297)">
                  <path
                    d="M26.3333 26.3334L23 23M23 23L19.6666 26.3334M23 23V30.5M29.9916 28.325C30.8044 27.8819 31.4465 27.1808 31.8165 26.3322C32.1866 25.4837 32.2635 24.5361 32.0351 23.6389C31.8068 22.7418 31.2862 21.9463 30.5555 21.3779C29.8248 20.8095 28.9257 20.5006 28 20.5H26.95C26.6977 19.5244 26.2276 18.6186 25.5749 17.8509C24.9222 17.0831 24.104 16.4732 23.1817 16.0672C22.2594 15.6612 21.2571 15.4695 20.2501 15.5066C19.243 15.5437 18.2575 15.8086 17.3676 16.2814C16.4777 16.7542 15.7066 17.4226 15.1122 18.2363C14.5177 19.0501 14.1155 19.988 13.9358 20.9795C13.756 21.9711 13.8034 22.9905 14.0743 23.9611C14.3452 24.9317 14.8327 25.8282 15.5 26.5834"
                    stroke="#475467"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_42_61297">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(13 13)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {image && (
              <img
                src={image}
                alt="Preview"
                style={{
                  maxWidth: "60%",
                  maxHeight: "60%",
                  borderRadius: "30px",
                  padding: "10px",
                }}
              />
            )}
            <p>
              <label
                style={{ color: "#276EF1", cursor: "pointer" }}
                for="fileInput"
              >
                Click to upload
              </label>
              &nbsp;
              <input
                type="file"
                id="fileInput"
                value={addPartners.partnerLogo}
                onChange={handleFileChange}
              />
              or drag and drop
              <br />
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </div>
        <LabelinputLayout
          label="Company name"
          placeholder="Enter company name"
          value={addPartners.companyName}
          onChange={(e) => {
            setAddpartners((prev) => {
              return { ...prev, companyName: e.target.value };
            });
          }}
        />

        <LabelinputLayout
          label="Partner email"
          placeholder="Enter email address"
          value={addPartners.email}
          onChange={(e) => {
            setAddpartners((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        <PasswordInputLayout
          label="Password"
          placeholder="***********"
          value={addPartners.password}
          onChange={(e) => {
            setAddpartners((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />

        <LabelinputLayout
          label="Address"
          placeholder="Enter  address"
          value={addPartners.address}
          onChange={(e) => {
            setAddpartners((prev) => {
              return { ...prev, address: e.target.value };
            });
          }}
        />
        {/* <LabelinputLayout
          label="BVN"
          placeholder="Enter BVN"
          value={addPartners.bvn}
          onChange={(e) => {
            setAddpartners((prev) => {
              return { ...prev, bvn: e.target.value };
            });
          }}
        /> */}
        <LabelinputLayout
          label="Partner Phone number"
          placeholder="Enter email address"
          value={addPartners.phone}
          onChange={(e) => {
            setAddpartners((prev) => {
              return { ...prev, phone: e.target.value };
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
            onClick={AddHandler}
          >
            Add
          </button>
        </div>
      </Modal>
    </NewPartner>
  );
}

export default AddNewPartner;
const NewPartner = styled.div`
  .btn {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    cursor: pointer;
  }
  .btn button {
    width: 110px;
    height: 38px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    line-height: 24px;
    font-size: 500;
    border: none;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
  .add {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .add p {
    color: #101828;
    line-height: 28px;
    font-size: 20px;
    font-weight: 500;
  }
  .upload span {
    color: #344054;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #344054;
  }
  .upload {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #eaecf0;
    padding: 16px;
    border-radius: 10px;
  }
  .logo span {
    color: #667085;
    line-height: 20px;
    font-size: 12px;
    font-weight: 400;
  }
  .logo input[type="file"] {
    /* Hide the default button */
    display: none;
  }
`;

// (e) => {
//                   setAddpartners((prev) => {
//                     return { ...prev, partnerLogo: e.target.value };
//                   });
//                 }
