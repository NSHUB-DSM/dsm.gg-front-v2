import styled, { keyframes } from "styled-components";
import useScrollFadeIn from "../Main/hooks";
import useTitle from "../../components/Title/hook";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/create_logo.jpeg";

export default function CreateMatch() {
  const animationItem = useScrollFadeIn();
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("매칭 생성 | DSM.GG"));

  return (
    <>
      <TopSpace />
      <div>
        <Title>매칭을 만들어 소통해보세요!</Title>
      </div>
      <BottomSpace />
      <Box {...animationItem}>
        <BoxContainer>
          <LogoContainer>
            <LogoStyle src={logo} alt="이미지 " />
          </LogoContainer>
          <TextContainer>
            <BoxTitle>원하는 게임을 선택하고 만들어서 소통해보세요!</BoxTitle>
            <FisrtDescription>
              개인/2인 랭크게임, 우르프, 칼바람 나락 등 인기있는 게임들을 즐겨보세요!
            </FisrtDescription>
          </TextContainer>
        </BoxContainer>
      </Box>
    </>
  );
}

const FisrtDescription = styled.p`
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
  animation: ${easeIn} 2s ease-in;
`;
