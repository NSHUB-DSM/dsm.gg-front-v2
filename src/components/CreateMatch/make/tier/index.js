import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    BottomSpace,
  Description,
  GameChoice,
  MiddleSpace,
  NextBtn,
  NoneSelect,
  OptionsContainer,
  Space,
  Title,
  TopSpace,
} from "../game";

const TierOptions = () => {
  const tierList = [
    {
      id: 0,
      name: "선택하기",
    },
    {
      id: 1,
      name: "아이언",
    },
    {
      id: 2,
      name: "브론즈",
    },
    {
      id: 3,
      name: "실버",
    },
    {
      id: 4,
      name: "골드",
    },
    {
      id: 5,
      name: "플래티넘",
    },
    {
      id: 6,
      name: "다이아몬드",
    },
    {
      id: 7,
      name: "마스터",
    },
    {
      id: 8,
      name: "그랜드마스터",
    },
    {
      id: 9,
      name: "챌린저",
    },
  ];

  const [tier, setTier] = useState("");
  const [isSelect, setIsSelect] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setTier(e.target.value);
    setIsSelect(true);
  };

  const onClick = () => {
    alert(`${tier} 티어가 선택되었습니다.`)
    navigate("/match/create/people")
  }

  return (
    <>
      <TopSpace />
      <Title>티어 제한 선택</Title>
      <Space />
      <OptionsContainer>
        <div>
          <GameChoice value={tier} onChange={onChange}>
            {tierList.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </GameChoice>
          <MiddleSpace />
          {isSelect ? (
            <Description>{tier} 선택됨</Description>
          ) : (
            <NoneSelect>제한할 티어를 선택하세요!</NoneSelect>
          )}
        </div>
      </OptionsContainer>
      <BottomSpace />
      {isSelect && <NextBtn onClick={onClick}>다음 단계로 넘어가기 &gt;</NextBtn>}
    </>
  );
};

export default TierOptions;
