import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid grey;
  box-shadow: 5px 5px 5px grey;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
  white-space: nowrap;
`;

const Contents = styled.div`
  color: #666;
  font-size: 14px;
  line-height: 21px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  color: #959595;
  font-size: 12px;
  overflow: hidden;
  margin-top: 30px;
`;

const Detail = styled.div`
  margin-right: 5px;
`;

const Image = styled.img`
  background-color: black;
  display: block;
  width: 100px;
  aspect-ratio: auto 120 / 120;
`;

const Card = ({ title, contents, count, date, creater }) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
        <Details>
          <Detail>댓글 {count}</Detail>
          <Detail>• {date}분전</Detail>
          <Detail>• by {creater}</Detail>
        </Details>
      </div>
      <Image />
    </Container>
  );
};

export default Card;
