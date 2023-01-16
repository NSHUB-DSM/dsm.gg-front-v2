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
      <BackgroundImage {...animationItem}>
        <img src={BackImage} alt="배경 이미지" />
      </BackgroundImage>
    </>
  );
}

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  transform: 0.5s ease-in-out;
`;
