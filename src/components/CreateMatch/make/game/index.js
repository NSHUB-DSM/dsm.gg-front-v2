import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SelectOptions = () => {
  const gameList = [
    {
      id: 0,
      name: "선택하기",
    },
    {
      id: 1,
      name: "일반 게임",
    },
    {
      id: 2,
      name: "개인/2인 랭크 게임",
    },
    {
      id: 3,
      name: "자유 랭크 게임",
    },
    {
      id: 4,
      name: "칼바람 나락",
    },
    {
      id: 5,
      name: "롤토체스",
    },
    {
      id: 6,
      name: "우르프",
    },
    {
      id: 7,
      name: "단일 챔피언",
    },
    {
      id: 8,
      name: "궁극기 주문서",
    },
  ];

  const [game, setGame] = useState("");
  const [isSelect, setIsSelect] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setGame(e.target.value);
    setIsSelect(true);
  };

  const onClick = () => {
    alert(`${game}이 선택되었습니다.`)
    navigate("/match/create/tier")
  }

  return (
    <>
      <TopSpace />
      <Title>게임 종류 선택</Title>
      <Space />
      <OptionsContainer>
        <div>
          <GameChoice onChange={onChange} value={game}>
            {gameList.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </GameChoice>
          <MiddleSpace />
          {isSelect ? <Description>{game} 선택됨</Description> : <NoneSelect>게임 종류를 선택해주세요!</NoneSelect>}
        </div>
      </OptionsContainer>
      <BottomSpace />
      {isSelect && <NextBtn onClick={onClick}>다음 단계로 넘어가기 &gt;</NextBtn>}
    </>
  );
};

export default SelectOptions;

export const NoneSelect = styled.p`
  font-size: 18px;
  text-align: center;
  color: blue;
  font-weight: 550;
`

export const BottomSpace = styled.div`
  height: 100px;
`

export const NextBtn = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #2F96F0;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`


export const Description = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const Space = styled.div`
  height: 180px;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

export const MiddleSpace = styled.div`
  height: 40px;
`;

export const TopSpace = styled.div`
  height: 100px;
`;

export const GameChoice = styled.select`
  width: 200px;
  height: 60px;
  background-color: #f8f8f8;
  border: 0.5px solid #808b96;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  margin-top: 21px;
  font-weight: 560;
  margin-right: 5px;
  padding-left: 10px;
  border-radius: 5px;
  font-size: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
