import React from 'react';
import S from './modalLogin.module.scss';
import { Box, Modal, TextField } from '@mui/material/';

import logoBlack from '../../img/logoBlack.png';

const ModalLogin = ({ open, setOpen }) => {
  const [openModalRegistration, setOpenModalRegistration] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setOpenModalRegistration(false);
  };

  return (
    <div className={S.modal}>
      {!openModalRegistration ? (
        <Modal
          sx={{ left: 'calc(50% - 183px)', marginTop: '200px' }}
          open={open}
          onClose={() => handleClose()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box className={S.modalBox}>
            <img
              src={logoBlack}
              alt="logo"
            />
            <TextField
              className={S.inputBox}
              sx={{
                width: '278px',
                label: { color: '#D0CECE', fontSize: '18px' },
              }}
              id="standard-basic"
              label="Логин"
              variant="standard"
            />
            <TextField
              sx={{
                width: '278px',
                marginTop: '20px',
                label: { color: '#D0CECE', fontSize: '18px' },
              }}
              id="standard-basic"
              label="Пароль"
              variant="standard"
              type="password"
            />
            <button className={S.buttonEntre}>Войти</button>
            <button
              onClick={() => setOpenModalRegistration(true)}
              className={S.buttonReg}>
              Зарегистрироваться
            </button>
          </Box>
        </Modal>
      ) : (
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
              sx={{
                width: '278px',
                fontSize: '18px',
                label: { color: '#D0CECE', fontSize: '18px' },
              }}
              id="standard-basic"
              label="Логин"
              variant="standard"
            />
            <TextField
              sx={{
                width: '278px',
                marginTop: '20px',
                label: { color: '#D0CECE', fontSize: '18px' },
              }}
              id="standard-basic"
              label="Пароль"
              type="password"
              variant="standard"
            />
            <TextField
              sx={{
                width: '278px',
                marginTop: '20px',
                label: { color: '#D0CECE', fontSize: '18px' },
              }}
              id="standard-basic"
              label="Повторите пароль"
              type="password"
              variant="standard"
            />
            <button className={S.buttonEntre}>Зарегистрироваться</button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default ModalLogin;
