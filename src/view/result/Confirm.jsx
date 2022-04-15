import React from 'react';

import Button from 'components/Button';
import { getType } from 'my-redux/selector';
import { useSelector } from 'react-redux';

const Confirm = ({ history }) => {
  // redux - useSelector 사용
  const type = useSelector(getType);

  const moveDescView = () => {
    if (type) {
      const lowerType = type.toLowerCase();
      history.push(`/desc/${lowerType}`);
    }
  };

  return (
    <>
      <img
        className="img_success"
        src="img/success_img.png"
        alt="success_img"
      />
      <h3> 어떤 강아지가 찾아왔을까요? 🐶</h3>
      <Button text="결과 확인하기" handler={moveDescView} />
    </>
  );
};

export default Confirm;
