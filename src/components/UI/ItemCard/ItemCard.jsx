import React, { useEffect } from 'react';

import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '../Icons/ShoppingCart';
import { ShareCard } from '../Icons/ShareCard';

import cl from './ItemCard.module.css';

export const ItemCard = ({ item }) => {
  return (
    <div className={cl.item__card}>
      <div className={cl.item__image}>
        <Link to={`/item/${item._id}`}>
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
            <ShoppingCart />
            <ShareCard />
          </div>
        </div>
      </div>
    </div>
  );
};
