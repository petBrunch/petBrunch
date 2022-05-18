import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Box = styled.div`
  display: flex;
`;

const Cards = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <>
            <Card
              title={item.title}
              contents={item.contents}
              creater={item.creater}
              count={item.comment_count}
              date={item.date}
            />
            <div style={{ marginBottom: 20 }} />
          </>
        );
      })}
    </div>
  );
};

export default Cards;
