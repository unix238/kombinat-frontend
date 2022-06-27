import React from 'react';
import cl from './Button.module.css';

export const Button = ({ link, text, style }) => {
  return (
    <div className={cl.button} style={style}>
      {text || 'Подробнее →'}
    </div>
  );
};
