import React from 'react';
const Languages = ({ lang, setLang }) => {
  return (
    <div className='languages-btns'>
      <button
        id='fr'
        className={`btn ${lang === 1 && 'active'}`}
        onClick={() => setLang(1)}
      >
        Fr
      </button>
      <button
        id='eng'
        className={`btn ${lang === 0 && 'active'}`}
        onClick={() => setLang(0)}
      >
        Eng
      </button>
    </div>
  );
};
export default Languages;
