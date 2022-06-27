import React from 'react';
import { Button } from '../Button/Button';
import cl from './Footer.module.css';
import { Facebook } from '../../UI/Icons/Facebook';
import { Telegram } from '../../UI/Icons/Telegram';
import { Twitter } from '../../UI/Icons/Twitter';
import { Instagram } from '../../UI/Icons/Instagram';
import { Youtube } from '../../UI/Icons/Youtube';

export const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className={cl.wrapper}>
        <div className={cl.contact__form}>
          <div className={cl.form__title}>Связаться с нами</div>
          <div className={cl.form__subtitle}>
            Поля, отмеченные звездочкой (*) обязательны для заполнения.
          </div>
          <div className={cl.form__inputs}>
            <div className={cl.input__block}>
              <label htmlFor='name'>Имя*</label>
              <input type='name' className={cl.name} name='name' />
            </div>
            <div className={cl.input__block}>
              <label htmlFor='surname'>Фамилия*</label>
              <input type='surname' className={cl.surname} name='surname' />
            </div>
            <div className={cl.input__block}>
              <label htmlFor='email'>e-mail*</label>
              <input type='email' className={cl.email} name='email' />
            </div>
            <div className={cl.input__block}>
              <label htmlFor='phone'>Номер телефона</label>
              <input type='phone' className={cl.phone} name='phone' />
            </div>
            <div className={[cl.input__block, cl.message].join(' ')}>
              <label htmlFor='message'>Сообщение</label>
              <textarea
                className={cl.message}
                placeholder='Напишите что–нибудь'
                name='message'
              />
            </div>
          </div>
          <div className={cl.form__submit}>
            <Button
              style={{
                width: '220px',
                height: '38px',
              }}
              text='Отправить →'
            />
          </div>
        </div>
      </div>
      <div className={cl.footer__main}>
        <div className={cl.wrapper}>
          <div className={cl.footer__main}>
            <div className={cl.footer__left}>
              <div className={cl.footer__title}>Администратор объединения:</div>
              <div className={cl.footer__subtitle}>
                +7 (777) 123 4567 <br /> info@kmbinat.kz
              </div>
            </div>
            <div className={cl.footer__right}>
              <div className={cl.footer__title}>
                © 2022 KMBINAT. Все права защищены.
              </div>
              <div className={cl.footer__subtitle}>
                «KMBINAT» является зарегистрированным товарным знаком, любое
                использование без письменного разрешения правообладателя
                запрещено.
              </div>
              <div className={cl.spacer}></div>
              <div className={cl.footer__subtitle}>
                Пользовательское соглашение
              </div>
              <div className={cl.links}>
                <div className={cl.link}>
                  <Telegram />
                </div>
                <div className={cl.link}>
                  <Facebook />
                </div>
                <div className={cl.link}>
                  <Twitter />
                </div>
                <div className={cl.link}>
                  <Instagram />
                </div>
                <div className={cl.link}>
                  <Youtube />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
