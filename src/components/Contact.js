import React, { useRef } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
const Contact = ({
  sub,
  label1,
  label2,
  label3,
  placeholder1,
  placeholder2,
  placeholder3,
  btn,
  nav,
}) => {
  const setFocus = (e) => {
    e.target.parentElement.classList.add('active');
  };
  const setBlur = (e) => {
    e.target.parentElement.classList.remove('active');
  };
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_7cd6evn',
        'template_0gw0b5j',
        refForm.current,
        'sAu2YkMsvxNtEWmVH'
      )
      .then(
        () => {
          alert('Email sent successfully..!');
        },
        (err) => {
          console.log(err);
          alert('Failed to send the message!Please Try Again Later...');
        }
      );
  };
  return (
    <motion.div
      initial={{
        height: 0,
      }}
      animate={{
        height: '100%',
      }}
      exit={{
        y: window.innerHeight,
        transition: { duration: 0.5, type: 'ease' },
      }}
    >
      <Section section='section5' nav={nav}>
        <form ref={refForm} onSubmit={sendEmail} className='contact-container'>
          <small>{sub}</small>
          <div>
            <label htmlFor='name'>{label1} :</label>
            <input
              required
              type='text'
              name='name'
              onFocus={(e) => setFocus(e)}
              onBlur={(e) => setBlur(e)}
              placeholder={placeholder1}
            />
          </div>
          <div>
            <label htmlFor='email'>{label2} :</label>
            <input
              required
              name='user_email'
              type='email'
              onFocus={(e) => setFocus(e)}
              onBlur={(e) => setBlur(e)}
              placeholder={placeholder2}
            />
          </div>
          <div>
            <label htmlFor='message'>{label3} :</label>
            <textarea
              required
              name='message'
              onFocus={(e) => setFocus(e)}
              onBlur={(e) => setBlur(e)}
              placeholder={placeholder3}
            ></textarea>
          </div>
          <button className='offset' type='submit'>
            {btn}
          </button>
        </form>
      </Section>
    </motion.div>
  );
};
export default Contact;
