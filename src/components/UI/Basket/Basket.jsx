import React from 'react';
import { Button } from '../Button/Button';
import cl from './Basket.module.css';
import { BasketCard } from '../BasketCard/BasketCard';
import { useState } from 'react';
import ServiceApi from '../../../api/ServiceApi';
import { useEffect } from 'react';
import { Loader } from '../Loader/Loader';

export const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadItems = async () => {
    const items = JSON.parse(localStorage.getItem('basket'));
    if (items) {
      items.map(async (id) => {
        setIsLoading(true);
        const item = await ServiceApi.getItemByID(id);
        setBasketItems((prev) => [...prev, item]);
      });
    }
    // countTotal();
  };

  const [totalCount, setTotalCount] = useState(0);
  const calcTotalCount = (amount) => {
    setTotalCount(amount);
  };

  // const countTotal = async () => {
  //   let total = 0;
  //   basketItems.map((item) => {
  //     total += item.price;
  //   });
  //   setTotalCount(total);
  //   console.log(total);
  // };

  useEffect(() => {
    loadItems();
    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   countTotal();
  // }, [basketItems]);

  return (
    <div className={cl.basket}>
      {!isLoading ? (
        <div className={cl.items}>
          {basketItems.map((item) => {
            return (
              <BasketCard
                item={item}
                key={`bask${item._id}`}
                calcTotalCount={calcTotalCount}
              />
            );
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
