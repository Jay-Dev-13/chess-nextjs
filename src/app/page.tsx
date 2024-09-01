import React from 'react';
import Chessboard from './components/chessboard';
export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-black">
      <Chessboard />
    </div>
  );
}
