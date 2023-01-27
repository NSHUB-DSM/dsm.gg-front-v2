import Header from "../../components/Header/header";
import styled from "styled-components";
import useTitle from "../../components/Title/hook";

const Community = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("커뮤니티 | DSM.GG"));

  return (
    <>
      <Header></Header>
      <CommunityContainer>
        <Left>
          <Choice />
        </Left>
        <Right>
          <CommunityHeader>
            <Item>전체</Item>
            <Item>인기</Item>
            <Item>최신</Item>
            <InputContainer>
              <SearchCategory>제목</SearchCategory>
            </InputContainer>
          </CommunityHeader>
        </Right>
      </CommunityContainer>
    </>
  );
};

export default Community;


const SearchCategory = styled.div`
  width: 89px;
  height: 58px;
  padding-top: 14px;
  padding-left: 22px;
  font-size: 25px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  width: 594px;
  height: 58px;
  margin-left: 66px;
  border: 1px solid black;
`;

const Item = styled.p`
  cursor: pointer;
  transition: color 0.5s ease-in-out;
  &:hover {
    color: black;
  }
`;

const CommunityContainer = styled.div`
  width: 100%;
`;

const Left = styled.div`
  float: left;
  width: 30%;
  display: flex;
  justify-content: center;
`;

const Choice = styled.div`
  width: 330px;
  height: 500px;
  border: 0.5px solid #c2c2c2;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
  margin-top: 57px;
`;

const Right = styled.div`
  float: right;
  width: 70%;
`;

const CommunityHeader = styled.div`
  width: 1200px;
  height: 90px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  p {
    font-size: 25px;
    font-weight: bold;
    color: #a7a7a7;
    margin-left: 40px;
  }
  margin-top: 57px;
`;
