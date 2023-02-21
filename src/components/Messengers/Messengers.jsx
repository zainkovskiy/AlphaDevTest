import React from 'react';
import './Messengers.scss';
import Vk from 'image/vk.svg';
import Instagram from 'image/instagram.svg';
import Telegram from 'image/telegram.svg';
import Facebook from 'image/facebook.svg';

export const Messengers = () => {
  return (
    <div className='messengers'>
      <span className='messengers__item'
      ><Vk/></span>
      <span className='messengers__item'
      ><Facebook/></span>
      <span className='messengers__item'
      ><Instagram/></span>
      <span className='messengers__item'
      ><Telegram/></span>
    </div>
  );
};
