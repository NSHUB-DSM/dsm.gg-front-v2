import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  TopSpace,
  Title,
  Space,
  OptionsContainer,
  GameChoice,
  MiddleSpace,
  Description,
  NoneSelect,
  BottomSpace,
  NextBtn,
} from "../game";

const PeopleOptions = () => {
  const peopleList = [
    {
      id: 0,
      name: "선택하기",
    },
    {
      id: 1,
      people: 1,
    },
    {
      id: 2,
      people: 2,
    },
    {
      id: 3,
      people: 3,
    },
    {
      id: 4,
      people: 4,
    },
  ];

  const [people, setPeople] = useState(0);
  const [isSelect, setIsSelect] = useState(false);
  const navigate = useNavigate();
  
  const onChange = (e) => {
    setPeople(e.target.value);
    setIsSelect(true);
  }

  return (
    <>
      <TopSpace />
      <Title>인원 선택</Title>
      <Space />
      <OptionsContainer>
        <div>
            <GameChoice onChange={onChange} value={people}>
                {peopleList.map((item) => (
                    <option value={item.people} key={item.id}>
                        {item.people}
                    </option>
                ))}
            </GameChoice>
            <MiddleSpace />
            {isSelect ? <Description>{people}명 선택됨</Description> : <NoneSelect>총 인원을 선택해주세요!</NoneSelect>}
        </div>
      </OptionsContainer>
      <BottomSpace />
      {isSelect && <NextBtn>게임 생성하기 &gt;</NextBtn>}
    </>
  );
};

export default PeopleOptions;
