import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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

export const Items = (props) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFilterOpenned, setIsFilterOpenned] = useState(false);
  const [isSortOpenned, setIsSortOpenned] = useState(false);

  const [basketItems, setBasketItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [brands, setBrands] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const [filters, setFilters] = useState(
    props.filters || {
      price: '',
      tags: [],
      sort: '',
      category: '',
      brand: '',
      size: '',
    }
  );

  const addFilter = (filterName, filterValue) => {
    if (filters[filterName].includes(filterValue)) return;
    setFilters({
      ...filters,
      [filterName]: [...filters[filterName], filterValue],
    });
  };

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
    console.log(location);
    if (location.state) {
      addFilter(location.state.filterName, location.state.filterValue);
    }

    const fetchedTags = await ServiceApi.getTags();
    setTags(fetchedTags);
    const fetcgedCategories = await ServiceApi.getCategories();
    setCategories(fetcgedCategories);
    const fetchedBrands = await ServiceApi.getBrands();
    setBrands(fetchedBrands);

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

  useEffect(() => {
    console.log(filters);
  }, [filters]);

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
                    Категории
                  </div>
                  <div className='filter__open filters__subtitles'>
                    {categories.map((category) => (
                      <div
                        className='filters__subtitle'
                        key={`category${category._id}`}
                      >
                        <input
                          type='checkbox'
                          name=''
                          id=''
                          onChange={(e) => {
                            if (e.target.checked) {
                              addFilter('category', category._id);
                            } else {
                              setFilters({
                                ...filters,
                                category: filters.category.filter(
                                  (id) => id !== category._id
                                ),
                              });
                            }
                          }}
                          className='filters__checkbox'
                        />
                        {category.title}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='filters__item'>
                  <div className='filters__title'>
                    <div className='filters__arrow open'>
                      <ArrowRight />
                    </div>
                    Бренды
                  </div>
                  <div className='filter__open filters__subtitles'>
                    {brands.map((brand) => (
                      <div
                        className='filters__subtitle'
                        key={`category${brand._id}`}
                      >
                        <input
                          type='checkbox'
                          name=''
                          id=''
                          onChange={(e) => {
                            if (e.target.checked) {
                              addFilter('brand', brand._id);
                            } else {
                              setFilters({
                                ...filters,
                                brand: filters.brand.filter(
                                  (id) => id !== brand._id
                                ),
                              });
                            }
                          }}
                          className='filters__checkbox'
                        />
                        {brand.title}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='filters__item'>
                  <div className='filters__title'>
                    <div className='filters__arrow open'>
                      <ArrowRight />
                    </div>
                    Тэги
                  </div>
                  <div className='filters__subtitles filter__open'>
                    {tags.map((tag) => (
                      <div className='filters__subtitle' key={`tags${tag._id}`}>
                        <input
                          type='checkbox'
                          name=''
                          id=''
                          onChange={(e) => {
                            if (e.target.checked) {
                              addFilter('tags', tag._id);
                            } else {
                              setFilters({
                                ...filters,
                                tags: filters.tags.filter(
                                  (id) => id !== tag._id
                                ),
                              });
                            }
                          }}
                          className='filters__checkbox'
                        />
                        {tag.title}
                      </div>
                    ))}
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
                        onChange={() => {}}
                        className='filters__price'
                      />
                      до
                      <input
                        type='number'
                        name=''
                        id=''
                        value={0}
                        onChange={() => {}}
                        className='filters__price'
                      />
                    </div>
                  </div>
                </div>

                <Button
                  text={'Применить фильтры'}
                  style={{ width: '100%', height: 51 }}
                />
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
