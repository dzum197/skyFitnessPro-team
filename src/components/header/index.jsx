import React from 'react';
import * as S from './styles';
import Logo from '../../img/logo.png';
import ModalLogin from '../../Modals/ModalLogin';

export function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <S.Header>
        <S.Logo src={Logo}></S.Logo>
        <S.Button onClick={() => handleOpen()}>Войти</S.Button>
      </S.Header>
      <ModalLogin
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
