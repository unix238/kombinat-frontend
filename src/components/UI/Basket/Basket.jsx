import React from 'react';
import { Button } from '../Button/Button';
import cl from './Basket.module.css';
import { BasketCard } from '../BasketCard/BasketCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { Loader } from '../Loader/Loader';

import { useSelector, useDispatch } from 'react-redux';
// import { setItem, clearItems, setLocalItem } from '../../../rtk/toolkitReducer';

import { addItemToBasket } from '../../../rtk/toolkitReducer';

export const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.toolkit.items);

  const loadItems = async () => {
    // const items = JSON.parse(localStorage.getItem('basket'));
    // // dispatch(clearItems());
    // if (items) {
    //   items.map(async (id) => {
    //     setIsLoading(true);
    //     const item = await ServiceApi.getItemByID(id);
    //     setBasketItems((prev) => [...prev, item]);
    //     // dispatch(setItem({ ...item, quantity: 1 }));
    //   });
    // }
    // setIsLoading(false);
  };

  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    countPrice();
  }, [items]);

  const countPrice = () => {
    let temp = 0;
    items.map((item) => {
      temp += item.price * item.quantity;
    });

    setTotalCount(temp);
  };

  return (
    <div className={cl.basket}>
      {!isLoading ? (
        <div className={cl.items}>
          {items.map((item) => {
            return <BasketCard item={item} key={`bask${item._id}`} />;
          })}
        </div>
      ) : (
        <Loader />
      )}

      <div className={cl.check}>
        <div className={cl.check__title}>Сумма Заказа</div>
        <div className={cl.positions}>
          <div className={cl.itemCosts}>
            <div className={[cl.costLeft, cl.subtitle].join(' ')}>Товары</div>
            <div className={[cl.costLeft, cl.subtitle].join(' ')}>
              {totalCount} ₸
            </div>
          </div>
          <div className={cl.itemCosts}>
            <div className={[cl.costLeft, cl.subtitle].join(' ')}>Доставка</div>
            <div className={[cl.costLeft, cl.subtitle].join(' ')}>1000 ₸</div>
          </div>
        </div>
        <div className={cl.total}>
          <div className={[cl.costLeft, cl.subtitle].join(' ')}>Итого:</div>
          <div className={[cl.costLeft, cl.subtitle].join(' ')}>
            {totalCount + 1000} ₸
          </div>
        </div>
        <Button text={'Перейти к опалте'} style={{ width: '220px' }} />
      </div>
    </div>
  );
};
