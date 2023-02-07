import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/header";
import useScrollFadeIn from "../Main/hooks";
import useTitle from "../../components/Title/hook";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export default function CreateMatch() {
  const animationItem = useScrollFadeIn();
  const titleUpdater = useTitle("불러오는 중...")
  setTimeout(() => titleUpdater("매칭 생성 | DSM.GG"))
  const navigate = useNavigate();

  return (
    <>
      <TopSpace />
      <div>
        <Title>매칭을 만들어 소통해보세요!</Title>
      </div>
      <BottomSpace />
      <BtnContainer {...animationItem}>
        <CreateBtn onClick={() => navigate("/match/create")}>만들기</CreateBtn>
      </BtnContainer>
    </>
  );
}


const BtnContainer = styled.div`
  width: 160px;
  height: 60px;
  margin: 0 auto;
`

const CreateBtn = styled.button`
  width: 160px;
  height: 60px;
  background-color: black;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 25px;
  margin-top: -100px;
  cursor: pointer;
`

const BottomSpace = styled.div`
  height: 500px;
`

const easeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(20px);
  }

  100% {
    opacity: 1;
  }
`

const TopSpace = styled.div`
  height: 440px;
`

const Title = styled.p`
  font-size: 60px;
  color: black;
  text-align: center;
  font-weight: 600;
  animation: ${easeIn} 2s ease-in;
`;

