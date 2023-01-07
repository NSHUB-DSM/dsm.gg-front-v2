import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/header';
import logo from '../../assets/imgs/searchGameLogo.png';
import Search from '../../components/Search';
import useTitle from '../../components/Title/hook';

export default function SearchPage() {
    const titleUpdater = useTitle("불러오는 중...");
    setTimeout(() => titleUpdater("소환사 전적 검색 - DSM.GG"))

    return (
        <Background>
            <Header />
            <LogoStyle>
                <img src={logo} alt="로고 이미지" />
            </LogoStyle>
            <Search />
        </Background>
    )
}

const LogoStyle = styled.div`
  margin-left: 607px;
  margin-top: 80px;
`

const Background = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
`