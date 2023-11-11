import * as S from "./styles";

export const Progress = ({ width, percent }) => {
    
  let progress = percent * width;

  return (
    <S.MainBlock>
      <S.ColumnInfoText>
        <S.MainEntryText>
          <S.EntryText>Мой прогресс по тренировке 2:</S.EntryText>
        </S.MainEntryText>
        <S.ProgressBlock>
          <S.ColumnInfo>
            <S.ColumnInfoItem>Наклоны вперед </S.ColumnInfoItem>
            <S.ColumnInfoItem>Наклон назад </S.ColumnInfoItem>
            <S.ColumnInfoItem>Поднятие ног, согнутых в коленях</S.ColumnInfoItem>
          </S.ColumnInfo>

          <S.UserItem>

            <S.UserItemForward style={{ width: width }}>
            <S.ProgressItemForward
              style={{ width: `${progress}px` }}
            ></S.ProgressItemForward>
          </S.UserItemForward>

          <S.UserItemBack style={{ width: width }}>
            <S.ProgressItemBack
              style={{ width: `${progress}px` }}
            ></S.ProgressItemBack>
          </S.UserItemBack>

          <S.UserItemKnees style={{ width: width }}>
            <S.ProgressItemKnees
              style={{ width: `${progress}px` }}
            ></S.ProgressItemKnees>
          </S.UserItemKnees>

          </S.UserItem>
        </S.ProgressBlock>
      </S.ColumnInfoText>
    </S.MainBlock>
  );
};
