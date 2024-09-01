import React from 'react';
import { Cell } from './cell';
import { Board } from './chessboard';

export function Row({ id }: { id: string }) {
  const cells = [];

  for (let i = 1; i <= 8; i++) {
    cells.push(
      <Cell
        key={id + i.toString()}
        id={id + i.toString()}
        bg={Board[id][i].bg}
        piece={Board[id][i].piece}
      />
    );
  }
  return (
    <div className="flex">
      <h3 className="pr-2 content-center">{id}</h3>
      <div id={id} className="row flex m-auto">
        {cells}
      </div>
    </div>
  );
}
