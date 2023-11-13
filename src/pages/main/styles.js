import styled from "styled-components";
export const Container = styled.div`
  max-width:1140px;
  margin:0 auto;
`;
export const MainPage = styled.div`
  width:100vw;
  min-height:100vh;
  background:#271A58;
`;
export const upperBlock = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:35px;
`;
export const textBlock = styled.div`
  
`;
export const mainImg = styled.img`
  
`;
export const title = styled.div`
  color:#F4F4FF;
  text-align:left;
  max-width:830px;
  font-size:60px;   
    line-height:54.9px;
    letter-Spacing:-1.17px;
`;
export const info = styled.div`
  color:#fff;
  font-size:20px;   
  line-height:23px;
  letter-Spacing:-0.05px;
  opacity:0.5;
  margin-bottom:17px;
`;

export const cardsBlock = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin: 0 -15px
  `;
export const card = styled.div`
    margin: 15px 15px;
    width:360px;
    position:relative;
`;
export const cardImg = styled.img`
    width:100%;
`;
export const cardText = styled.div`
    color:#000;
    position:absolute;
    top:30px;
    left:30px;
`;
export const toTop = styled.div`
    margin-top:34px;
    background:#C7E957;
    padding:8px 24px;
    font-size:24px;
    color:#000000;
    margin:34px auto;
    width:100px;
    display:flex;   
    border-radius:46px;
    cursor:pointer;
    &:hover{
        background:#DAF289;
    }
    &:active{
        background:#EBFFAB;

    }
`;
