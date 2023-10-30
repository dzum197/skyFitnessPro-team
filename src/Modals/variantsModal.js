import React from 'react';
import UpdateLogin from './UpdateUserData/UpdateLogin';
import UpdatePass from './UpdateUserData/UpdatePass';
import Selection from './Workout/Selection';
import Progress from './Workout/Progress/index';
import SuccessProgress from './Workout/Progress/SuccessProgress';

const VariantsModal = () => {
  return (
    <div>
      <UpdateLogin />
      <UpdatePass />
      <Selection />
      <Progress />
      <SuccessProgress />
    </div>
  );
};

export default VariantsModal;
