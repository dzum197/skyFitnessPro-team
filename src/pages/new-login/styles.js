import styles from "styled-components";

export const MainBlock = styles.div`
background-color: #d1d3d6;
display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5%;
    width: 100%;
    height: 100vh;
`;

export const ConteinerBlock = styles.div`
width:366px;
height:331px;
background-color:#FFFFFF;
border-radius: 12px;
padding-top: 33px;
display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'StratosSkyeng', sans-serif;

  @font-face {
    font-family: 'StratosSkyeng';
    src: url('../fonts/Stratos-Regular.woff') format('truetype');
  }
`;

export const Logo = styles.img`
width:220px;
height:35px;
`;

export const PasswordInput = styles.div`
display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const NewPasswordText = styles.p`
font-weight: 400;
font-size: 18px;
line-height: 24x;
padding-bottom: 20px
`;

export const InputForm = styles.div`

`;

export const PasswordInputValue = styles.div`

`;

export const InputValue = styles.input`
border: none;
  border-bottom: 1px solid #D0CECE;
  width: 278.5px;
height: 52px;
font-weight: 400;
font-size: 18px;
line-height: 24px;
`;

export const ButtonBlock = styles.div`
display: flex;
    justify-content: center;
`;

export const Button = styles.button`
margin-top: 52px;
width:275px;
height:52px;
background: #580EA2;
border-radius: 46px;
color: #ffffff;
transition: all 0.5s;
font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

