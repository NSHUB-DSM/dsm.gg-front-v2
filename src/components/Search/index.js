import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


export default function Search() {
    return (
        <>
          <InputContainer>
            <SearchInput placeholder="소환사의 닉네임을 입력하세요." />
          </InputContainer>
        </>
    )
}

const InputContainer = styled.div`
  width: 660px;
  height: 65px;
  margin: 0 auto;
`

const SearchInput = styled.input`
  width: 660px;
  height: 65px;
  border: 1px solid #B2A1D4;
  border-radius: 7px;
  box-shadow: 1px 1px 1px gray;
  font-size: 18px;
  padding-left: 30px;
  
`