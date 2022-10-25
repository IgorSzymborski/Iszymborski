import React from 'react';
import { motion } from 'framer-motion'

const animations = {
  initial: {opacity: 0, x: 10},
  animate: {opacity: 1, x: 0},
  exit: {opacity: -100, x: -30},
}

const AnimatedRoutes = ({children}) => {
  return (
    <motion.div variants={animations} initial='initial' animate='animate' exit='exit' >
      {children}
    </motion.div>
  );
};

export default AnimatedRoutes;