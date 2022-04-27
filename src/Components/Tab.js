import React, { useState } from "react";
import styled from "styled-components";

export function Tab() {
  const menuArr = ["Tab1", "Tab2", "Tab3"];

  const [selectedTab, setSelectedTab] = useState(0);

  const tabHandler = (id) => {
    setSelectedTab(id);
  };

  return (
    <TabContainer>
      <TabSection>
        {menuArr.map((el, idx) => {
          return (
            <div
              role="presentation"
              key={idx}
              className={`submenu ${
                selectedTab === idx ? "submenu--focused" : ""
              }`}
              onClick={() => tabHandler(idx)}
            >
              {el}
            </div>
          );
        })}
        <Underline tabIndex={Number(`${selectedTab}`) * 180 + `px`} />
      </TabSection>
    </TabContainer>
  );
}
const TabContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const TabSection = styled.div`
  position: relative;
  display: flex;
  width: 540px;
  height: 40px;
  border-bottom: 1px solid #d8d8d8;

  > .submenu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #848484;
    font-weight: 700;
    cursor: pointer;

    &.submenu--focused {
      color: black;
    }
  }
`;

const Underline = styled.div`
  position: absolute;
  top: 40px;
  left: ${(props) => props.tabIndex};
  width: 180px;
  border: 1px solid coral;
  transition: 0.5s;
  background: coral;
`;
