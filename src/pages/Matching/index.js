import Header from "../../components/Header/header";
import styled from "styled-components";
import useTitle from "../../components/Title/hook";

export default function Matching() {
    const titleUpdater = useTitle("불러오는 중...")
    setTimeout(() => titleUpdater("매칭 찾기 | DSM.GG"))

    return (
        <>
            <Header />
            <Title>매칭 찾기</Title>
        </>
    )
}

const Title = styled.p`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  margin-top: 94px;
`