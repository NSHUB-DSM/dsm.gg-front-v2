import styled from "styled-components";
import React, { useState } from "react";
import { ReactComponent as MainLogo } from "../../assets/svgs/s_mainLogo.svg";
import { ReactComponent as GameLogo } from "../../assets/svgs/gameLogo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../pages/Main/modal/login";

const Header = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <MainLogoStyle onClick={handleHomeClick} />
          <GameLogoStyle />
        </LogoContainer>
        <MenuContainer>
          <ItemList>
            <Item>
              <LinkStyle to="/search">홈</LinkStyle>
            </Item>
            <Item>매칭 생성</Item>
            <Item>매칭</Item>
            <Item>커뮤니티</Item>
          </ItemList>
        </MenuContainer>
        <LoginContainer>
          <LoginBtn
          onClick={() => {setModalOpen(true)}}
          >
            로그인
          </LoginBtn>
        </LoginContainer>
      </HeaderContainer>
      <LoginModal open={modalOpen} close={() => {setModalOpen(false)}}>
        Hello!!!
      </LoginModal>
    </>
  );
};

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const LoginBtn = styled.button`
  width: 94px;
  height: 47px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 17px;
  font-size: 18px;
  cursor: pointer;
`;

const Item = styled.li`
  padding: 8px 28px;
  font-size: 20px;
`;

const ItemList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const GameLogoStyle = styled(GameLogo)`
  margin-left: 51px;
  margin-bottom: -3px;
`;

const MainLogoStyle = styled(MainLogo)`
  padding-left: 24px;
  padding-top: 15px;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  padding-top: 17px;
  padding-right: 30px;
`;

const MenuContainer = styled.div`
  padding-top: 27px;
  padding-right: 200px;
`;

const LogoContainer = styled.div``;

const HeaderContainer = styled.nav`
  width: 100vw;
  height: 122px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default Header;