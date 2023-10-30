import * as React from 'react';
import Button from '@mui/material/Button';
import S from './updateUserPass.module.scss';
import logoBlack from '../../../img/logoBlack.png';
import { Box, Modal, TextField } from '@mui/material';

export default function UpdatePass() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}>
        НА КНОПКУ ВЕШАТЬ СОБЫТИЕ (замена пароля)
      </Button>

      <Modal
        sx={{ left: 'calc(50% - 183px)', marginTop: '200px' }}
        open={open}
        onClose={handleClose}>
        <Box className={S.modalBox}>
          <img
            src={logoBlack}
            alt="logo"
          />
          <h4>Новый пароль:</h4>
          <TextField
            className={S.inputBox}
            id="standard-basic"
            label="Пароль"
            type="password"
            variant="standard"
            sx={{ label: { color: '#D0CECE', fontSize: '18px' }, marginLeft: '41px' }}
          />
          <TextField
            className={S.inputBox}
            sx={{
              marginLeft: '41px',
              label: { color: '#D0CECE', fontSize: '18px' },
            }}
            id="standard-basic"
            label="Повторите пароль"
            type="password"
            variant="standard"
          />
          <button className={S.buttonEntre}>Сохранить</button>
        </Box>
      </Modal>
    </div>
  );
}
