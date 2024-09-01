import React from 'react';
import { Row } from './row';
import { BLACK_PIECES, WHITE_PIECES } from '@/constants/pieces';

const white = 'bg-sky-100';
const black = 'bg-sky-950';

export type CellData = {
  bg: string;
  piece: React.ReactElement | null;
};

export type BoardType = {
  [key: string]: {
    [key: number]: CellData;
  };
};

export const Board: BoardType = {
  a: {
    1: { bg: black, piece: WHITE_PIECES.ROOK() },
    2: { bg: white, piece: WHITE_PIECES.KNIGHT() },
    3: { bg: black, piece: WHITE_PIECES.BISHOP() },
    4: { bg: white, piece: WHITE_PIECES.QUEEN() },
    5: { bg: black, piece: WHITE_PIECES.KING() },
    6: { bg: white, piece: WHITE_PIECES.BISHOP() },
    7: { bg: black, piece: WHITE_PIECES.KNIGHT() },
    8: { bg: white, piece: WHITE_PIECES.ROOK() },
  },
  b: {
    1: { bg: white, piece: WHITE_PIECES.PAWN() },
    2: { bg: black, piece: WHITE_PIECES.PAWN() },
    3: { bg: white, piece: WHITE_PIECES.PAWN() },
    4: { bg: black, piece: WHITE_PIECES.PAWN() },
    5: { bg: white, piece: WHITE_PIECES.PAWN() },
    6: { bg: black, piece: WHITE_PIECES.PAWN() },
    7: { bg: white, piece: WHITE_PIECES.PAWN() },
    8: { bg: black, piece: WHITE_PIECES.PAWN() },
  },
  c: {
    1: { bg: black, piece: null },
    2: { bg: white, piece: null },
    3: { bg: black, piece: null },
    4: { bg: white, piece: null },
    5: { bg: black, piece: null },
    6: { bg: white, piece: null },
    7: { bg: black, piece: null },
    8: { bg: white, piece: null },
  },
  d: {
    1: { bg: white, piece: null },
    2: { bg: black, piece: null },
    3: { bg: white, piece: null },
    4: { bg: black, piece: null },
    5: { bg: white, piece: null },
    6: { bg: black, piece: null },
    7: { bg: white, piece: null },
    8: { bg: black, piece: null },
  },
  e: {
    1: { bg: black, piece: null },
    2: { bg: white, piece: null },
    3: { bg: black, piece: null },
    4: { bg: white, piece: null },
    5: { bg: black, piece: null },
    6: { bg: white, piece: null },
    7: { bg: black, piece: null },
    8: { bg: white, piece: null },
  },
  f: {
    1: { bg: white, piece: null },
    2: { bg: black, piece: null },
    3: { bg: white, piece: null },
    4: { bg: black, piece: null },
    5: { bg: white, piece: null },
    6: { bg: black, piece: null },
    7: { bg: white, piece: null },
    8: { bg: black, piece: null },
  },
  g: {
    1: { bg: black, piece: BLACK_PIECES.PAWN() },
    2: { bg: white, piece: BLACK_PIECES.PAWN() },
    3: { bg: black, piece: BLACK_PIECES.PAWN() },
    4: { bg: white, piece: BLACK_PIECES.PAWN() },
    5: { bg: black, piece: BLACK_PIECES.PAWN() },
    6: { bg: white, piece: BLACK_PIECES.PAWN() },
    7: { bg: black, piece: BLACK_PIECES.PAWN() },
    8: { bg: white, piece: BLACK_PIECES.PAWN() },
  },
  h: {
    1: { bg: white, piece: BLACK_PIECES.ROOK() },
    2: { bg: black, piece: BLACK_PIECES.KNIGHT() },
    3: { bg: white, piece: BLACK_PIECES.BISHOP() },
    4: { bg: black, piece: BLACK_PIECES.QUEEN() },
    5: { bg: white, piece: BLACK_PIECES.KING() },
    6: { bg: black, piece: BLACK_PIECES.BISHOP() },
    7: { bg: white, piece: BLACK_PIECES.KNIGHT() },
    8: { bg: black, piece: BLACK_PIECES.ROOK() },
  },
};

export default function Chessboard() {
  return (
    <div id="board" className="board p-1 flex flex-col m-auto h-[90vh]">
      <Row id="h" />
      <Row id="g" />
      <Row id="f" />
      <Row id="e" />
      <Row id="d" />
      <Row id="c" />
      <Row id="b" />
      <Row id="a" />
    </div>
  );
}
