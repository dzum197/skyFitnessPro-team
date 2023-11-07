import * as S from './styles'
import logo from "../../img/logoProfile.png";
import avatar from "../../img/avatar.png";

export function HeaderProfile() {
  return (
    <S.Header>
      <S.Logo src={logo}/>
      <S.UserItem>
        <S.Avatar src={avatar}/>
        <S.UserName>Сергей</S.UserName>
      </S.UserItem>
    </S.Header>
  );
}
