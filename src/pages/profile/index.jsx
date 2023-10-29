import { HeaderProfile } from "../../components/headerProfile";
import yoga from "../../img/yoga.png";
import stretching from "../../img/stretching.png";
import bodyflex from "../../img/bodyflex.png";

import {
  ProfilePage,
  Container,
  MainText,
  EntryText,
  ProfileBlock,
  ProfileButtonBlock,
  Button,
  MyCourses,
  Yoga, Stretching, Bodyflex
} from "./styles";

export function Profile() {
  return (
    <ProfilePage>
      <Container>
        <HeaderProfile></HeaderProfile>
        <ProfileBlock>
          <MainText>Мой профиль</MainText>
          <EntryText>Логин: sergey.petrov96</EntryText>
          <EntryText>Пароль: 4fkhdj880d</EntryText>
          <ProfileButtonBlock>
          <Button>Редактировать логин</Button>
          <Button>Редактировать пароль</Button>
          </ProfileButtonBlock>
        </ProfileBlock>
        <MyCourses>
          <MainText>Мои курсы</MainText>
          <Yoga src={yoga}/>
          <Stretching src={stretching}/>
          <Bodyflex src={bodyflex}/>
        </MyCourses>
      </Container>
    </ProfilePage>
  );
}
