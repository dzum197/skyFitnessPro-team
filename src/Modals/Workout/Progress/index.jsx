import React from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';

import S from './progress.module.scss';

const Progress = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}>
        НА КНОПКУ ВЕШАТЬ СОБЫТИЕ (Заполнение прогресса)
      </Button>

      <Modal
        sx={{ left: 'calc(50% - 222px)', marginTop: '100px' }}
        open={open}
        onClose={handleClose}>
        <Box className={S.box}>
          <h1>Мой прогресс</h1>
          <div>
            <div className={S.box_input}>
              <h4>Сколько раз вы сделали наклоны вперед?</h4>
              <TextField
                sx={{
                  width: '361px',
                  fontSize: '18px',
                  label: { color: '#D0CECE', fontSize: '18px' },
                }}
                id="standard-basic"
                label="Введите значение"
                variant="standard"
              />
              <h4>Сколько раз вы сделали наклоны назад?</h4>
              <TextField
                sx={{
                  width: '361px',
                  fontSize: '18px',
                  label: { color: '#D0CECE', fontSize: '18px' },
                }}
                id="standard-basic"
                label="Введите значение"
                variant="standard"
              />
              <h4>
                {' '}
                Сколько раз вы сделали поднятие ног,
                <br /> согнутых в коленях?
              </h4>
              <TextField
                sx={{
                  width: '361px',
                  fontSize: '18px',
                  label: { color: '#D0CECE', fontSize: '18px' },
                }}
                id="standard-basic"
                label="Введите значение"
                variant="standard"
              />
            </div>
            <button className={S.buttonEntre}>Отправить</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Progress;
