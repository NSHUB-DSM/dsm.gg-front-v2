import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/header";
import BackImage from '../../assets/svgs/back_image.svg';
import useScrollFadeIn from "../Main/hooks";
import useTitle from "../../components/Title/hook";

export default function CreateMatch() {
  const animationItem = useScrollFadeIn();
  const titleUpdater = useTitle("불러오는 중...")
  setTimeout(() => titleUpdater("매칭 생성 - DSM.GG"))

  return (
    <>
      <Header />
      <TopSpace />
      <div>
        <Title>매칭을 만들어 소통해보세요!</Title>
      </div>
      <BottomSpace />
      <BtnContainer {...animationItem}>
        <CreateBtn>만들기</CreateBtn>
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
  height: 250px;
`

const Title = styled.p`
  font-size: 60px;
  color: black;
  text-align: center;
  font-weight: 600;
  animation: ${easeIn} 2s ease-in;
`;

