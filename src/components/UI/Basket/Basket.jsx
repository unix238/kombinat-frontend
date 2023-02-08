import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToBasket, clearItems } from '../../../rtk/toolkitReducer';
import PaymentApi from '../../../api/PaymentApi';
import ServiceApi from '../../../api/ServiceApi';
import cl from './Basket.module.css';
import { Button } from '../Button/Button';
import { BasketCard } from '../BasketCard/BasketCard';
import { Loader } from '../Loader/Loader';

export const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.toolkit.items);

  const loadItems = async () => {
    try {
      const response = await ServiceApi.getItemsBySearch(items);
      if (response.status === 200) {
        setBasketItems(response.data);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const [totalCount, setTotalCount] = useState(0);

  const makePayment = async () => {
    const orderItems = items.map((item) => {
      return {
        _id: item._id,
        quantity: item.quantity,
        size: item.size,
      };
    });
    console.log(orderItems);
    setIsLoading(true);
    const response = await PaymentApi.addOrder(orderItems);
    if (response.status === 200) {
      dispatch(clearItems());
      setBasketItems([]);
      setTotalCount(0);
      setIsLoading(false);
      alert(`Payment successful id: ${response.data.order._id}`);
    }
  };

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
          {basketItems.map((item) => {
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
        <Button
          text={'Перейти к опалте'}
          onClick={makePayment}
          style={{ width: '220px' }}
        />
      </div>
    </div>
  );
};
