import React from "react";
import styled from "styled-components";

const BoxWrap = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 200px;
`;

const SmallBox = styled.a`
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const Box = (props) => {
  const {
    data
  } = props;

  return(
    <BoxWrap>
      {
        data.map((item, index) => {
          // return <a className={"box"}>{item.text}</a>
          return <SmallBox>{item.text}</SmallBox>
        })
      }
      
      
    </BoxWrap>
  )
}

export default Box;