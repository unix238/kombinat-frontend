import React, { useState, useEffect } from 'react';
import '../style/detail.css';
import ImageGallery from 'react-image-gallery';
import { Help } from '../components/UI/Icons/Help';
import { Recent } from '../components/UI/Recent/Recent';
import ServiceApi from '../api/ServiceApi';
import { Loader } from '../components/UI/Loader/Loader';

export const Detail = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [recent, setRecent] = useState([]);

  const loadData = async () => {
    const location = window.location.pathname.split('/')[2];
    const item = await ServiceApi.getItemByID(location);
    setItem(item);
    setIsLoading(false);
    const temp = item.images.map((item) => {
      return {
        original: item,
        thumbnail: item,
      };
    });
    setImages(temp);
  };

  const addRecent = () => {
    const recent = JSON.parse(localStorage.getItem('recent'));
    if (recent && recent.length > 3) {
      recent.pop();
    }
    if (recent && recent.length > 0) {
      for (let i = 0; i < recent.length; i++) {
        try {
          console.log(recent[i]._id);
          if (recent[i]._id == item._id) {
            recent.splice(i, 1);
          }
        } catch (e) {
          console.log('Error: ', e, 'Item: ', recent);
        }
      }
      localStorage.setItem('recent', JSON.stringify([...recent, item]));
      setRecent(JSON.parse(localStorage.getItem('recent')));
    } else {
      localStorage.setItem('recent', JSON.stringify([item]));
      setRecent(JSON.parse(localStorage.getItem('recent')));
    }
    // localStorage.removeItem('recent');
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (item != null) {
      addRecent();
    }
  }, [item]);

  return (
    <div className='detail'>
      {!isLoading ? (
        <div className='wrapper'>
          <div className='detail'>
            <div className='detail__left'>
              <div className='images'>
                <ImageGallery
                  items={images}
                  thumbnailPosition={'right'}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showThumbnails={true}
                  showNav={false}
                  disableThumbnailScroll={true}
                  showBullets={true}
                  useTranslate3D={false}
                />
              </div>
              <div className='description left'>
                <div className='sign'>
                  <Help />
                </div>
                <div className='decripition__title'>Описание</div>
                <div className='decripition__subtitle'>
                  {item.descriptions[0]}
                </div>
                <div className='decripition__subtitle'>
                  {item.descriptions[1]}
                </div>
              </div>
            </div>
            <div className='detail__right'>
              <div className='container'>
                <div className='title'>{item.title}</div>
                <div className='price'>{item.price} ₸</div>
                <div className='size__choose'>
                  <div className='size__subtitle'>Таблица размеров</div>
                  <div className='select__size'>
                    <select className='select'>
                      <option value='Выберите размер'>Выберите размер</option>
                      {item.sizes.map((size) => (
                        <option value='1' key={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    <div className='button__group'>
                      <div className='btn add__to__favor'>В избранное</div>
                      <div className='btn add__to__cart'>
                        Добавить в корзину
                      </div>
                    </div>
                  </div>

                  <div className='description left'>
                    <div className='sign'>
                      <Help />
                    </div>
                    <div className='decripition__title'>Описание</div>
                    <div className='decripition__subtitle'>
                      {item.descriptions[0]}
                    </div>
                    <div className='decripition__subtitle'>
                      {item.descriptions[0]}
                    </div>
                    <div className='decripition__title'>
                      Примерная дата доставки:
                    </div>
                    <div className='decripition__subtitle'>
                      23 июня — 1 июля
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='recent'>
            <Recent cards={recent} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
