import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/header';
import SignupInput from '../../components/Signup';
import useTitle from '../../components/Title/hook';

export default function SignupPage() {
    const titleUpdater = useTitle("불러오는 중...");
    setTimeout(() => titleUpdater("회원가입 - DSM.GG"));

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
 margin-top: 120px;
`