import React from 'react';

export const Pawn = (
  width: number,
  height: number,
  pieceColor: 'black' | 'white'
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 45 45"
  >
    <g
      fill={pieceColor === 'black' ? '#000' : '#FFF'}
      stroke="#000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="miter"
    >
      <path
        d="M 22.5,9
			C 20.29,9 18.5,10.79 18.5,13 C 18.5,13.89 18.79,14.71 19.28,15.38
			C 17.33,16.5 16,18.59 16,21 C 16,23.03 16.94,24.84 18.41,26.03
			C 15.41,27.09 11,31.58 11,39.5
			L 34,39.5
			C 34,31.58 29.59,27.09 26.59,26.03
			C 28.06,24.84 29,23.03 29,21 C 29,18.59 27.67,16.5 25.72,15.38
			C 26.21,14.71 26.5,13.89 26.5,13 C 26.5,10.79 24.71,9 22.5,9
		Z"
      />
    </g>
  </svg>
);
