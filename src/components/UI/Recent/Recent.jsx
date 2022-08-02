import React, { useEffect, useState } from 'react';

import cl from './Recent.module.css';
import { ItemCard } from '../ItemCard/ItemCard';
import { useSelector } from 'react-redux';

export const Recent = () => {
  const cards = useSelector((state) => state.toolkit.recent);

  return (
    <div className={cl.recently}>
      <div className='wrapper'>
        <div className={cl.recently__title}>Недавно просмотренное</div>
        <div className={cl.items__list}>
          {cards.map((card) => (
            <ItemCard
              key={card._id + 'recent'}
              item={card}
              style={{ color: '#fff' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
