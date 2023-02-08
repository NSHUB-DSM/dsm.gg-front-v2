import styled, { keyframes } from "styled-components";
import useScrollFadeIn from "../Main/hooks";
import useTitle from "../../components/Title/hook";
import logo from "../../assets/imgs/create_logo.jpeg";
import tier from '../../assets/imgs/tier.png';
import { useEffect, useState } from "react";

export default function CreateMatch() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const animationItem = useScrollFadeIn();
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("매칭 생성 | DSM.GG"));

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
  }, []);

  return (
    <>
      <TopSpace />
      <div>
        <Title>매칭을 만들어 소통해보세요!</Title>
      </div>
      <BottomSpace />
      <Box>
        <BoxContainer isScroll={scrollPosition}>
          <LogoContainer>
            <LogoStyle src={logo} alt="이미지 " />
          </LogoContainer>
          <TextContainer>
            <BoxTitle>원하는 게임을 선택하고 만들어서 소통해보세요!</BoxTitle>
            <Description>
              개인/2인 랭크게임, 우르프, 칼바람 나락 등 인기있는 게임들을 즐겨보세요!
            </Description>
          </TextContainer>
        </BoxContainer>
      </Box>
      <SecondBox>
        <BoxContainer>
          <LogoContainer>
            <LogoStyle src={tier} alt="티어" />
          </LogoContainer>
          <TextContainer>
            <BoxTitle>티어를 제한해 재미를 극대화 해보세요!</BoxTitle>
          </TextContainer>
        </BoxContainer>
      </SecondBox>
    </>
  );
}

const SecondBox = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  background-color: white;
`

const Description = styled.p`
  font-size: 20px;
  width: 380px;
  height: 97.5px;
  margin-top: 30px;
`


const TextContainer = styled.div`
  display: flex;
  float: right;
  flex-direction: column;
  margin-left: 200px;
`

const BoxContainer = styled.div`
  display: flex;
  padding: 120px 40px 120px 40px;
  margin: 0 auto;
  animation: ${(props) => (props.isScroll > 100 ? easeIn : 0)} 1s;
`


const BoxTitle = styled.p`
  font-size: 48px;
  font-weight: 800;
  width: 380px;
  height: 172.78px;
`

const LogoStyle = styled.img``;

const LogoContainer = styled.div`
`;

const Box = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  background-color: #F7F7F7;
`;

const BottomSpace = styled.div`
  height: 500px;
`;

const easeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(20px);
  }

  100% {
    opacity: 1;
  }
`;

const TopSpace = styled.div`
  height: 440px;
`;

const Title = styled.p`
  font-size: 60px;
  color: black;
  text-align: center;
  font-weight: 600;
  animation: ${easeIn} 1s ease-in;
`;
