import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/header';

export default function SearchPage() {

    return (
        <Background>
            <Header />
        </Background>
    )
}

const Background = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
`