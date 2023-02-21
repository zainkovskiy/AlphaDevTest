import React from 'react';
import { SpeakerItems } from 'components/SpeakerItems';
import './Speakers.scss';

export const Speakers = () => {
  return (
    <div className='speakers' name='speakers'>
      <h2 className='speakers__title'>Спикеры нашего форума</h2>
      <SpeakerItems/>
    </div>
  );
};
