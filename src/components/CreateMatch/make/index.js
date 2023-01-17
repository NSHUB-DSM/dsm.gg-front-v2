import React from "react";
import styled from "styled-components";
import Header from "../../Header/header";
import useScrollFadeIn from "../../../pages/Main/hooks";

const SelectOptions = () => {
    const animationItem = useScrollFadeIn();

    return (
        <>
            <TopSpace />
            <OptionsContainer>
                <div>
                    <GameTitle>게임 선택</GameTitle>
                    <GameChoice>
                        <option>일반 게임</option>
                        <option>개인/2인 랭크 게임</option>
                        <option>자유 랭크 게임</option>
                        <option>칼바람 나락</option>
                        <option>롤토체스</option>
                        <option>우르프</option>
                        <option>단일 챔피언</option>
                        <option>궁극기 주문서</option>
                    </GameChoice>
                </div>
                <div>
                    <TierTitle>티어 제한</TierTitle>
                    <TierChoice>
                        <option>아이언</option>
                        <option>브론즈</option>
                        <option>실버</option>
                        <option>골드</option>
                        <option>플래티넘</option>
                        <option>다이아몬드</option>
                        <option>마스터</option>
                        <option>그랜드마스터</option>
                        <option>챌린저</option>
                    </TierChoice>
                </div>
                <div>
                    <PeopleTitle>인원</PeopleTitle>
                    <PeopleChoice>
                        <option>1명</option>
                        <option>2명</option>
                        <option>3명</option>
                        <option>4명</option>
                        <option>5명</option>
                    </PeopleChoice>
                </div>
            </OptionsContainer>
            <BottomSpace />
            <BtnContainer {...animationItem}>
                <MakeBtn>완료</MakeBtn>
            </BtnContainer>
        </>
    )
}

export default SelectOptions;

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
`

const TopSpace = styled.div`
  height: 200px;
`

const PeopleChoice = styled.select`
  width: 96px;
  height: 32px;
  background-color: #f8f8f8;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  margin-top: 21px;
  font-weight: 500;
  padding-left: 20px;
`;

const PeopleTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  padding-left: 10px;
`;

const TierChoice = styled.select`
  width: 96px;
  height: 32px;
  background-color: #f8f8f8;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  margin-top: 21px;
  font-weight: 500;
  margin-left: 10px;
  padding-left: 10px;
`;

const TierTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const GameTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
`

const GameChoice = styled.select`
  width: 96px;
  height: 32px;
  background-color: #f8f8f8;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  margin-top: 21px;
  font-weight: 500;
  margin-left: 10px;
  padding-left: 10px;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`