import { Header, UserItem, UserName, Logo, Avatar } from "./styles";
import logo from "../../img/logoProfile.png";
import avatar from "../../img/avatar.png";

export function HeaderProfile() {
  return (
    <Header>
      <Logo src={logo}/>
      <UserItem>
        <Avatar src={avatar}/>
        <UserName>Сергей</UserName>
      </UserItem>
    </Header>
  );
}
