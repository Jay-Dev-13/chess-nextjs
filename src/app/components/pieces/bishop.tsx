import React from 'react';

export const Bishop = (
  height: number,
  width: number,
  pieceColor: 'black' | 'white'
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width={width}
    height={height}
    viewBox="0 0 45 45"
  >
    <g
      fill={pieceColor === 'black' ? '#000' : '#FFF'}
      stroke="#000"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <circle cx="22.5" cy="8" r="2.5" />
      <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 Z" />
      <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 Z" />
    </g>
    <g
      fill="none"
      stroke={pieceColor === 'black' ? '#FFF' : '#000'}
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M 17.5,26 L 27.5,26" />
      <path d="M 15.0,30 L 30.0,30" />
      <path d="M 22.5,15 L 22.5,22 M 20,17.5 L 25,17.5" />
    </g>
  </svg>
);
