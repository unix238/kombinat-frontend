import React from 'react';
import '../style/login.css';
import { Logo } from '../components/UI/Icons/Logo';
import { Search } from '../components/UI/Icons/Search';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI/Button/Button';
import { Facebook } from '../components/UI/Icons/Facebook';
import { useState } from 'react';
import ServiceApi from '../api/ServiceApi';
import { validateEmail, validatePhone } from '../utils/validate';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [regError, setRegError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [newPhone, setNewPhone] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [choice, setChoice] = useState('email');

  const [currentPage, setCurrentPage] = useState('login');
  const changeState = (state) => {
    setCurrentPage(state);
  };

  const LogIn = async () => {
    if (login.length < 0) {
      setError('Неверный номер телефона или пароль');
      return;
    }
    if (password.length < 0) {
      setError('Неверный номер телефона или пароль');
      return;
    }
    try {
      const req = await ServiceApi.login(login, password);
      if (req) {
        setError('');
        setIsLoading(false);
        setLogin('');
        setPassword('');
        localStorage.setItem('token', req.token);
        window.location.href = '/';
      }
    } catch (e) {
      setError('Неверный номер телефона или пароль');
    }
  };

  const register = () => {
    if (validateEmail(newEmail) && validatePhone(newPhone)) {
      setCurrentPage('activation');
    } else {
      setRegError('Проверьте правильность введенных данных');
    }
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
                currentPage === 'register' || currentPage === 'activation'
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
                    value={login}
                    onChange={(e) => {
                      setLogin(e.target.value);
                    }}
                  />
                </div>
                <div className='form__input'>
                  <div className='input__text'>Пароль</div>
                  <input
                    type='password'
                    className='logininput'
                    id='password'
                    placeholder='Пароль'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                </div>
                <div className='error'>{error}</div>
                <div className='submitLogin'>
                  <Button
                    style={{ width: '100%', height: 40 }}
                    text='Войти в аккаунт'
                    onClick={LogIn}
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
                      placeholder='Имя'
                      value={newName}
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                    />
                  </div>
                  <div className='form__input'>
                    <div className='input__text'>e-mail</div>
                    <input
                      type='text'
                      className='logininput'
                      placeholder='example@gmail.com'
                      onChange={(e) => {
                        setNewEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className='input__text'>Номер Телефона</div>
                  <input
                    type='text'
                    className='logininput'
                    id='phone'
                    placeholder='+7(___)-___-__-__'
                    value={newPhone}
                    onChange={(e) => {
                      setNewPhone(e.target.value);
                    }}
                  />
                  <div className='chooseConfirmation'>
                    <div className='radiobuttons'>
                      <div className='radiobutton'>
                        <input
                          type='radio'
                          value={'email'}
                          checked={choice === 'email'}
                          onChange={(e) => {
                            setChoice(e.target.value);
                          }}
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
                          value={'sms'}
                          checked={choice === 'sms'}
                          onChange={(e) => {
                            setChoice(e.target.value);
                          }}
                          name='confirmation'
                          id='confirmation2'
                        />
                        <label htmlFor='confirmation2'>
                          Получить код по SMS
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='error'>{regError}</div>
                  <div className='submitLogin'>
                    <Button
                      style={{ width: '100%', height: 40 }}
                      text='Получить код подтверждения'
                      onClick={register}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : currentPage === 'activation' ? (
            <div className='activation'>
              <div className='activationText'>
                Код был отправлен на номер {newPhone}. Чтобы подтвердить свою
                личность, введите его:
              </div>
              <div className='activationCode'>
                <input maxlength='4' id='activation' />
              </div>
              <div className='sendAgain'>Отправить повторно через 00:58</div>
              <Button
                style={{ width: '100%', height: 40 }}
                text='Продолжить'
                onClick={register}
              />
            </div>
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
