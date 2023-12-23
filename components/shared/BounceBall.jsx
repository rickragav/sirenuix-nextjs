// components/BounceBall.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const BounceBall = () => {
  const controls = useAnimation();

  const bounceAnimation = {
    y: [0, -20, 0], // Bounce animation along the y-axis
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse', // Bounce back and forth
    },
  };

  return (
    <motion.div
      className="ball"
      animate={controls}
      initial={{ y: 0 }}
      onClick={() => controls.start(bounceAnimation)}
    />
  );
};

export default BounceBall;
