import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/header';
import SignupInput from '../../components/Signup';

export default function SignupPage() {
    return (
        <>
          <Header />
          <Title>회원가입</Title>
          <Space />
          <SignupInput />
        </>
    )
}

const Space = styled.div`
  height: 70px;
`

const Title = styled.p`
 font-size: 40px;
 font-weight: 600;
 text-align: center;
 margin-top: 20px;
`