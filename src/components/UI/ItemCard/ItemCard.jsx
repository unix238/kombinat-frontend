import React from 'react';

import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '../Icons/ShoppingCart';
import { ShareCard } from '../Icons/ShareCard';

import cl from './ItemCard.module.css';

export const ItemCard = ({ images }) => {
  return (
    <div className={cl.item__card}>
      <div className={cl.item__image}>
        <Link to='/item/1'>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            showBullets={true}
            disableKeyDown={true}
            disableSwipe={false}
            swipingTransitionDuration={200}
          />
        </Link>
      </div>
      <div className={cl.item__text}>
        <div className={cl.item__title}>Серьги из натурального камня</div>
        <div className={cl.item__subtitle}>
          Анна Лу — один из резидентов которые размещаются в KMBINAT с самых
          первых дней открытия.
        </div>
        <div className={cl.item__other}>
          <div className={cl.item__price}>12 000 ₸</div>
          <div className={cl.item__links}>
            <ShoppingCart />
            <ShareCard />
          </div>
        </div>
      </div>
    </div>
  );
};
