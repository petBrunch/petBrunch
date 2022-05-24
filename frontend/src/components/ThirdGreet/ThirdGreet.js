import { useMemo } from "react";
import styled from "styled-components";
import Box from './Box'

const Wrap = styled.div`
    width: 100%;
`;

const TextWrap = styled.div`
    width: 100%;
`;

const Title = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-family: Palatino Linotype;
`;

const SmallTitle = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 15px;
    color: #aaaaaa;
    margin-bottom: 50px;
`;

export default function ThirdGreet() {

    const data = useMemo(() => [
        {
            index: 0,
            text: "지구한바퀴 세계여행",
            date: "2021/03/21"
        },
        {
            index: 1,
            text: "시사, 이슈",
            date: "2022/06/21"
        },
        {
            index: 2,
            text: "글쓰기 코치",
            date: "2022/06/21"
        },
        {
            index: 3,
            text: "시사, 이슈",
            date: "2022/06/21"
        },
        {
            index: 4,
            text: "시사, 이슈",
            date: "2022/06/21"
        },
        {
            index: 5,
            text: "IT 트렌드",
            date: "2022/06/21"
        },
        {
            index: 6,
            text: "쉽게 읽는 역사",
            date: "2022/06/21"
        },
        {
            index: 7,
            text: "우리집 반려동물",
            date: "2022/06/21"
        },
        {
            index: 8,
            text: "사진, 촬영",
            date: "2022/06/21"
        },
        {
            index: 9,
            text: "그림, 웹툰",
            date: "2022/06/21"
        },
        {
            index: 10,
            text: "취향저격 영화 리뷰",
            date: "2022/06/21"
        },
        {
            index: 11,
            text: "오늘은 이런 책",
            date: "2022/06/21"
        },
        {
            index: 12,
            text: "뮤직 인사이드",
            date: "2022/06/21"
        },
        {
            index: 13,
            text: "직장인 현실 조언",
            date: "2022/06/21"
        },
        {
            index: 14,
            text: "스타트업 경험담",
            date: "2022/06/21"
        },
        {
            index: 15,
            text: "육아 이야기",
            date: "2022/06/21"
        },
        {
            index: 16,
            text: "요리, 레시피",
            date: "2022/06/21"
        },
        {
            index: 17,
            text: "건강, 운동",
            date: "2022/06/21"
        },
        {
            index: 18,
            text: "멘탈 관리 심리 탐구",
            date: "2022/06/21"
        },
        {
            index: 19,
            text: "디자인 스토리",
            date: "2022/06/21"
        },
        {
            index: 20,
            text: "문화, 예술",
            date: "2022/06/21"
        },
        {
            index: 21,
            text: "건축, 설계",
            date: "2022/06/21"
        },
        {
            index: 22,
            text: "인문학, 철학",
            date: "2022/06/21"
        },
        {
            index: 23,
            text: "사랑, 이별",
            date: "2022/06/21"
        },
        {
            index: 24,
            text: "감성 에세이",
            date: "2022/06/21"
        },
    ], [])

  return (
    <Wrap>
        <TextWrap>
            <Title>B R U N C H &nbsp;  K E Y W O R D</Title>
            <SmallTitle>키워드로 분류된 다양한 글 모음</SmallTitle>
        </TextWrap>
        <Box 
            data={data}    
        />
    </Wrap>
  );
}
