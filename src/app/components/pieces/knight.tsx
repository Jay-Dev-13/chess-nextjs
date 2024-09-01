import React from 'react';

export const Knight = (
  width: number,
  height: number,
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" />
      <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" />
    </g>
    <g
      fill="#000"
      stroke={pieceColor === 'black' ? '#FFF' : '#000'}
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M 9.5,25.5 A 0.5,0.5,0 1,1 8.5,25.5 A 0.5,0.5,0 1,1 9.5,25.5 Z" />
      <path d="M 15.25,14.2 A 0.5,1.5,30 1,1 13.75,16.8 A 0.5,1.5,30 1,1 15.25,14.2 Z" />
    </g>
  </svg>
);
