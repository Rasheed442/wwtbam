import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
function Modal({ children }) {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  return (
    <OvalModal>
      <div className="container">
        <div className="center" data-aos="slide-up">
          {children}
        </div>
      </div>
    </OvalModal>
  );
}

export default Modal;
const OvalModal = styled.div`
  .container {
    background-color: rgba(0, 0, 0, 0.591);
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .center {
    background-color: white;
    position: relative;
    border-radius: 10px;
    width: 100%;
    max-height: 100%;
    max-width: 400px;
    overflow: hidden;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 30px 30px 30px;
  }
`;
