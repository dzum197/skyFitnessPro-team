import styles from "styled-components";

export const MainBlock = styles.div`
margin-top: 50px;
  width: 638px;
  height: 336px;
  background-color: #F2F2F2;
  border-radius: 30px;
  display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EntryText = styles.p`
font-weight: 400;
font-size: 32px;
line-height: 40px;
padding-top: 30px;
padding-bottom: 30px;
`;

export const UserItemForward = styles.div`
background-color: #EDECFF;
    border-radius: 22px;
    width:278px;
    height:36px;
`;

export const ProgressItemForward = styles.div`
background-color: #565EEF;
height: 36px;
border-radius: 1rem;
`;

export const UserItemBack = styles.div`
background-color: #FFF2E0;
    border-radius: 22px;
    width:278px;
    height:36px;
`;

export const ProgressItemBack = styles.div`
background-color: #FF6D00;
height: 36px;
border-radius: 1rem;
`;

export const UserItemKnees = styles.div`
background-color: #F9EBFF;
    border-radius: 22px;
    width:278px;
    height:36px;
`;

export const ProgressItemKnees = styles.div`
background-color: #9A48F1;
height: 36px;
border-radius: 1rem;
`;

export const MainEntryText = styles.div`
text-align: center;
`;

export const ColumnInfoItem = styles.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 20px;
`;

export const ColumnInfoText = styles.div`
padding-top: 20px;
`;

export const ProgressBlock = styles.div`
display: flex;
    padding-left: 10%;
    padding-right: 10%;
`;

export const ColumnInfo = styles.div`
  
`;

export const UserItem = styles.div`
display: flex;
flex-direction: column;
gap: 20px;
`;