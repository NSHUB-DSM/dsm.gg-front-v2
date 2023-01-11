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
    if (!validation()) {
      return alert("회원가입에 실패하였습니다.");
    }
    await axios
      .post("", {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.code === 0) {
          alert("회원가입이 완료되었습니다!");
          navigate("/");
        } else {
          if (response.data.code === 10000) {
            alert("중복된 닉네임입니다. 다른 닉네임으로 시도해주세요.");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <InputContainer>
        <EamilInput
          type="email"
          placeholder="이메일을 입력하세요."
          onChange={onEmailCheck}
          value={email}
        />
        {emailError && (
          <ErrorMessage>이메일 형식이 일치하지 않습니다.</ErrorMessage>
        )}
        <Space />
        <PasswordInput
          type="password"
          placeholder="비밀번호를 입력하세요."
          onChange={onPassCheck}
          value={password}
        />
        {passwordError && (
          <ErrorMessage>
            비밀번호는 8자 이상이어햐 하며, 문자와 숫자를 하나 이상
            포함해야합니다.
          </ErrorMessage>
        )}
        <Space />
        <ConfirmPassInput
          type="password"
          placeholder="비밀번호를 다시 입력하세요."
          onChange={onConfirmCheck}
          value={confirmPassword}
        />
        {confirmPasswordError && (
          <ErrorMessage>입력한 비밀번호와 일치하지 않습니다.</ErrorMessage>
        )}
        <Space />
        <NicknameInput
          type="text"
          placeholder="닉네임을 입력하세요."
          onChange={onNameCheck}
          value={username}
        />
        {usernameError && (
          <ErrorMessage>닉네임은 최대 7자까지 설정 가능합니다.</ErrorMessage>
        )}
        <Space />
        <SignupBtn type="submit" onClick={onSubmit}>
          회원가입
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
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

const NicknameInput = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid black;
  font-size: 17px;
`;

const ConfirmPassInput = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid black;
  font-size: 17px;
`;

const PasswordInput = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid black;
  font-size: 17px;
`;

const EamilInput = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid black;
  font-size: 17px;
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
