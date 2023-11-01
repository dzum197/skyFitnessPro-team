import * as S from './styles'
import { HeaderProfile } from "../../components/headerProfile";
import yoga from "../../img/yoga.png";
import stretching from "../../img/stretching.png";
import bodyflex from "../../img/bodyflex.png";

export function Profile() {
  return (
    <S.ProfilePage>
      <S.Container>
        <HeaderProfile></HeaderProfile>
        <S.ProfileBlock>
          <S.MainText>Мой профиль</S.MainText>
          <S.EntryText>Логин: sergey.petrov96</S.EntryText>
          <S.EntryText>Пароль: 4fkhdj880d</S.EntryText>
          <S.ProfileButtonBlock>
          <S.Button>Редактировать логин</S.Button>
          <S.Button>Редактировать пароль</S.Button>
          </S.ProfileButtonBlock>
        </S.ProfileBlock>
        <S.MyCourses>
          <S.MainText>Мои курсы</S.MainText>
          <S.ImageBlock>
            <S.Yoga src={yoga}/>
          <S.Stretching src={stretching}/>
          <S.Bodyflex src={bodyflex}/>
          </S.ImageBlock>
        </S.MyCourses>
      </S.Container>
    </S.ProfilePage>
  );
}
