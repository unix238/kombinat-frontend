import React, { useEffect, useState } from 'react';

import { ArrowRight } from '../components/UI/Icons/ArrowRight';

import '../style/items.css';
import { Recent } from '../components/UI/Recent/Recent';
import { ItemCard } from '../components/UI/ItemCard/ItemCard';
import ServiceApi from '../api/ServiceApi';
import { Pagination } from '../components/UI/Pagination/Pagination';

export const Items = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadData = async () => {
    const fetchedItems = await ServiceApi.getItems(page);
    setItems(fetchedItems.data);
    setTotalPages(Math.ceil(fetchedItems.headers['x-total-count'] / 12));
  };

  useEffect(() => {
    loadData();
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
              <div>
                <ArrowRight />
              </div>
              <div className='options__text'>Фильтры</div>
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
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
        <Pagination totalPages={totalPages} setPage={setPage} />
        {/* <Recent images={images} /> */}
      </div>
    </div>
  );
};
