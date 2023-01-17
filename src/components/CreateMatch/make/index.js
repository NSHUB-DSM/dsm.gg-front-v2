import React from "react";
import styled from "styled-components";
import Header from "../../Header/header";

const SelectOptions = () => {

    return (
        <>
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
                        <optgroup>실버</optgroup>
                    </TierChoice>
                </div>
            </OptionsContainer>
        </>
    )
}

export default SelectOptions;

const TierChoice = styled.select`
  width: 96px;
  height: 32px;
  background-color: #f8f8f8;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  margin-top: 21px;
  font-weight: 500;
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
`;

const OptionsContainer = styled.div`
  
`