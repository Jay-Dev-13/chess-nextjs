import React from 'react';

export const King = (
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
      strokeLinejoin="round"
    >
      <path
        fill="none"
        strokeLinecap="round"
        d="M 22.5,11.63 L 22.5,6 M 20,8 L 25,8"
      />
      <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" />
      <path d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37" />
    </g>
    <g
      fill="none"
      stroke={pieceColor === 'black' ? '#FFF' : '#000'}
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M 11.5,30 C 17,27 27,27 32.5,30" />
      <path d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5" />
      <path d="M 11.5,37 C 17,34 27,34 32.5,37" />
    </g>
  </svg>
);
