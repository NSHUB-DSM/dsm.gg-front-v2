import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

  const onChange = (e) => {
    setGame(e.target.value);
    setIsSelect(true);
  };

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
          <Description>{game} 선택됨</Description>
        </div>
      </OptionsContainer>
      {isSelect && (
        <p style={{ textAlign: 'center' }}>
          <LinkStyle to="/match/create/tier">
            다음 단계로 넘어가기 &gt;
          </LinkStyle>
        </p>
      )}
    </>
  );
};

export default SelectOptions;

const LinkStyle = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  color: #2f96f0;
  text-decoration: none;
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
`;

const Space = styled.div`
  height: 180px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

const MiddleSpace = styled.div`
  height: 40px;
`;

const TopSpace = styled.div`
  height: 100px;
`;

const GameChoice = styled.select`
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

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
