import {
  MainBlock,
  ConteinerBlock,
  Logo,
  PasswordInput,
  NewPasswordText,
  InputForm,
  PasswordInputValue,
  InputValue,
  ButtonBlock,
  Button,
} from "./styles";
import logo from "../../img/logoProfile.png";

export function NewPassword() {
  return (
    <MainBlock>
      <ConteinerBlock>
        <Logo src={logo} />
        <PasswordInput>
          <NewPasswordText>Новый пароль:</NewPasswordText>
          <InputForm>
            <PasswordInputValue>
              <InputValue type="text" placeholder="Пароль" />
              <InputValue type="text" placeholder="Повторите пароль" />
            </PasswordInputValue>
            <ButtonBlock>
                <Button>Сохранить</Button>
            </ButtonBlock>
          </InputForm>
        </PasswordInput>
      </ConteinerBlock>
    </MainBlock>
  );
}
