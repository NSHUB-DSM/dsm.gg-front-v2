import React from "react";
import styled from "styled-components";
import { useState } from "react";
import search from '../../assets/imgs/search.png';

export default function Search() {
  const [value, setValue] = useState("");
  const [isInput, setIsInput] = useState(false);
  const onChange = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setIsInput(false);
    } else {
      setIsInput(true);
    }
    setValue(e.target.value);
  };

  return (
    <>
      <InputContainer>
        <SearchInput
          placeholder="소환사의 닉네임을 입력하세요."
          value={value}
          onChange={onChange}
        />
        {isInput && <SearchBtn src={search} alt="검색하기"/>}
      </InputContainer>
    </>
  );
}


const SearchBtn = styled.img`
  width: 30px;
  float: right;
`;

const InputContainer = styled.div`
  width: 660px;
  height: 65px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 660px;
  height: 65px;
  border: 1px solid #b2a1d4;
  border-radius: 7px;
  box-shadow: 1px 1px 1px gray;
  font-size: 18px;
  padding-left: 30px;
`;
