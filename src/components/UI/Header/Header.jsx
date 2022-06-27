import React, { useState } from 'react';
import cl from './Header.module.css';
import { Logo } from '../Icons/Logo';
import { Search } from '../Icons/Search';
import { Home } from '../Icons/Home';
import { Help } from '../Icons/Help';
import { Notifications } from '../Icons/Notifications';
import { Favorite } from '../Icons/Favorite';
import { ShoppingBag } from '../Icons/ShoppingBag';
import { Account } from '../Icons/Account';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [forMens, setForMens] = useState([
    {
      categories: [
        {
          title: 'Новинки: одежда',
          link: '/wear',
        },
        {
          title: 'Все категории',
          link: '/wear',
        },
        {
          title: 'Брюки',
          link: '/wear',
        },
        {
          title: 'Деним',
          link: '/wear',
        },
        {
          title: 'Костюмы',
          link: '/wear',
        },
        {
          title: 'Куртки и пиджаки',
          link: '/wear',
        },
        {
          title: 'Нижнее белье и носки',
          link: '/wear',
        },
        {
          title: 'Пальто',
          link: '/wear',
        },
        {
          title: 'Пляжная одежда',
          link: '/wear',
        },
        {
          title: 'Отвественный выбор',
          link: '/wear',
        },
        {
          title: 'Распродажа',
          link: '/wear',
        },
      ],
      style: [
        {
          title: 'Классика',
        },
        {
          title: 'Авангард',
        },
        {
          title: 'Streetwear',
        },
        {
          title: 'Минимализм',
        },
      ],
      reason: [
        {
          title: 'Беспроигрышные подарки',
        },
        {
          title: 'Нестрогий офисный стиль',
        },
        {
          title: 'Гардероб для особого случая',
        },
        {
          title: 'Гардероб для отпуска',
        },
      ],
      ourChoice: [
        {
          title: 'Беспроигрышные подарки',
        },
        {
          title: 'Нестрогий офисный стиль',
        },
        {
          title: 'Гардероб для особого случая',
        },
        {
          title: 'Гардероб для отпуска',
        },
      ],
    },
  ]);

  return (
    <div className={cl.root}>
      <div className={cl.headerTop}>
        <div className={cl.wrapper}>
          <div className={cl.headerItems}>
            <div className={cl.logo}>
              <Link to='/'>
                <Logo width={110} height={20} />
              </Link>
            </div>
            <div className={cl.search}>
              <Search width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className={cl.headerMain}>
        <div className={cl.wrapper}>
          <div className={cl.headerLinks}>
            <div className={cl.link}>
              <Link to='/'>
                <Home width={'25'} height={'25'} />
              </Link>
            </div>
            <div className={cl.otherLinks}>
              <div className={cl.link}>
                <Help width={'25'} height={'25'} />
              </div>
              <div className={cl.link}>
                <Notifications width={'25'} height={'25'} />
              </div>
              <div className={cl.link}>
                <Favorite width={'25'} height={'25'} />
              </div>
              <div className={cl.link}>
                <ShoppingBag width={'25'} height={'25'} />
              </div>
              <div className={cl.link}>
                <Account width={'25'} height={'25'} />
              </div>
            </div>
          </div>
          <div className={cl.navLinks}>
            <div className={cl.navTopLinks}>
              <div className={cl.navLinksMainTags}>
                <div
                  className={cl.navLink}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Женское
                </div>
                <div
                  className={[cl.navLink, cl.active].join(' ')}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Мужское
                </div>
                <div
                  className={cl.navLink}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Детям
                </div>
              </div>
              <div className={cl.navAccount}>
                Добро пожаловать, <span className={cl.user}>Гость!</span>
              </div>
            </div>
            <div className={cl.bottomLinks}>
              <div className={cl.navLinksMainTags}>
                <div className={[cl.navLink, cl.activeBotttom].join(' ')}>
                  <Link to='/items'>Распродажа</Link>
                </div>
                <div className={cl.navLink}>
                  <Link to='/items'>Новое</Link>
                </div>
                <div className={cl.navLink}>
                  <Link to='/items'>Бренды</Link>
                </div>
                <div className={cl.navLink}>
                  <Link to='/items'>Одежда</Link>
                </div>
                <div className={cl.navLink}>
                  <Link to='/items'>Дом</Link>
                </div>
                <div className={cl.navLink}>
                  <Link to='/items'>Красота</Link>
                </div>
                <div className={cl.navLink}>
                  <Link to='/items'>Обувь</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={cl.dropDownMenuBack}>
          <div className={cl.dropDownMenu}>
            <div className={cl.wrapper}>
              {forMens.map((card, index) => (
                <div className={cl.dropDownMenuCardsContainer}>
                  <div className={cl.dropDownMenuCard}>
                    <div className={cl.cardTitle}>Одежда</div>
                    {card.categories.map((item) => (
                      <div className={cl.cardLink}>{item.title}</div>
                    ))}
                  </div>
                  <div className={cl.dropDownMenuCard}>
                    <div className={cl.cardTitle}>Стиль</div>
                    {card.style.map((item) => (
                      <div className={cl.cardLink}>{item.title}</div>
                    ))}
                  </div>
                  <div className={cl.dropDownMenuCard}>
                    <div className={cl.cardTitle}>ПОВОД</div>
                    {card.ourChoice.map((item) => (
                      <div className={cl.cardLink}>{item.title}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={cl.overlay}></div>
    </div>
  );
};
