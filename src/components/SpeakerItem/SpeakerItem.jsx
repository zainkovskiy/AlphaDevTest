import React from 'react';
import './SpeakerItem.scss';

export const SpeakerItem = ({speaker}) => {
  return (
    <div className='speaker'>
      <img className='speaker__img' src={speaker.photo_url} alt="photo" />
      <div className='speaker__text'>
        <p className="speaker__name">{speaker.name}</p>
        <span className='speaker__line'></span>
        <p className="speaker__description">{speaker.description}</p>
      </div>
      <span className='speaker__btn'>Подробнее</span>
    </div>
  );
};
