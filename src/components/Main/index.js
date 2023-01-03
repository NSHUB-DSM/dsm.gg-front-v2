import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as MainLogo } from '../../assets/svgs/mainLogo.svg';
import useScrollFadeIn from './hooks';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const animationItem = useScrollFadeIn();
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/search');
    }

    return (
        <Background>
            <MainLogoStyle />
            <TextStyle>
                <p>게임</p>
                <p className="purple">전적 검색</p>
                <p className="purple">실시간</p>
                <p>매칭 서비스</p>
            </TextStyle>
            <MoveBtn onClick={onClick} {...animationItem}>
                둘러보기
            </MoveBtn>
            <Space />
        </Background>
    )
}

const Space = styled.div`
  min-width: 500px;
  min-height: 200px;
`

const MoveBtn = styled.button`
  width: 192px;
  height: 72px;
  background-color: black;
  border-radius: 40px;
  border: none;
  font-size: 25px;
  color: white;
  margin-left: 742px;
  margin-top: 150px;
  cursor: pointer;
`

const easeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
  }
`

const TextStyle = styled.div`
  width: 916px;
  height: 252px;
  p {
    font-size: 70px;
    font-weight: 600;
    margin: 0px;
    :nth-child(4) {
        padding-left: 206px;
        margin-top: -83px;
    }
  }
  .purple {
    color: #7B5EB4;
  }
  margin-left: 200px;
  margin-top: 314px;
  animation: ${easeIn} 1s ease-in;
`

const MainLogoStyle = styled(MainLogo)`
  margin-top: 44px;
  margin-left: 40px;
`

const Background = styled.div`
  width: 100vw;
  height: 100vh;
`