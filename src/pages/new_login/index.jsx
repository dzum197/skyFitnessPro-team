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

export function NewLogin() {
  return (
    <MainBlock>
      <ConteinerBlock>
        <Logo src={logo} />
        <PasswordInput>
          <NewPasswordText>Новый логин:</NewPasswordText>
          <InputForm>
            <PasswordInputValue>
              <InputValue type="text" placeholder="Логин" />
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
