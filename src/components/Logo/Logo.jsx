import React from 'react';
import LogoImage from 'image/logo.svg';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className='logo'>
      <LogoImage />
      <div>
        <p className="logo__title logo__text">Security</p>
        <p className="logo__subtitle logo__text">Forum</p>
      </div>
    </div>
  );
};
