import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About = ({ sub, title, paragraph, nav }) => {
  return (
    <motion.div
      initial={{
        width: 0,
      }}
      animate={{
        width: '100%',
      }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.5, type: 'ease' },
      }}
    >
      <Section section='section2' nav={nav}>
        <div className='grid'>
          <div>
            <small>{sub}</small>
            <h2>{title}</h2>
          </div>
          <p>{paragraph}</p>
        </div>
      </Section>
    </motion.div>
  );
};
export default About;
