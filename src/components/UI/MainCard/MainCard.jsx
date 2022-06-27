import React from 'react';
import { Button } from '../Button/Button';
import cl from './MainCard.module.css';

export const MainCard = ({
  image,
  title,
  subTitle,
  secondSubTitle,
  link,
  isImageLeft,
}) => {
  return (
    <div className={cl.news__card}>
      <div className={cl.news__card__left}>
        {isImageLeft ? (
          <img src={image} width={'459px'} height={'459px'} />
        ) : (
          <>
            <div className={cl.news__card__title}>{title}</div>
            <div className={cl.news__card__subtitle}>
              {subTitle}
              <div className={cl.news__card__subtitle}>{secondSubTitle}</div>
            </div>
            <Button link={link} />
          </>
        )}
      </div>
      <div className={cl.news__card__right}>
        {!isImageLeft ? (
          <img src={image} width={'459px'} height={'459px'} />
        ) : (
          <>
            <div className={cl.news__card__title}>{title}</div>
            <div className={cl.news__card__subtitle}>
              {subTitle}
              <div className={cl.news__card__subtitle}>{secondSubTitle}</div>
            </div>
            <Button link={link} />
          </>
        )}
      </div>
    </div>
  );
};
