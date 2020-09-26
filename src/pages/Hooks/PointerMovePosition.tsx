import React, { useState } from 'react';

function usePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, any>) {
    setPosition({ x: event.clientX, y: event.clientY });
  }
  return { position, handleMouseMove };
}

export default function MousePos() {
  const { position, handleMouseMove } = usePointer();
  return (
    <>
      <p>自定义hooks: 实现实时显示鼠标移动的位置</p>
      <div
        onMouseMove={handleMouseMove}
        style={{ width: 800, height: 100, border: '1px #ccc solid' }}
      >
        <div>
          x: {position.x} y: {position.y}
        </div>
      </div>
    </>
  );
}
