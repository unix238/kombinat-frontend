import React, { useState } from 'react';
import cl from './BasketCard.module.css';
import { Select } from '../Select/Select';
import { useEffect } from 'react';

export const BasketCard = ({ item, calcTotalCount }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  return isDeleted ? null : (
    <div className={cl.item}>
      <div className={cl.left}>
        <div className={cl.image}>
          <img src={item.images[0]} alt='clock' className={cl.img} />
        </div>
        <div className={cl.text}>
          <div className={cl.topText}>
            <div className={cl.title}>{item.seller}</div>
            <div className={cl.subtitle}>{item.title}</div>
          </div>
          <div className={cl.bottomText}>
            <div className={cl.subtitle}>Доставка из:</div>
            <div className={cl.title}>Казахстан, Петропавловск</div>
          </div>
        </div>
      </div>
      <div className={cl.right}>
        <div className={cl.select__size}>
          <Select style={{ width: '220px' }}>
            {item.sizes.map((size) => {
              return <option key={size}>Размер: {size}</option>;
            })}
          </Select>
          <Select
            style={{ width: '220px' }}
            onChange={(e) => {
              let total = e.target.value * item.price;
              calcTotalCount(total);
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
              return (
                <option key={`q${i}`} value={i}>
                  Количество: {i}
                </option>
              );
            })}
          </Select>
        </div>
        <div
          className={cl.delete}
          onClick={() => {
            const basket = localStorage.getItem('basket');
            const newBasket = JSON.parse(basket).filter((i) => i !== item._id);
            localStorage.setItem('basket', JSON.stringify(newBasket));
            setIsDeleted(true);
          }}
        >
          удалить X
        </div>
      </div>
    </div>
  );
};
