import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


export default function Search() {
    return (
        <>
          <SearchInput placeholder="소환사의 닉네임을 입력해주세요."/>
        </>
    )
}

const SearchInput = styled.input`
  width: 660px;
  height: 65px;
  margin-left: 500px;
  margin-top: 50px;
  border: 1px solid #B2A1D4;
  border-radius: 7px;
  box-shadow: 1px 1px 1px gray;
  font-size: 18px;
  padding-left: 30px;
  
`