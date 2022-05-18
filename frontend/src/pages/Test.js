import React from "react";
import Cards from "../components/Community/Cards";

const Test = () => {
  const items = [
    {
      id: 1,
      title: "testststst",
      contents: "testststst",
      comment_count: 0,
      date: "5", //datetime으로 변경해야됨
      creater: "테스터",
    },
    {
      id: 2,
      title: "testststst",
      contents: "testststst",
      comment_count: 0,
      date: "5", //datetime으로 변경해야됨
      creater: "테스터",
    },
    {
      id: 3,
      title: "testststst",
      contents: "testststst",
      comment_count: 0,
      date: "5", //datetime으로 변경해야됨
      creater: "테스터",
    },
    {
      id: 4,
      title: "testststst",
      contents: "testststst",
      comment_count: 0,
      date: "5", //datetime으로 변경해야됨
      creater: "테스터",
    },
  ];
  return (
    <div style={{ padding: 50 }}>
      <Cards items={items} />
    </div>
  );
};

export default Test;
