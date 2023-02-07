import React, { useState } from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../../pages/Main/hooks";

const SelectOptions = () => {
  const animationItem = useScrollFadeIn();
  const gameList = [
    {
      id: 0,
      name: "일반 게임",
    },
    {
      id: 1,
      name: "개인/2인 랭크 게임",
    },
    {
      id: 2,
      name: "자유 랭크 게임",
    },
    {
      id: 3,
      name: "칼바람 나락",
    },
    {
      id: 4,
      name: "롤토체스",
    },
    {
      id: 5,
      name: "우르프",
    },
    {
      id: 6,
      name: "단일 챔피언",
    },
    {
      id: 7,
      name: "궁극기 주문서",
    },
  ];

  const [game, setGame] = useState("");

  return (
    <>
      <TopSpace />
      <Title>게임 종류 선택</Title>
      <Space />
      <OptionsContainer>
        <div>
          <GameChoice onChange={(e) => setGame(e.target.value)} value={game}>
            {gameList.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </GameChoice>
          <MiddleSpace />
          {game} 선택됨
        </div>
      </OptionsContainer>
      <BottomSpace />
      <BtnContainer {...animationItem}>
        <MakeBtn>완료</MakeBtn>
      </BtnContainer>
    </>
  );
};

export default SelectOptions;

const Space = styled.div`
  height: 180px;
`

const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`


const MiddleSpace = styled.div`
  height: 40px;
`;

const BtnContainer = styled.div`
  width: 160px;
  height: 60px;
  margin: 0 auto;
`;

const MakeBtn = styled.button`
  width: 160px;
  height: 60px;
  font-size: 20px;
  background-color: black;
  color: white;
  border-radius: 25px;
  margin-top: -100px;
  cursor: pointer;
`;

const BottomSpace = styled.div`
  height: 500px;
`;

const TopSpace = styled.div`
  height: 100px;
`;


const GameChoice = styled.select`
  width: 200px;
  height: 60px;
  background-color: #f8f8f8;
  border: 0.5px solid #808B96;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  margin-top: 21px;
  font-weight: 560;
  margin-right: 5px;
  padding-left: 10px;
  border-radius: 5px;
  font-size: 20px;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
