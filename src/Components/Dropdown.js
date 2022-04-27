import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export function Dropdown() {
  const database = [
    "achievement",
    "affair",
    "comfort",
    "culture",
    "development",
    "education",
    "effect",
    "experience",
    "liberty",
    "love",
    "software"
  ];
  const [displayValue, setDisplayValue] = useState("All Symbols");
  const [inputValue, setInputValue] = useState("");
  const [hasText, setHasText] = useState(false);
  const [matchedList, setMatchedList] = useState(database);
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const dropdonwHandler = () => {
    setHasText(!hasText);
  };

  // 검색창에 값을 입력하면 실행
  const checkInputValue = (e) => {
    // database에서 검색어로 filter한 결과
    const searchResult = database.filter((el) => {
      return el.includes(e.target.value);
    });
    setInputValue(e.target.value);
    setHasText(true);
    setMatchedList(searchResult);
  };

  const selectList = (e) => {
    e.stopPropagation();
    setDisplayValue(e.target.textContent);
    setHasText(false);
    setInputValue("");
    setSelectedIdx(-1);
    setMatchedList(database);
  };

  const handleMouseOver = (idx) => {
    setSelectedIdx(idx);
  };

  return (
    <DropdownWrapper>
      <DropdownContainer onClick={dropdonwHandler}>
        <div className="display-text">{displayValue}</div>
        <FaCaretDown className="caredown" />
      </DropdownContainer>
      {hasText ? (
        <div>
          <InputValueContainer>
            <FaSearch className="magnify" />
            <InputValueSection value={inputValue} onChange={checkInputValue} />
          </InputValueContainer>
          <ListContainer>
            {matchedList.length !== 0 ? (
              matchedList.map((list, idx) => {
                return (
                  <li
                    role="presentation"
                    key={idx}
                    className={`dropdown-list ${
                      selectedIdx === idx ? "select--focused" : ""
                    }`}
                    onClick={selectList}
                    onMouseOver={() => handleMouseOver(idx)}
                    onFocus={handleMouseOver}
                  >
                    {list}
                  </li>
                );
              })
            ) : (
              <div className="no-result">검색결과가 없습니다.</div>
            )}
          </ListContainer>
        </div>
      ) : (
        ""
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  width: 300px;
  height: 40px;
  cursor: pointer;

  .display-text {
    padding-left: 10px;
    color: #848484;
  }

  .caredown {
    padding-right: 10px;
    color: #a4a4a4;
  }
`;

const InputValueContainer = styled.div`
  margin-top: 1.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 40px;
  border: 1px solid #e6e6e6;
  border-radius: 5px 5px 0 0;

  .magnify {
    padding-left: 10px;
    display: flex;
    color: #d8d8d8;
  }
`;

const InputValueSection = styled.input.attrs({
  placeholder: "Search Symbol"
})`
  width: 93%;
  height: 70%;
  border: none;
  margin-left: 10px;
  margin-right: 3px;
  color: #848484;
  font-size: 15px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #d8d8d8;
    font-size: 15px;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-top: none;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-radius: 0 0 5px 5px;
  list-style: none;
  margin: 0;
  padding: 0;

  .dropdown-list {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 300px;
    height: 40px;
    margin-top: 5px;
    padding-left: 37px;
    color: #848484;
    cursor: pointer;

    &.select--focused {
      background: #e6e6e6;
    }
  }

  .no-result {
    box-sizing: border-box;
    width: 98%;
    margin: 5px 0;
    padding-left: 37px;
    border-radius: 10px;
    font-size: 15px;
    color: #848484;
  }
`;
