import styled, { keyframes } from "styled-components";
import useScrollFadeIn from "../Main/hooks";
import useTitle from "../../components/Title/hook";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/create_logo.jpeg";

export default function CreateMatch() {
  const animationItem = useScrollFadeIn();
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("매칭 생성 | DSM.GG"));
  const navigate = useNavigate();

  return (
    <>
      <TopSpace />
      <div>
        <Title>매칭을 만들어 소통해보세요!</Title>
      </div>
      <BottomSpace />
      <FirstBox {...animationItem}>
        
      </FirstBox>
    </>
  );
}


const BoxTitle = styled.p`
  font-size: 56px;
  font-weight: 600;
  text-align: center;
  margin-top: 30px;
`

const LogoStyle = styled.img``;

const LogoContainer = styled.div`
  padding: 100px;
`;

const FirstBox = styled.div`
  height: 600px;
  display: flex;
  background-color: #f7f7f7;
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
