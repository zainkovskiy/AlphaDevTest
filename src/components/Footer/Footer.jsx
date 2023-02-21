import React from 'react';
import { Logo } from 'components/Logo';
import { Messengers } from 'components/Messengers';
import './Footer.scss';
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <div className='footer'>
      <Logo />
      <div className='footer__text'>
        <ul className='footer__list'>
          <li className='footer__list-item'>Политика конфиденциальности</li>
          <li className='footer__list-item'>Публичная оферта</li>
          <li className='footer__list-item'>+7 912 123-45-67</li>
          <li className='footer__list-item'>about@microsoftforum.com</li>
        </ul>
        <ul className='footer__list'>
          <Link className='footer__list-item footer__link'
            to='discription'
            spy={true} smooth={true} duration={500}
          >о мероприятии</Link>
          <li className='footer__list-item footer__link'>темы</li>
          <Link className='footer__list-item footer__link'
            to='speakers'
            spy={true} smooth={true} duration={500}
          >спикеры</Link>
          <li className='footer__list-item footer__link'>контакты</li>
        </ul>
      </div>
      <Messengers />
    </div>
  );
};
