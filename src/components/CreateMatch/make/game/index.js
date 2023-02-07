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

  const tierList = [
    {
      id: 0,
      tier: "아이언",
    },
    {
      id: 1,
      tier: "브론즈",
    },
    {
      id: 2,
      tier: "실버",
    },
    {
      id: 3,
      tier: "골드",
    },
    {
      id: 4,
      tier: "플래티넘",
    },
    {
      id: 5,
      tier: "다이아몬드",
    },
    {
      id: 6,
      tier: "마스터",
    },
    {
      id: 7,
      tier: "그랜드마스터",
    },
    {
      id: 8,
      tier: "챌린저",
    },
  ];

  const peopleNumber = [
    {
      id: 0,
      number: 1,
    },
    {
      id: 1,
      number: 2,
    },
    {
      id: 2,
      number: 3,
    },
    {
      id: 3,
      number: 4,
    },
    {
      id: 4,
      number: 5,
    },
  ];

  

  const [game, setGame] = useState("");
  const [tier, setTier] = useState("");
  const [people, setPeople] = useState(0);

  return (
    <>
      <TopSpace />
      <OptionsContainer>
        <div>
          <GameTitle>게임 선택</GameTitle>
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
  height: 280px;
`;


const GameTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const GameChoice = styled.select`
  width: 145px;
  height: 40px;
  background-color: #f8f8f8;
  border: 0.5px solid #808B96;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  margin-top: 21px;
  font-weight: 500;
  margin-right: 5px;
  padding-left: 10px;
  border-radius: 5px;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
