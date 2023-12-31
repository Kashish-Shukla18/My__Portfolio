import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/animation1.json'; // Replace with the actual path

const MyLottieComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width="100%" />
    </div>
  );
};

export default MyLottieComponent;
