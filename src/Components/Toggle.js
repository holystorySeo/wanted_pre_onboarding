import React, { useState } from "react";
import styled from "styled-components";

export function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const [isPart, setIsPart] = useState("basic");
  const [text, setText] = useState(false);

  const toggleHandler = (part) => {
    if (part !== isPart) {
      setIsPart(part);
      setIsToggleOn(!isToggleOn);
    }
  };

  const textHandler = (part) => {
    if (part !== isPart) {
      setText(!text);
    }
  };

  return (
    <ToggleContainer>
      <div role="presentation" className="toggle-container">
        <div
          className={`basic ${isToggleOn ? "toggle--checked" : ""}`}
          onClick={() => {
            toggleHandler("basic");
            textHandler("basic");
          }}
        >
          기본
        </div>
        <div
          className={`detail ${isToggleOn ? "" : "toggle--checked"}`}
          onClick={() => {
            toggleHandler("detail");
            textHandler("detail");
          }}
        >
          상세
        </div>
        <div
          role="presentation"
          className={`toggle-circle ${text ? "text--checked" : ""}`}
        />
      </div>
    </ToggleContainer>
  );
}

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > .toggle-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 330px;
    height: 40px;
    border-radius: 20px;
    background: #e6e6e6;
    cursor: pointer;

    .basic {
      display: flex;
      justify-content: center;
      flex: 1 0 0;
      color: #a4a4a4;
      font-weight: 600;
      z-index: 999;
    }

    .detail {
      display: flex;
      justify-content: center;
      flex: 1 0 0;
      color: #a4a4a4;
      font-weight: 600;
      z-index: 999;
    }

    .toggle--checked {
      color: black;
    }

    .toggle-circle {
      position: absolute;
      left: 2px;
      width: 165px;
      height: 90%;
      background: white;
      border-radius: 20px;
      transition: 0.2s;
    }

    .text--checked {
      left: 163px;
      transition: 0.2s;
    }
  }
`;
