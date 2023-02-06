import React from "react";
import "../modal/modal.css";
import styled from "styled-components";
import emaliLogo from "../../../assets/imgs/email.png";
import lock from "../../../assets/imgs/password.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = (props) => {
  const { open, close, header } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInput, setIsInput] = useState(false);
  const navigate = useNavigate();

  const onLogin = () => {
    fetch("", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.message === "SUCCESS") {
        window.localStorage.setItem("token", response.accessToken);
        navigate("/search");
      } else {
        alert("아이디 및 비밀번호가 일치하지 않습니다.");
      }
    });
  };

  const inputHandler = (e) => {
    if (e.target.value === "") {
      setIsInput(false);
    } else {
      setIsInput(true);
    }
  }

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <Title>로그인</Title>
            <br />
            <LoginForm onChange={inputHandler}>
              <InputEmail
                placeholder="이메일을 입력해주세요."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <EmailLogoBox>
                <img src={emaliLogo} alt="이미지" />
              </EmailLogoBox>
              <br />
              <PasswordInput
                placeholder="비밀번호를 입력해주세요."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <LockLogoBox>
                <img src={lock} alt="이미지" />
              </LockLogoBox>
              <LoginBtnContainer>
                <LoginBtns onClick={onLogin} isInput={isInput}>로그인</LoginBtns>
              </LoginBtnContainer>
            </LoginForm>
          </main>
          <LinkContainer>
            <LinkStyle to="/user/signup">아직 회원이 아니신가요?</LinkStyle>
          </LinkContainer>
        </section>
      ) : null}
    </div>
  );
};

const LinkContainer = styled.div`
  margin-top: 40px;
  margin-left: 350px;
`;

const LinkStyle = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #5a8fff;
  &:hover {
    opacity: 0.8;
  }
`;

const LoginBtnContainer = styled.div`
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding-top: 40px;
`;

const LoginBtns = styled.button`
  width: 300px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-size: 17px;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
  display: ${(props) => (props.isInput ? 'block' : 'none')}
`;

const LoginForm = styled.form`
  margin-top: 50px;
`;

const LockLogoBox = styled.div`
  width: 29px;
  height: 29px;
  margin-top: -30px;
  margin-left: 260px;
`;

const PasswordInput = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid #E5E7E9;
  margin-left: 260px;
  padding-left: 40px;
  padding-top: 10px;
  margin-top: 20px;
  transition: border-bottom 1s ease;
  &:focus {
    border-bottom: 1px solid black;
  }
`;

const EmailLogoBox = styled.div`
  width: 29px;
  height: 29px;
  margin-top: -30px;
  margin-left: 260px;
`;

const InputEmail = styled.input`
  width: 300px;
  height: 40px;
  border-bottom: 1px solid #E5E7E9;
  margin-left: 260px;
  padding-left: 40px;
  padding-top: 10px;
  transition: border-bottom 1s ease;
  &:focus {
    border-bottom: 1px solid black;
  }
`;

const Title = styled.p`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  margin-top: 80px;
`;

export default LoginModal;
