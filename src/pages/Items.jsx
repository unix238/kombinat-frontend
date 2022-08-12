import React, { useEffect, useState } from 'react';

import { ArrowRight } from '../components/UI/Icons/ArrowRight';

import '../style/items.css';
import { Recent } from '../components/UI/Recent/Recent';
import { ItemCard } from '../components/UI/ItemCard/ItemCard';
import ServiceApi from '../api/ServiceApi';
import { Pagination } from '../components/UI/Pagination/Pagination';
import { Loader } from '../components/UI/Loader/Loader';
import { Header } from '../components/UI/Header/Header';
import { ContactForm } from '../components/UI/ContactForm/ContactForm';
import { Button } from '../components/UI/Button/Button';

export const Items = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFilterOpenned, setIsFilterOpenned] = useState(false);
  const [isSortOpenned, setIsSortOpenned] = useState(false);

  const [isFiltered, setIsFiltered] = useState(false);

  const [basketItems, setBasketItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [tags, setTags] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const filters = [];

  const getAllBasketItems = async () => {
    const items = JSON.parse(localStorage.getItem('basket'));
    if (items) {
      setBasketItems(items);
    }
  };

  const getAllFavoriteItems = async () => {
    const items = JSON.parse(localStorage.getItem('favorite'));
    if (items) {
      setFavoriteItems(items);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    const fetchedTags = await ServiceApi.getTags();
    setTags(fetchedTags);

    const fetchedItems = await ServiceApi.getItems(page);
    setItems(fetchedItems.data);
    setFilteredItems(fetchedItems.data);
    setTotalPages(Math.ceil(fetchedItems.headers['x-total-count'] / 12));
    setIsLoading(false);
  };

  const addFilter = (filter) => {
    let isFilterUnique = true;
    filters.forEach((item) => {
      if (item.tags === filter.tags) {
        isFilterUnique = false;
      }
    });

    if (isFilterUnique) {
      filters.push(filter);
    } else {
      filters.forEach((item, index) => {
        if (item.tags === filter.tags) {
          filters.splice(index, 1);
        }
      });
    }

    setIsFiltered(true);
    loadFilteredItems();
  };

  const loadFilteredItems = async () => {
    setIsLoading(true);
    const fetchedItems = await ServiceApi.getAllItemsByTags(filters, page);
    setFilteredItems(fetchedItems.data);
    setTotalPages(Math.ceil(fetchedItems.headers['x-total-count'] / 12));
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
    getAllBasketItems();
    getAllFavoriteItems();
  }, []);

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <div>
      <Header />
      <div className='wrapper'>
        <div className='options'>
          <div className='filters'>
            <div
              className='filters__nav'
              onClick={() => {
                setIsFilterOpenned(!isFilterOpenned);
              }}
            >
              <ArrowRight />
              <div className='options__text'>Фильтры</div>
            </div>
            {isFilterOpenned && (
              <div className='filters__items'>
                <div
                  className='filters__nav filters__nav__inside'
                  onClick={() => {
                    setIsFilterOpenned(!isFilterOpenned);
                  }}
                >
                  <div className='filters__arrow open'>
                    <ArrowRight />
                  </div>
                  <div className='filters__title'>Фильтры</div>
                </div>
                <div className='filters__item'>
                  <div className='filters__title'>
                    <div className='filters__arrow open'>
                      <ArrowRight />
                    </div>
                    Бренды
                  </div>
                  <div className='filter__open filters__subtitles'>
                    <div className='filters__subtitle'>
                      <input
                        type='checkbox'
                        name=''
                        id=''
                        className='filters__checkbox'
                      />
                      Bershka
                    </div>
                    <div className='filters__subtitle'>
                      <input
                        type='checkbox'
                        name=''
                        id=''
                        className='filters__checkbox'
                      />
                      Pul&Bear
                    </div>
                    <div className='filters__subtitle'>
                      <input
                        type='checkbox'
                        name=''
                        id=''
                        className='filters__checkbox'
                      />
                      Zara
                    </div>
                    <div className='filters__subtitle'>
                      <input
                        type='checkbox'
                        name=''
                        id=''
                        className='filters__checkbox'
                      />
                      Tommy Hilfiger
                    </div>
                  </div>
                </div>

                <div className='filters__item'>
                  <div className='filters__title'>
                    <div className='filters__arrow open'>
                      <ArrowRight />
                    </div>
                    Размер
                  </div>
                  <div className='filters__subtitles filter__open'>
                    <div className='filters__subtitle'>
                      <input
                        type='checkbox'
                        name=''
                        id=''
                        className='filters__checkbox'
                      />
                      S
                    </div>
                    <div className='filters__subtitle'>
                      <input
                        type='checkbox'
                        name=''
                        id=''
                        className='filters__checkbox'
                      />
                      M
                    </div>
                    <div className='filters__subtitle'>
                      <input
                        type='checkbox'
                        name=''
                        id=''
                        className='filters__checkbox'
                      />
                      L
                    </div>
                    <div className='filters__subtitle'>
                      <input
                        type='checkbox'
                        name=''
                        id=''
                        className='filters__checkbox'
                      />
                      XL
                    </div>
                  </div>
                </div>

                <div className='filters__item'>
                  <div className='filters__title'>
                    <div className='filters__arrow open'>
                      <ArrowRight />
                    </div>
                    Цена
                  </div>
                  <div className='filters__subtitles filter__open'>
                    <div className='filters__subtitle'>
                      От
                      <input
                        type='number'
                        name=''
                        id=''
                        value={0}
                        className='filters__price'
                      />
                      до
                      <input
                        type='number'
                        name=''
                        id=''
                        value={0}
                        className='filters__price'
                      />
                    </div>
                  </div>
                </div>

                <Button
                  text={'Применить фильтры'}
                  style={{ width: '100%', height: 51 }}
                />

                {/* {tags.map((tag) => (
                <div
                  className='filter__item'
                  onClick={() => addFilter({ tags: tag._id })}
                  key={tag._id}
                >
                  {tag.title}
                </div>
              ))} */}
              </div>
            )}
          </div>
          <div
            className='sortings'
            onClick={() => {
              setIsSortOpenned(!isSortOpenned);
            }}
          >
            <div>Сортировка</div>
            <div>
              <ArrowRight />
            </div>
            {isSortOpenned && (
              <div className='sort__items'>
                <div
                  className='filters__nav filters__nav__inside'
                  onClick={() => {
                    setIsSortOpenned(!isSortOpenned);
                  }}
                >
                  <div className='filters__arrow open'>
                    <ArrowRight />
                  </div>
                  <div className='filters__title'>Сортировка</div>
                </div>
                <div className='sort__item'>
                  <input type='radio' name='sort' id='asc' />
                  <label htmlFor='asc'>Цена (по убыванию)</label>
                </div>

                <div className='sort__item'>
                  <input type='radio' name='sort' id='desc' />
                  <label htmlFor='desc'>Цена (по убыванию)</label>
                </div>

                <div className='sort__item'>
                  <input type='radio' name='sort' id='date' />
                  <label htmlFor='date'>Дата добавления</label>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='items__list'>
          {isLoading ? (
            <Loader />
          ) : (
            filteredItems.map((item) => <ItemCard key={item._id} item={item} />)
          )}
        </div>
        <Pagination totalPages={totalPages} setPage={setPage} />
      </div>
      <Recent />
      <ContactForm />
    </div>
  );
};
