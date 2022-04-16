import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
const Projects = ({ sub, nav }) => {
  const data = [
    {
      title: "Assassin's Creed API",
      demo: 'https://react-assassins-creed.herokuapp.com/',
      code: 'https://react-assassins-creed.herokuapp.com/',
      image: "url('./img/creed_api.jpg') no-repeat -80px center/cover",
    },
    {
      title: 'TornadoCSS, A CSS Framework.',
      demo: 'https://tornadocss.netlify.app/',
      code: 'https://github.com/EDAMGHY/tornadocss',
      image: "url('./img/tornadocss.jpg') no-repeat center center/cover",
    },
    {
      title: 'A React Component Generator CLI',
      demo: 'https://www.npmjs.com/package/com-react',
      code: 'https://github.com/EDAMGHY/react-component-generator',
      image: "url('./img/com-react-cli.jpg') no-repeat -40px center/cover",
    },
    {
      title: 'A Test Project for Pizza Toppings',
      demo: 'https://simple-pizza-app.netlify.app/',
      code: 'https://github.com/EDAMGHY/pizza-toppings',
      image: "url('./img/pizza-builder.jpg') no-repeat center center/cover",
    },
  ];

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
      <Section section='section4' nav={nav}>
        <small>{sub}</small>
        <div className='projects-grid snaps-inline'>
          {data.map(({ title, image, code, demo }, index) => (
            <div key={index} className='project'>
              <div className='image-container' style={{ background: image }}>
                <div className='overlay'>
                  <h3>{title}</h3>
                  <div>
                    <a target='_blank' rel='noreferrer' href={demo}>
                      Demo
                    </a>
                    <a target='_blank' rel='noreferrer' href={code}>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};
export default Projects;
