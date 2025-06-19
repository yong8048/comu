"use client";
import React, { useRef, useState, useCallback } from "react";

const categories = [
  { name: "Coding", gradient: "from-blue-200 to-blue-900" },
  { name: "Chill", gradient: "from-pink-400 to-purple-800" },
  { name: "Study", gradient: "from-orange-300 to-orange-800" },
];

export default function PlaylistCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
      const walk = x - startX;
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft - walk;
      }
    },
    [isDragging, startX, scrollLeft]
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 pb-4 h-[22vh] overflow-x-auto pl-2 "
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {categories.map((cat) => (
        <div
          key={cat.name}
          className={`hover:cursor-pointer min-w-[150px] h-[20vh] rounded-xl flex items-center justify-center text-2xl font-cursive text-white bg-gradient-to-br ${cat.gradient} shadow-lg`}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
}
