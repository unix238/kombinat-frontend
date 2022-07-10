import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { ShoppingCart } from '../Icons/ShoppingCart';
import { ShareCard } from '../Icons/ShareCard';

import cl from './ItemCard.module.css';

export const ItemCard = ({ item, addToBasket }) => {
  const [inBasket, setInBasket] = useState(false);
  const check = () => {
    const basket = JSON.parse(localStorage.getItem('basket'));
    if (basket) {
      if (basket.find((i) => i === item._id)) {
        setInBasket(true);
      } else {
        setInBasket(false);
      }
    }
  };

  useEffect(() => {
    check();
  }, [addToBasket]);

  return (
    <div className={cl.item__card}>
      <div className={cl.item__image}>
        <Link to={`/item/${item._id}`} itemr={item}>
          <img src={item.images[0]} alt={item.name} />
        </Link>
      </div>
      <div className={cl.item__text}>
        <div className={cl.top}>
          <div className={cl.item__title}>{item.title}</div>
          <div className={cl.item__subtitle}>{item.descriptions[0]}</div>
        </div>

        <div className={cl.item__other}>
          <div className={cl.item__price}>{item.price} ₸</div>
          <div className={cl.item__links}>
            <div
              onClick={() => {
                addToBasket(item._id);
              }}
            >
              {!inBasket ? <ShoppingCart /> : <ShoppingCart color={'#000'} />}
            </div>
            <div>
              <ShareCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
