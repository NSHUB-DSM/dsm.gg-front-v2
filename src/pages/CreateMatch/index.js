import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/header";
import BackImage from '../../assets/svgs/back_image.svg';
import useScrollFadeIn from "../Main/hooks";

export default function CreateMatch() {
  const animationItem = useScrollFadeIn();

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
