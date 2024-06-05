import React, { useState } from 'react';

const MovableDiv: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setPos({
      x: pos.x + e.movementX,
      y: pos.y + e.movementY,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Add an event listener to stop dragging when the cursor leaves the div
  const handleMouseLeave = () => {
    setDragging(false);
  };

  return (
    <div
      className="w-32 h-32 bg-blue-500 absolute cursor-move"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave} // Add this line
    >
      Hold and drag me!
    </div>
  );
};

export default MovableDiv;
