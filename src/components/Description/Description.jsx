import React from 'react';
import { ButtonReg } from 'components/ButtonReg';
import './Description.scss';
export const Description = () => {
  return (
    <div className='description' name='discription'>
      <div className='description__title_wrap'>
        <h1 className='description__title'>Форум Microsoft</h1>
        <h1 className='description__title'>«Finance industry trust in AI and IT-Security»</h1>
      </div>
      <div className='description__text_wrap'>
        <p className='description__text'>Масштабная кибератака и устаревшее оборудование может привести к потере клиентов, ухудшить отношения с партнёрами и учредителями, а невыполнение требований законодательства может привести к существенным штрафам и даже к блокировке ресурсов</p>
        <span className='description__add-text'>Узнайте как этого избежать, регистрируйтесь на наш форум</span>
      </div>
      <ButtonReg />
    </div>
  );
};
