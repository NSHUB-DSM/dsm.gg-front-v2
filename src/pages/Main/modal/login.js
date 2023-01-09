import React from "react";
import "../modal/modal.css";
import styled from "styled-components";
import emaliLogo from "../../../assets/imgs/email.png";
import lock from "../../../assets/imgs/password.png";

const LoginModal = (props) => {
  const { open, close, header } = props;

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
            <LoginForm>
              <InputEmail placeholder="이메일을 입력해주세요." type="email" />
              <EmailLogoBox>
                <img src={emaliLogo} alt="이미지" />
              </EmailLogoBox>
              <br />
              <PasswordInput
                placeholder="비밀번호를 입력해주세요."
                type="password"
              />
              <LockLogoBox>
                <img src={lock} alt="이미지" />
              </LockLogoBox>
              <LoginBtnContainer>
                <LoginBtn>로그인</LoginBtn>
              </LoginBtnContainer>
            </LoginForm>
          </main>
        </section>
      ) : null}
    </div>
  );
};

const LoginBtnContainer = styled.div`
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding-top: 40px;
`;

const LoginBtn = styled.button`
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
  border-bottom: 1px solid black;
  margin-left: 260px;
  padding-left: 40px;
  padding-top: 10px;
  margin-top: 20px;
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
  border-bottom: 1px solid black;
  margin-left: 260px;
  padding-left: 40px;
  padding-top: 10px;
`;

const Title = styled.p`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  margin-top: 80px;
`;

export default LoginModal;
