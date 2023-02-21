import React from 'react';
import { Logo } from 'components/Logo';
import { Nav } from 'components/Nav';
import { ButtonReg } from 'components/ButtonReg';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <Nav />
      <ButtonReg />
    </div>
  );
};
