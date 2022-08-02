import React, { useEffect, useState } from 'react';

import { ArrowRight } from '../components/UI/Icons/ArrowRight';

import '../style/items.css';
import { Recent } from '../components/UI/Recent/Recent';
import { ItemCard } from '../components/UI/ItemCard/ItemCard';
import ServiceApi from '../api/ServiceApi';
import { Pagination } from '../components/UI/Pagination/Pagination';
import { Loader } from '../components/UI/Loader/Loader';

export const Items = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isFiltered, setIsFiltered] = useState(false);

  const [basketItems, setBasketItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [tags, setTags] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({ tags: [], categories: [] });

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
      <div className='wrapper'>
        <div className='options'>
          <div className='filters'>
            <div className='filters__nav'>
              <ArrowRight />
              <div className='options__text'>Фильтры</div>
            </div>
            <div className='filters__items'>
              {tags.map((tag) => (
                <div
                  className='filter__item'
                  // onClick={() => addFilter({ tags: tag._id })}
                  key={tag._id}
                >
                  {tag.title}
                </div>
              ))}
            </div>
          </div>
          <div className='sortings'>
            <div className='options__text'>Сортировка</div>
            <div>
              <ArrowRight />
            </div>
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
    </div>
  );
};
