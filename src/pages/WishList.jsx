import React from 'react';
import { useSelector } from 'react-redux';
import { WishList as WS } from '../components/UI/WishList/WishList';

export const WishList = () => {
  const favorites = useSelector((state) => state.toolkit.favorite);

  return (
    <div>
      <div className='wrapper'>
        <div className='basket__nav'>
          <div className='basket__nav__links'>
            <div className='basket__nav__link__div basket__active'>
              <div className='basket__nav__link basket__nav__subtitle'>
                Всего товаров: {favorites.length || 0}
              </div>
              <div className={'basket__nav__link basket__nav__title'}>
                Желания
              </div>
              <div className='basket__nav__link basket__nav__subtitle'>
                Продолжить покупки
              </div>
            </div>
          </div>
        </div>
        <div className='basket__main'>
          <WS />
        </div>
      </div>
    </div>
  );
};
