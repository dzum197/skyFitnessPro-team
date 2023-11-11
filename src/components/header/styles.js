import styled from "styled-components";
export const Header = styled.header`
  padding-top:30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-width:1140px;
  margin:0 auto;
`;
export const Logo = styled.img`
  
`;
export const Button = styled.div`
  padding:6px 16px;
  background:#140D40;
  border-radius:46px;
  color:#fff;
  cursor:pointer;
  &:hover{
    background:#2D1F79;
}
&:active{
    background:#3B29A1;

}
`;