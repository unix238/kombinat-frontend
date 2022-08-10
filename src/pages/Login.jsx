import React from 'react';
import '../style/login.css';
import { Logo } from '../components/UI/Icons/Logo';
import { Search } from '../components/UI/Icons/Search';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button/Button';
import { Facebook } from '../components/UI/Icons/Facebook';
import { useState } from 'react';

export const Login = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const changeState = (state) => {
    setCurrentPage(state);
  };
  return (
    <div className='login'>
      <div className='headerTop'>
        <div className='wrapper'>
          <div className='headerItems'>
            <div className='logo'>
              <Link to='/'>
                <Logo width={110} height={20} />
              </Link>
            </div>
            <div className='search'>
              <Search width={20} height={20} />
            </div>
          </div>
        </div>
      </div>

      <div className='login__form'>
        <div className='login__wrapper'>
          <div className='login__register__choice'>
            <div
              className={
                currentPage === 'login'
                  ? 'login__choice active__choice'
                  : 'login__choice'
              }
              onClick={() => {
                changeState('login');
              }}
            >
              Войти
            </div>
            <div
              className={
                currentPage === 'register'
                  ? 'register__choice active__choice'
                  : 'register__choice'
              }
              onClick={() => {
                changeState('register');
              }}
            >
              Регистрация
            </div>
          </div>
          {currentPage === 'login' ? (
            <div className='login__form__form'>
              <div className='form__inputs'>
                <div className='form__input'>
                  <div className='input__text'>Номер телефона или e-mail</div>
                  <input
                    type='text'
                    className='logininput'
                    id='phone'
                    placeholder='+7(___)-___-__-__'
                  />
                </div>
                <div className='form__input'>
                  <div className='input__text'>Пароль</div>
                  <input
                    type='password'
                    className='logininput'
                    id='password'
                    placeholder='Qqwerty1!'
                  />
                </div>
                <div className='submitLogin'>
                  <Button
                    style={{ width: '100%', height: 40 }}
                    text='Войти в аккаунт'
                  />
                </div>
              </div>
            </div>
          ) : currentPage === 'register' ? (
            <>
              <div className='login__form__form'>
                <div className='form__inputs'>
                  <div className='form__input'>
                    <div className='input__text'>Имя</div>
                    <input
                      type='text'
                      className='logininput'
                      id='phone'
                      placeholder=' '
                    />
                  </div>
                  <div className='form__input'>
                    <div className='input__text'>e-mail</div>
                    <input
                      type='text'
                      className='logininput'
                      id='password'
                      placeholder='example@gmail.com'
                    />
                  </div>
                  <div className='input__text'>Номер Телефона</div>
                  <input
                    type='text'
                    className='logininput'
                    id='phone'
                    placeholder='+7(___)-___-__-__'
                  />
                  <div className='chooseConfirmation'>
                    <div className='radiobuttons'>
                      <div className='radiobutton'>
                        <input
                          type='radio'
                          name='confirmation'
                          id='confirmation1'
                        />
                        <label htmlFor='confirmation1'>
                          Получить код по почте
                        </label>
                      </div>
                      <div className='radiobutton'>
                        <input
                          type='radio'
                          name='confirmation'
                          id='confirmation2'
                        />
                        <label htmlFor='confirmation2'>
                          Получить код по SMS
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='submitLogin'>
                    <Button
                      style={{ width: '100%', height: 40 }}
                      text='Получить код подтверждения'
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className='line'></div>

          <div className='login__via'>
            <div className='login__via__tabs'>
              <div className='login__tab'>
                <div className='tab__icon'>
                  <Facebook color={'black'} />
                </div>
                <div className='tab__title'>Facebook</div>
              </div>
              <div className='login__tab'>
                <div className='tab__icon'>
                  <Facebook color={'black'} />
                </div>
                <div className='tab__title'>Google</div>
              </div>
              <div className='login__tab'>
                <div className='tab__icon'>
                  <Facebook color={'black'} />
                </div>
                <div className='tab__title'>Vkontakte</div>
              </div>
              <div className='login__tab'>
                <div className='tab__icon'>
                  <Facebook color={'black'} />
                </div>
                <div className='tab__title'>Apple</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
