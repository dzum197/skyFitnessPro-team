import styled from "styled-components";

export const Container = styled.div`
  max-width:1440px;
  margin:0 auto;
  

  @font-face {
    font-family: 'StratosSkyeng';
    src: url('../fonts/Stratos-Regular.woff') format('truetype');
  }
  font-family: 'StratosSkyeng', sans-serif;
`;
export const YogaDesc = styled.div`
  width:100vw;
  min-height:100vh;
  background:#FAFAFA;
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

export const YogaDescImage = styled.img`
  width: 1160px;
  height: 310px;
  margin-top: 50px;
`;

export const upperBlock = styled.div`
  display: flex;
`;

export const bigText = styled.div`
  font-family: 'StratosSkyeng', sans-serif;
  font-weight: 400;
  font-size: 40px;
  margin-top: 40px;
`;

export const numbersBlock = styled.div`
  display: flex;
  gap: 10vh;
`;
export const numberBox = styled.div`
  width: 335px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: 25px;
`;
export const number = styled.img`
  width: 67px;
  height: 67px;
  display: flex;
`;
export const numberText = styled.div`
  font-family: 'StratosSkyeng', sans-serif;
  font-weight: 400;
  font-size: 24px;
`;

export const middleTextBlock = styled.div`
  display: flex;
  gap: 20vh;
  margin-top: 20px;
  font-family: 'StratosSkyeng', sans-serif;
  font-weight: 400;
  font-size: 24px;
`;

export const ColumnInfoText = styled.div`
  
`;

export const secondColumnInfoText = styled.div`

`;

export const ColumnInfoItem = styled.div`
  margin-bottom: 10px;
`;

export const nextMiddleTextBlock = styled.div`
  font-family: 'StratosSkyeng', sans-serif;
  font-weight: 400;
  font-size: 24px;

  margin-top: 40px;
  margin-bottom: 40px;
  width: 1160px;
`;
export const lastTextBlock = styled.div`
  font-family: 'StratosSkyeng', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;

  width: 1160px;
  height: 300px;
  background-color: #F9EBFF;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const lastText = styled.div`
  display: flex;
`;
export const lastTextButton = styled.div`
  width: 275px;
  height: 52px;
  color: #ffffff;
  font-size: 18px;
  background-color: #580EA2;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`;

export const phoneHand = styled.img`
  width: 345px;
  height: 337px;
`;

