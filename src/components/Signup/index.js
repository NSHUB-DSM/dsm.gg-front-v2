import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmailRegex =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const PassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function SignupInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const navigate = useNavigate();

  const onEmailCheck = (e) => {
    if (!e.target.value || EmailRegex.test(e.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(e.target.value);
  };

  const onPassCheck = (e) => {
    if (!e.target.value || PassRegex.test(e.target.value)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    setPassword(e.target.value);
  };

  const onConfirmCheck = (e) => {
    if (password === e.target.value) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }
    setConfirmPassword(e.target.value);
  };

  const onNameCheck = (e) => {
    if (username.length <= 7) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }
    setUsername(e.target.value);
  };

  const validation = () => {

    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (!confirmPassword) {
      setConfirmPasswordError(true);
    }
    if (!username) {
      setUsernameError(true);
    }

    if (email && password && confirmPassword && username) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = async () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    if (!validation()) {
      return alert("??????????????? ?????????????????????.");
    }
    await axios
      .post("", {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.code === 0) {
          alert("??????????????? ?????????????????????!");
          navigate("/search");
        } else {
          if (response.data.code === 10000) {
            alert("????????? ??????????????????. ?????? ??????????????? ??????????????????.");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChange = (e) => {
    if (e.target.value === '') {
      setIsInput(false);
    } else {
      setIsInput(true);
    }
  }

  return (
    <>
      <InputContainer onChange={onChange}>
        <EamilInput
          type="email"
          placeholder="???????????? ???????????????."
          onChange={onEmailCheck}
          value={email}
        />
        {emailError && (
          <ErrorMessage>????????? ????????? ???????????? ????????????.</ErrorMessage>
        )}
        <Space />
        <PasswordInput
          type="password"
          placeholder="??????????????? ???????????????."
          onChange={onPassCheck}
          value={password}
        />
        {passwordError && (
          <ErrorMessage>
            ??????????????? 8??? ??????????????? ??????, ????????? ????????? ?????? ??????
            ?????????????????????.
          </ErrorMessage>
        )}
        <Space />
        <ConfirmPassInput
          type="password"
          placeholder="??????????????? ?????? ???????????????."
          onChange={onConfirmCheck}
          value={confirmPassword}
        />
        {confirmPasswordError && (
          <ErrorMessage>????????? ??????????????? ???????????? ????????????.</ErrorMessage>
        )}
        <Space />
        <NicknameInput
          type="text"
          placeholder="???????????? ???????????????."
          onChange={onNameCheck}
          value={username}
        />
        {usernameError && (
          <ErrorMessage>???????????? ?????? 7????????? ?????? ???????????????.</ErrorMessage>
        )}
        <Space />
        <SignupBtn type="submit" onClick={onSubmit} isInput={isInput}>
          ????????????
        </SignupBtn>
      </InputContainer>
    </>
  );
}

const SignupBtn = styled.button`
  width: 205px;
  height: 60px;
  margin-left: 43px;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
  display: ${(props) => (props.isInput ? 'block' : 'none')}
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

const NicknameInput = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid #E5E7E9;
  font-size: 17px;
  transition: border-bottom 0s ease;
  &:focus {
    border-bottom: 2px solid black;
  }
`;

const ConfirmPassInput = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid #E5E7E9;
  font-size: 17px;
  transition: border-bottom 0s ease;
  &:focus {
    border-bottom: 2px solid black;
  }
`;

const PasswordInput = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid #E5E7E9;
  font-size: 17px;
  transition: border-bottom 0s ease;
  &:focus {
    border-bottom: 2px solid black;
  }
`;

const EamilInput = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid #E5E7E9;
  font-size: 17px;
  transition: border-bottom 0s ease;
  &:focus {
    border-bottom: 2px solid black;
  }
`;

const Space = styled.div`
  height: 50px;
`;

const InputContainer = styled.form`
  width: 568px;
  height: 436px;
  margin: 0 auto;
  padding-left: 130px;
`;
