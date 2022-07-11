import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { ItemCard } from '../ItemCard/ItemCard';
import cl from './WishList.module.css';
import { Loader } from '../Loader/Loader';
import ServiceApi from '../../../api/ServiceApi';

export const WishList = () => {
  const [wishItems, setWishItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadItems = async () => {
    const items = JSON.parse(localStorage.getItem('basket'));
    console.log(items);
    if (items) {
      items.map(async (id) => {
        setIsLoading(true);
        const item = await ServiceApi.getItemByID(id);
        setWishItems((prev) => [...prev, item]);
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <div className='items'>
        {!isLoading ? (
          wishItems.map((item) => {
            return <ItemCard key={`${item._id}ws`} item={item} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
