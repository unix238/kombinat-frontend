import React from 'react';

export const Favorite = ({ width, height }) => {
  return (
    <svg
      width={width || '19'}
      height={height || '18'}
      viewBox={'0 0 20 20'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.685 9.82489L9.40502 15.2099C9.29252 15.3149 9.15002 15.3749 9.00002 15.3749C8.85002 15.3749 8.70752 15.3149 8.59502 15.2099L3.30002 9.80989C1.89002 8.38489 1.89752 5.87989 3.31502 4.46239C4.73252 3.04489 7.05002 3.03739 8.47502 4.43989C8.68502 4.64989 8.85752 4.86739 9.00002 5.09239C9.15002 4.86739 9.31502 4.64989 9.51002 4.46239C10.1925 3.77239 11.115 3.38989 12.09 3.38989C13.0725 3.38989 13.9875 3.77239 14.6775 4.46239C16.11 5.88739 16.11 8.39989 14.685 9.82489Z'
        fill='black'
      />
    </svg>
  );
};
