import React from 'react';

import cl from './Recent.module.css';
import { ItemCard } from '../ItemCard/ItemCard';

export const Recent = ({ cards }) => {
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
