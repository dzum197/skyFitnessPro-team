import React from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';

import S from './progress.module.scss';
import success from '../../../img/success.png';

const SuccessProgress = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}>
        НА КНОПКУ ВЕШАТЬ СОБЫТИЕ (Если данные о прогрессе ушли успешно)
      </Button>

      <Modal
        sx={{ left: 'calc(50% - 222px)', marginTop: '200px' }}
        open={open}
        onClose={handleClose}>
        <Box className={S.success}>
          <h1>
            Ваш прогресс <br /> засчитан!
          </h1>
          <img
            src={success}
            alt="success"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default SuccessProgress;
