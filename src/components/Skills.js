import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
const Skills = ({ sub, nav }) => {
  return (
    <motion.div
      initial={{
        height: 0,
      }}
      animate={{
        height: '100%',
      }}
      exit={{
        y: -window.innerHeight,
        transition: { duration: 0.5, type: 'ease' },
      }}
    >
      <Section section='section3' nav={nav}>
        <small>{sub}</small>
        <div className='skills-grid'>
          <div className='skill' data-skill='HTML'>
            <img src='./img/technologies/html.svg' alt='HTML' />
          </div>
          <div className='skill' data-skill='CSS'>
            <img src='./img/technologies/css.svg' alt='CSS' />
          </div>
          <div className='skill' data-skill='JavaScript'>
            <img src='./img/technologies/javascript.svg' alt='Javascript' />
          </div>
          <div className='skill' data-skill='ReactJS'>
            <img src='./img/technologies/react.svg' alt='ReactJS' />
          </div>

          <div className='skill' data-skill='ExpressJS'>
            <img src='./img/technologies/expressjs.svg' alt='ExpressJS' />
          </div>
          <div className='skill' data-skill='Python'>
            <img src='./img/technologies/python.svg' alt='Python' />
          </div>
          <div className='skill' data-skill='Java'>
            <img src='./img/technologies/java.svg' alt='Java' />
          </div>
          <div className='skill' data-skill='C#'>
            <img src='./img/technologies/c-sharp.svg' alt='C#' />
          </div>
          <div className='skill' data-skill='VueJS'>
            <img src='./img/technologies/vuejs.svg' alt='VueJS' />
          </div>
          <div className='skill' data-skill='TypeScript'>
            <img src='./img/technologies/typescript.svg' alt='TypeScript' />
          </div>
          <div className='skill' data-skill='TailwindCSS'>
            <img src='./img/technologies/tailwind.svg' alt='TailwindCSS' />
          </div>
          <div className='skill' data-skill='SASS'>
            <img src='./img/technologies/sass.svg' alt='SASS' />
          </div>
          <div className='skill' data-skill='GIT'>
            <img src='./img/technologies/git.svg' alt='GIT' />
          </div>
          <div className='skill' data-skill='Styled'>
            <img src='./img/technologies/styled.svg' alt='Styled Components' />
          </div>
          <div className='skill' data-skill='Github'>
            <img src='./img/technologies/github.svg' alt='Github' />
          </div>
          <div className='skill' data-skill='VS Code'>
            <img
              src='./img/technologies/visual-studio-code.svg'
              alt='VS Code'
            />
          </div>
        </div>
      </Section>
    </motion.div>
  );
};
export default Skills;
