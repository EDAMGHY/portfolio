import { BrowserRouter as Router } from 'react-router-dom';

import Socials from './components/Socials';
import DarkMode from './components/DarkMode';
import Languages from './components/Languages';
import Modal from './components/Modal';
import { useEffect, useState } from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';

const checkDarkMode = () => {
  let res;
  let exp = localStorage.getItem('edamghy') === 'dark-theme';
  if (exp) {
    res = false;
  } else if (!exp) {
    res = true;
  }
  return res;
};
const data = [
  {
    nav: {
      top: 'Skills',
      right: 'About',
      bottom: 'Contact',
      left: 'Projects',
      index: 'Home',
    },
    modal: {
      text: 'Click on the buttons in the corners to navigate through the portfolio!',
    },
    home: {
      sub: 'Hi, my name is',
      title1: 'Abdellah DAMRI',
      title2: "I'm a Full Stack Developer",
      paragraph: `I’m a full-stack developer specializing in building (and occasionally
          designing) <span>ReactJS</span> and <span>NodeJS</span> Projects.
        Currently, I’m focused on building responsive full-stack web
        applications.`,
      btn: 'View CV',
      cv: 'ABDELLAH_DAMRI_CV_ENG',
    },
    about: {
      sub: 'About Me',
      title: `Hi. I'm Abdellah, nice to meet you. Please take a look around!`,
      paragraph: `I am a Fullstack Web developer and Computer Science Student with a
          passion for Design and Innovation. I build accessible and responsive
          sites. I work with ReactJS and NodeJS to accomplish this. I am
          currently aiming towards improving my full stack Javascript skills. I
          am a very curious person always willing to learn.`,
    },
    contact: {
      sub: 'Contact',
      label1: 'Name',
      placeholder1: 'Enter Your Name...',
      label2: 'Email',
      placeholder2: 'Enter Your Email...',
      label3: 'Message',
      placeholder3: 'Enter Your Message...',
      btn: 'Submit',
    },
    projects: {
      sub: 'Projects',
    },
    skills: {
      sub: 'Skills',
    },
  },
  {
    nav: {
      top: 'Compétences',
      right: 'A Propos',
      bottom: 'Contact',
      left: 'Projets',
      index: 'Acceuil',
    },
    modal: {
      text: 'Cliquez sur les boutons dans les coins pour naviguer dans le portfolio!',
    },
    home: {
      sub: `Salut, Je m'appelle`,
      title1: 'Abdellah DAMRI',
      title2: 'Je suis un Développeur Full Stack',
      paragraph: `Je suis un développeur full-stack spécialisé en réalisation (et occasionnellement
           en désign) <span>ReactJS</span> et <span>NodeJS</span> Projets.
        Actuellement, je me concentre sur la création d'un site web responsive full-stack applications`,
      btn: 'Voir CV',
      cv: 'ABDELLAH_DAMRI_CV_FR',
    },
    about: {
      sub: 'A Propos de moi',
      title: `Salut. Je suis Abdellah, ravi de vous rencontrer. Jeter un oeil autour!`,
      paragraph: `Je suis un développeur Web Fullstack et étudiant en informatique avec un
           passion pour le Design et l'Innovation. Je construis accessible et réactif
           des sites. Je travaille avec ReactJS et NodeJS pour y parvenir. Je suis
           vise actuellement à améliorer mes compétences en Javascript full stack. je
           suis une personne très curieuse toujours prête à apprendre.`,
    },
    contact: {
      sub: 'Contact',
      label1: 'Nom Complet',
      placeholder1: 'Entrer Votre Nom...',
      label2: 'Mail',
      placeholder2: 'Entrer Votre Mail...',
      label3: 'Message',
      placeholder3: 'Entrer Votre Message...',
      btn: 'Soumettre',
    },
    projects: {
      sub: 'Projets',
    },
    skills: {
      sub: 'Compétences',
    },
  },
];
function App() {
  const [isDark, setIsDark] = useState(!checkDarkMode());
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState(0);
  const [site, setSite] = useState(data[0]);

  useEffect(() => {
    setSite(data[lang]);
    setTimeout(() => {
      setShow(true);
    }, 3000);

    setTimeout(() => {
      setShow(false);
    }, 10000);
    if (isDark) {
      localStorage.setItem('edamghy', 'dark-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.removeItem('edamghy');
    }
  }, [isDark, site, lang]);

  return (
    <Router>
      <Socials />
      <DarkMode isDark={isDark} setIsDark={setIsDark} />
      <Languages setLang={setLang} lang={lang} />
      <Modal show={show} text={site.modal.text} setShow={setShow} />
      <AnimatedRoutes site={site} />
    </Router>
  );
}

export default App;
