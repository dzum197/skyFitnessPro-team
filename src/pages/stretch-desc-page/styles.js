import styled from "styled-components";

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  font-family: "StratosSkyeng", sans-serif;
  @font-face {
    font-family: "StratosSkyeng";
    src: url("../fonts/Stratos-Regular.woff") format("truetype");
  }
  font-family: "StratosSkyeng", sans-serif;
`;
export const StretchDesc = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fafafa;
`; 

export const imgBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const lightLogo = styled.img`
  width: 220px;
  height: 35px;
  margin-top: 35px;
`;

export const StretchDescImage = styled.img`
  margin-top: 50px;
`;

export const upperBlock = styled.div`
  margin-top: 50px;
`;

export const bigText = styled.div`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`;

export const numbersBlock = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 52px;
`;
export const numberBox = styled.div``;
export const number = styled.img``;
export const numberText = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const middleTextBlock = styled.div`
  margin-top: 50px;
`;

export const ColumnInfoText = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const ColumnInfoItem = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const nextMiddleTextBlock = styled.div`
  margin-top: 50px;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const lastTextBlock = styled.div`
  margin-top: 50px;
  width: 1160px;
  height: 300px;
  background-color: #f9ebff;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
`;

export const TextAndButtonBlock = styled.div`
  grid-column: span 14;
`;

export const lastText = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  padding-top: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
`;
export const lastTextButton = styled.div`
  width: 275px;
  height: 52px;
  background: #580ea2;
  border-radius: 46px;
  color: #ffffff;
  transition: all 0.5s;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-left: 40px;
  text-align: center;
  padding-top: 12px;
`;

export const phoneHand = styled.img``;