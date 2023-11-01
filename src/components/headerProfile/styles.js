import styles from "styled-components";

export const Header = styles.header`
padding-top: 30px;
width:100%;
background:white;
display: flex;
justify-content: space-between;
font-family: 'StratosSkyeng', sans-serif;

  @font-face {
    font-family: 'StratosSkyeng';
    src: url('../fonts/Stratos-Regular.woff') format('truetype');
  }
 
  font-family: 'StratosSkyeng', sans-serif;
`;

export const UserItem = styles.div`
width:168.36px;
height:50px;
display: flex;
justify-content: space-around;
align-items: center;
`;

export const UserName = styles.p`
width:80px;
height:32px;
`;

export const Logo = styles.img`
width:220px;
height:35px;
`;

export const Avatar = styles.img`
width: 50px;
height: 50px;
border-radius: 17px;
`;