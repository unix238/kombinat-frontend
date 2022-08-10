import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShoppingCart } from '../Icons/ShoppingCart';
import { ShareCard } from '../Icons/ShareCard';

import {
  addItemToBasket,
  addItemToFavorite,
} from '../../../rtk/toolkitReducer';

import cl from './ItemCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite } from '../Icons/Favorite';

export const ItemCard = ({ item, style }) => {
  const items = useSelector((state) => state.toolkit.items);
  const favorites = useSelector((state) => state.toolkit.favorite);
  const dispatch = useDispatch();
  const router = useNavigate();

  const [inBasket, setInBasket] = useState(false);
  const [inFavorite, setInFavorite] = useState(false);

  const checkBasket = () => {
    if (items.filter((i) => i._id === item._id).length > 0) {
      setInBasket(true);
    } else {
      setInBasket(false);
    }
  };

  const checkFavorite = () => {
    if (favorites.filter((i) => i._id === item._id).length > 0) {
      setInFavorite(true);
    } else {
      setInFavorite(false);
    }
  };

  useEffect(() => {
    checkBasket();
    checkFavorite();
  }, [items]);

  return (
    <div className={cl.item__card}>
      <div className={cl.item__image}>
        <div className={cl.fav__icon}>
          <Favorite
            isEmpty={true}
            width={'24'}
            height={'24'}
            isRed={inFavorite ? true : false}
            isCard={true}
            addToFavorite={() => {
              dispatch(addItemToFavorite({ ...item, quantity: 1, size: '1' }));
            }}
          />
        </div>
        <img
          src={item.images[0]}
          alt={item.name}
          onClick={() => {
            router(`/item/${item._id}`);
          }}
        />
      </div>
      <div className={cl.item__text}>
        <div className={cl.top}>
          <div
            className={cl.item__title}
            onClick={() => {
              router(`/item/${item._id}`);
            }}
          >
            {item.title}
          </div>
          <div className={cl.item__subtitle} style={style}>
            {item.descriptions[0]}
          </div>
        </div>

        <div className={cl.item__other}>
          <div className={cl.item__price}>{item.price} ₸</div>
          <div className={cl.item__links}>
            <div
              onClick={() => {
                dispatch(addItemToBasket({ ...item, quantity: 1, size: '1' }));
              }}
            >
              {!inBasket ? <ShoppingCart /> : <ShoppingCart color={'#000'} />}
            </div>
            <div>
              <ShareCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
