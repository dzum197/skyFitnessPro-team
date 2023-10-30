import * as React from 'react';
import Button from '@mui/material/Button';
import S from './updateUserData.module.scss';
import logoBlack from '../../../img/logoBlack.png';
import { Box, Modal, TextField } from '@mui/material';

export default function UpdateLogin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}>
        НА КНОПКУ ВЕШАТЬ СОБЫТИЕ (изменения логина)
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
          <h4>Новый логин:</h4>
          <TextField
            sx={{
              width: '278px',
              fontSize: '18px',
              marginLeft: '41px',
              marginTop: '10px',
              label: { color: '#D0CECE', fontSize: '18px' },
            }}
            id="standard-basic"
            label="Логин"
            variant="standard"
          />
          <button className={S.buttonEntre}>Сохранить</button>
        </Box>
      </Modal>
    </div>
  );
}
