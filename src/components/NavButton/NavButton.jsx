import React from 'react';
import { Link } from 'react-scroll';
import './NavButton.scss';

export const NavButton = ({ title, to }) => {
  return (
    <Link className='nav-button' to={to} spy={true} smooth={true} duration={500}>
      {title}
    </Link>
  );
};
