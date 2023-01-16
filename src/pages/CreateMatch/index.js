import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/header";
import BackImage from '../../assets/svgs/back_image.svg';
import useScrollFadeIn from "../Main/hooks";
import useTitle from "../../components/Title/hook";

export default function CreateMatch() {
  const titleUpdater = useTitle("불러오는 중...")
  setTimeout(() => titleUpdater("매칭 생성 - DSM.GG"))

  return (
    <>
      <Header />
      <Space />
      <div>
        <Title>매칭을 만들어 소통해보세요!</Title>
      </div>
    </>
  );
}

const Space = styled.div`
  height: 250px;
`

const Title = styled.p`
  font-size: 60px;
  color: black;
  text-align: center;
`;

