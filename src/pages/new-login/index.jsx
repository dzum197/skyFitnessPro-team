import * as S from './styles'
import logo from "../../img/logoProfile.png";

export function NewLogin() {
  return (
    <S.MainBlock>
      <S.ConteinerBlock>
        <S.Logo src={logo} />
        <S.PasswordInput>
          <S.NewPasswordText>Новый логин:</S.NewPasswordText>
          <S.InputForm>
            <S.PasswordInputValue>
              <S.InputValue type="text" placeholder="Логин" />
            </S.PasswordInputValue>
            <S.ButtonBlock>
              <S.Button>Сохранить</S.Button>
            </S.ButtonBlock>
          </S.InputForm>
        </S.PasswordInput>
      </S.ConteinerBlock>
    </S.MainBlock>
  );
}
