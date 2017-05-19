import React from 'react';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const target = getRandomInt(-5, 5);

const ProgressBar = ({ counter }) => {
  const diff = counter - target;

  return (
    <div>
      target is {target}
      <br />
      diff is {diff}
    </div>
  );
};

export default ProgressBar;
