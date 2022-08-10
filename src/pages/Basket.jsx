import React, { useState, useEffect } from 'react';
import { Basket as BS } from '../components/UI/Basket/Basket';
import { useSelector, useDispatch } from 'react-redux';

import '../style/basket.css';
import { Recent } from '../components/UI/Recent/Recent';
import { Header } from '../components/UI/Header/Header';
import { ContactForm } from '../components/UI/ContactForm/ContactForm';

export const Basket = () => {
  const [currentPage, setCurrentPage] = useState('basket');
  const [basketItems, setBasketItems] = useState(0);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.toolkit.items);

  const allItems = () => {
    const basket = JSON.parse(localStorage.getItem('basket'));
    if (basket) {
      setBasketItems(basket.length);
    } else {
      setBasketItems(0);
    }
  };

  useEffect(() => {
    allItems();
  }, []);

  return (
    <>
      <Header />

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
            <BS />
          </div>
        </div>
        <Recent />
      </div>
      <ContactForm />
    </>
  );
};
