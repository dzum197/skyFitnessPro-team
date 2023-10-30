import React from 'react';
import S from './modalLogin.module.scss';
import { Box, Modal, TextField } from '@mui/material/';

import logoBlack from '../../img/logoBlack.png';

const ModalLogin = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <div className={S.modal}>
      <Modal
        sx={{ left: 'calc(50% - 183px)', marginTop: '200px' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className={S.modalBox}>
          <img
            src={logoBlack}
            alt="logo"
          />
          <TextField
            className={S.inputBox}
            sx={{ width: '278px', fontSize: '18px' }}
            id="standard-basic"
            label="Логин"
            variant="standard"
          />
          <TextField
            sx={{ width: '278px', marginTop: '20px' }}
            id="standard-basic"
            label="Пароль"
            variant="standard"
          />
          <button className={S.buttonEntre}>Войти</button>
          <button className={S.buttonReg}>Зарегистрироваться</button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalLogin;
