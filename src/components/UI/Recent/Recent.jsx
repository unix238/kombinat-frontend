import React, { useEffect } from 'react';

import { ShoppingCart } from '../Icons/ShoppingCart';
import { ShareCard } from '../Icons/ShareCard';

import cl from './Recent.module.css';
import { ItemCard } from '../ItemCard/ItemCard';

export const Recent = ({ cards }) => {
  useEffect(() => {
    console.log(cards, 'recent items');
  }, []);
  return (
    <div className={cl.recently}>
      <div className={cl.recently__title}>Недавно просмотренное</div>
      <div className={cl.items__list}>
        {cards.map((card) => (
          <ItemCard item={card} />
        ))}
      </div>
    </div>
  );
};
