import React from 'react';

export const Profile = () => {
  return (
    <div className='wrapper'>
      <div className='profile__selector'>
        <div className='profile__selector__active'>Личные данные</div>
        <div className='profile__selector'>Мои заказы</div>
      </div>
    </div>
  );
};
