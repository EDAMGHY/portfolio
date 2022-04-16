import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
const Home = ({ sub, title1, title2, paragraph, btn, cv, nav }) => {
  return (
    <motion.div
      initial={{
        width: 0,
      }}
      animate={{
        width: '100%',
      }}
      exit={{
        x: -window.innerWidth,
        transition: { duration: 0.5, type: 'ease' },
      }}
    >
      <Section section='section1' nav={nav}>
        <small>{sub}</small>
        <h1>{title1}</h1>
        <h2>{title2}</h2>
        <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        <a href={`./img/cvs/${cv}.pdf`} className='offset'>
          {btn} <i className='fas fa-file-pdf'></i>
        </a>
      </Section>
    </motion.div>
  );
};
export default Home;
