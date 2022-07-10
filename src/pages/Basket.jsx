import React, { useState, useEffect } from 'react';
import { Basket as BS } from '../components/UI/Basket/Basket';

import '../style/basket.css';

export const Basket = () => {
  const [currentPage, setCurrentPage] = useState('basket');
  const [basketItems, setBasketItems] = useState(0);
  const allItems = () => {
    const basket = JSON.parse(localStorage.getItem('basket'));
    setBasketItems(basket.length);
  };

  useEffect(() => {
    allItems();
  }, []);

  return (
    <div className='basket'>
      <div className='wrapper'>
        <div className='basket__nav'>
          <div className='basket__nav__links'>
            <div
              className={
                currentPage === 'basket'
                  ? 'basket__nav__link__div basket__active'
                  : 'basket__nav__link__div'
              }
            >
              <div className='basket__nav__link basket__nav__subtitle'>
                Всего товаров: {basketItems}
              </div>
              <div
                className={'basket__nav__link basket__nav__title'}
                onClick={() => {
                  setCurrentPage('basket');
                }}
              >
                Корзина
              </div>
              <div className='basket__nav__link basket__nav__subtitle'>
                Продолжить покупки
              </div>
            </div>
          </div>
        </div>
        <div className='basket__main'>
          {currentPage === 'basket' ? <BS /> : <>Wishlist</>}
        </div>
      </div>
    </div>
  );
};
