import Header from '../../components/Header/header';
import styled from "styled-components";

const Community = () => {
  return (
    <>
      <Header></Header>
      <CommunityContainer>
        <Left>
          <Choice />
        </Left>
        <Right>
          <CommunityHeader>
            <p>전체</p>
            <p>인기</p>
            <p>최신</p>
          </CommunityHeader>
        </Right>
      </CommunityContainer>
    </>
  );
};

export default Community;

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
  border: 1px solid #000000;
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
`;
