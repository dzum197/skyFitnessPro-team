import * as S from './styles'
import logo from "../../img/logoProfile.png";

export function NewPassword() {
  return (
    <S.MainBlock>
      <S.ConteinerBlock>
        <S.Logo src={logo} />
        <S.PasswordInput>
          <S.NewPasswordText>Новый пароль:</S.NewPasswordText>
          <S.InputForm>
            <S.PasswordInputValue>
              <S.InputValue type="text" placeholder="Пароль" />
              <S.InputValue type="text" placeholder="Повторите пароль" />
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
