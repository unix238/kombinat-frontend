import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { ShoppingCart } from '../Icons/ShoppingCart';
import { ShareCard } from '../Icons/ShareCard';

import cl from './ItemCard.module.css';

export const ItemCard = ({ item, addToBasket, style }) => {
  const [inBasket, setInBasket] = useState(false);
  const router = useNavigate();
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
      <div
        className={cl.item__image}
        onClick={() => {
          router(`/item/${item._id}`);
        }}
      >
        <img src={item.images[0]} alt={item.name} />
      </div>
      <div className={cl.item__text}>
        <div className={cl.top}>
          <div className={cl.item__title}>{item.title}</div>
          <div className={cl.item__subtitle} style={style}>
            {item.descriptions[0]}
          </div>
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
