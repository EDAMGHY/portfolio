import React from 'react';
const DarkMode = ({ isDark, setIsDark }) => {
  return (
    <div className='dark-check'>
      <div>
        <input
          type='checkbox'
          onClick={() => setIsDark(!isDark)}
          className='checkbox'
          id='checkbox'
          defaultChecked={isDark}
        />
        <label htmlFor='checkbox' className='label'>
          <i className='fas fa-moon'></i>
          <i className='fas fa-sun'></i>
          <div className='ball'></div>
        </label>
      </div>
    </div>
  );
};
export default DarkMode;
