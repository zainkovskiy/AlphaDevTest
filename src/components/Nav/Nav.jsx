import React from 'react';
import { NavButton } from 'components/NavButton';
import './Nav.scss';

export const Nav = () => {
  return (
    <nav className='nav'>
      <NavButton title='о мероприятии' to='discription'/>
      <NavButton title='спикеры' to='speakers'/>
    </nav>
  );
};
