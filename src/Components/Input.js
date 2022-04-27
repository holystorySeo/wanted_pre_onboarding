import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

export function Input() {
  const [emailValue, setEmailValue] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [eyeCheck, setEyeCheck] = useState(false);
  const [typeValue, setTypeValue] = useState("password");

  const validEmailCheck = (obj) => {
    const pattern =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return obj.match(pattern) !== null;
  };

  const emailValueHandler = (e) => {
    setEmailValue(e.target.value);
    if (validEmailCheck(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const emailCheckHandler = () => {
    if (emailValue === "") {
      return;
    }

    if (!emailValid) {
      setEmailCheck(true);
    }
  };

  const initializeEmailCheck = () => {
    setEmailCheck(false);
  };

  const passwordValueHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const eyeHandler = () => {
    if (eyeCheck) {
      setTypeValue("password");
    } else {
      setTypeValue("text");
    }
    setEyeCheck(!eyeCheck);
  };

  return (
    <div>
      <EmailContainer>
        <Title>E-mail</Title>
        <EmailInputContainer>
          <input
            type="text"
            value={emailValue}
            placeholder="E-mail"
            onChange={emailValueHandler}
          />
          <FaCheckCircle
            className={`check-image ${emailValid ? "valid--checked " : ""}`}
          />
        </EmailInputContainer>
        {emailCheck ? <ErrorMsg>invalid E-mail address</ErrorMsg> : ""}
      </EmailContainer>
      <PasswordContainer>
        <Title>Password</Title>
        <PasswordInputContainer>
          <input
            type={typeValue}
            value={passwordValue}
            placeholder="Password"
            onChange={passwordValueHandler}
            onFocus={emailCheckHandler}
            onBlur={initializeEmailCheck}
          />
          {eyeCheck ? (
            <FaRegEye className="eye-checked" onClick={eyeHandler} />
          ) : (
            <FaRegEyeSlash className="eye-image" onClick={eyeHandler} />
          )}
        </PasswordInputContainer>
      </PasswordContainer>
    </div>
  );
}

const EmailContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Title = styled.div`
  display: flex;
  margin: 0 0 3px 3px;
  font-size: 13px;
  color: #848484;
`;

const EmailInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  width: 300px;
  height: 40px;

  input {
    border: none;
    width: 250px;
    height: 30px;
    padding-left: 10px;
    font-size: 15px;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #d8d8d8;
      font-size: 15px;
    }
  }

  .check-image {
    color: #d8d8d8;
    margin-right: 10px;

    &.valid--checked {
      color: coral;
    }
  }
`;

const ErrorMsg = styled.div`
  display: flex;
  margin: 3px 0 3px 3px;
  font-size: 13px;
  color: #f78181;
`;

const PasswordContainer = styled(EmailContainer)`
  margin-top: 30px;
`;

const PasswordInputContainer = styled(EmailInputContainer)`
  .eye-image {
    margin-right: 10px;
    color: #6e6e6e;
    font-size: 20px;
    cursor: pointer;
  }

  .eye-checked {
    margin-right: 10px;
    color: coral;
    font-size: 20px;
    cursor: pointer;
  }
`;
