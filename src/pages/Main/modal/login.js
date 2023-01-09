import React from "react";
import "../modal/modal.css";
import styled from 'styled-components';
import emaliLogo from '../../../assets/imgs/email.png';
import lock from '../../../assets/imgs/password.png';

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
            <Title>LOGIN</Title>
            <br />
            <form>
                <InputEmail placeholder="이메일을 입력해주세요."/>
                <EmailLogoBox>
                    <img src={emaliLogo} alt="이미지" />
                </EmailLogoBox>
            </form>
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

const EmailLogoBox = styled.div`
  width: 29px;
  height: 29px;
  margin-top: -30px;
  margin-left: 230px;
`

const InputEmail = styled.input`
  width: 350px;
  height: 40px;
  border-bottom: 1px solid black;
  margin-left: 230px;
  padding-left: 40px;
  padding-top: 10px;
`

const Title = styled.p`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
`

export default LoginModal;
