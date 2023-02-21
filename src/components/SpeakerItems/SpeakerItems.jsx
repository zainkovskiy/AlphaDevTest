import React from 'react';
import { SpeakerItem } from 'components/SpeakerItem';
import { useSelector } from 'react-redux';
import './SpeakerItems.scss';

export const SpeakerItems = () => {
  const speakers = useSelector((state) => state.speakers.get('speakers'));
  return (
    <div className='speakers-items'>
      {
        speakers?.length > 0 &&
        speakers.map((item, idx) =>
          <SpeakerItem
            key={idx}
            speaker={item}
          />
        )
      }
    </div>
  );
};
