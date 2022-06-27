import React from 'react';

import { ShoppingCart } from '../Icons/ShoppingCart';
import { ShareCard } from '../Icons/ShareCard';

import cl from './Recent.module.css';
import { ItemCard } from '../ItemCard/ItemCard';

export const Recent = ({ images }) => {
  return (
    <div className={cl.recently}>
      <div className={cl.recently__title}>Недавно просмотренное</div>
      <div className={cl.items__list}>
        {[0, 1, 2, 3].map((card) => (
          <ItemCard images={images} />
        ))}
      </div>
    </div>
  );
};
