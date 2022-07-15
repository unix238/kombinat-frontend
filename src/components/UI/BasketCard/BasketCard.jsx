import React, { useState } from 'react';
import cl from './BasketCard.module.css';
import { Select } from '../Select/Select';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setSize, setQuantity, deleteItem } from '../../../rtk/toolkitReducer';
import { useNavigate } from 'react-router-dom';

export const BasketCard = ({ item, calcTotalCount }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.toolkit.items);
  const router = useNavigate();

  return isDeleted ? null : (
    <div className={cl.item}>
      <div className={cl.left}>
        <div
          style={{ cursor: 'pointer' }}
          className={cl.image}
          onClick={() => {
            router('/item/' + item._id);
          }}
        >
          <img src={item.images[0]} alt='clock' className={cl.img} />
        </div>
        <div className={cl.text}>
          <div className={cl.topText}>
            <div className={cl.title}>{item.seller}</div>
            <div
              className={cl.subtitle}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                router('/item/' + item._id);
              }}
            >
              {item.title}
            </div>
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
              // calcTotalCount(total);
              console.log(e.target.value);
              dispatch(
                setQuantity({
                  _id: item._id,
                  quantity: parseInt(e.target.value),
                })
              );
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
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
            dispatch(deleteItem(item._id));
          }}
        >
          удалить X
        </div>
      </div>
    </div>
  );
};
