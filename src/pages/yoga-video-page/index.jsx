import * as S from "./styles";
import { HeaderProfile } from "../../components/headerProfile";
import ReactPlayer from "react-player/youtube";

export function YogaVideo() {
  return (
    <S.ProfilePage>
      <S.Container>
        <HeaderProfile></HeaderProfile>
        <S.ProfileBlock>
          <S.MainText>Йога</S.MainText>
          <S.EntryText>
            Красота и здоровье / Йога на каждый день / 2 день / Алексей
            Казубский
          </S.EntryText>
          <ReactPlayer url="https://youtu.be/v-xTLFDhoD0" />
        </S.ProfileBlock>
        <S.MyCourses>
        <S.EntryText>
            Упражнения
          </S.EntryText>
          <S.ColumnInfoText>
            <S.ColumnInfoItem>• Наклон вперед (10 повторений)</S.ColumnInfoItem>
            <S.ColumnInfoItem>• Наклон назад (10 повторений)</S.ColumnInfoItem>
            <S.ColumnInfoItem>• Поднятие ног, согнутых в коленях (5 повторений)</S.ColumnInfoItem>
          </S.ColumnInfoText>
          <S.ProfileButtonBlock>
          <S.Button>Заполнить свой прогресс</S.Button>
          </S.ProfileButtonBlock>
        </S.MyCourses>
      </S.Container>
    </S.ProfilePage>
  );
}
