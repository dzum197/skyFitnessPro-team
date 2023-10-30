import React from 'react';
import { Box, Button, Modal } from '@mui/material';
import S from './selection.module.scss';

const Selection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}>
        НА КНОПКУ ВЕШАТЬ СОБЫТИЕ (выбор тренировки)
      </Button>
      <Modal
        sx={{ left: 'calc(50% - 222px)', marginTop: '100px' }}
        open={open}
        onClose={handleClose}>
        <Box className={S.modalBox}>
          <h1>Выберете тренировку</h1>

          {/* Будем мапить после получения всех тренировок */}
          <div className={S.mainSelection}>
            {[...Array(10)].map((el, i) => (
              <div
                key={i}
                className={S.selection}>
                <h5>Утренняя тренировка</h5>
                <p>Йога на каждый день / 3 день</p>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Selection;
