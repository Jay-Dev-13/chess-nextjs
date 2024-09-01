import React from 'react';

export const Rook = (
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
      <path
        d="
			M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14
			L 31,17 L 31,29.5 L 33,32 L 33,36 L 12,36 L 12,32 L 14,29.5 L 14,17 Z
		"
      />
      <path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z" />
    </g>
    <g
      fill="none"
      stroke={pieceColor === 'black' ? '#FFF' : '#000'}
      strokeLinecap="round"
    >
      <line strokeWidth="1.2" x1="11" y1="14.0" x2="34" y2="14.0" />
      <line strokeWidth="0.8" x1="14" y1="17.0" x2="31" y2="17.0" />
      <line strokeWidth="0.8" x1="14" y1="29.5" x2="31" y2="29.5" />
      <line strokeWidth="1.2" x1="12" y1="32.0" x2="33" y2="32.0" />
    </g>
  </svg>
);
