import React from 'react';
import '../globals.css';

export function Cell({
  id,
  bg,
  piece,
}: {
  id: string;
  bg: string;
  piece: React.ReactElement | null;
}) {
  const content = id.startsWith('a') ? id.slice(1) : '';
  return (
    <div>
      <div id={id} className={`cell h-[5em] w-[5em] ${bg}`}>
        {piece}
      </div>
      <h3
        className="flex content-center justify-center cell-after"
        data-content={content}
      ></h3>
    </div>
  );
}
