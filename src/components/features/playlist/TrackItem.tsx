"use client";

import React from "react";
import { TrackItemProps } from "@/types/track";

interface Props extends TrackItemProps {
  selected?: boolean;
  onClick?: () => void;
}

const TrackItem = ({
  img,
  title,
  artist,
  duration,
  selected,
  onClick,
}: Props) => (
  <li
    className={`flex items-center justify-between w-full rounded-lg px-2 py-1 bg-black/30 shadow-lg  cursor-pointer ${
      selected ? "bg-gray-700" : ""
    }`}
    onClick={onClick}
  >
    <div className="flex gap-4 items-center">
      <img src={img} className="w-11 h-11 rounded-md" alt="Album cover" />
      <div className="flex flex-col justify-center">
        <div className="font-bold text-white">{title}</div>
        <div className="text-xs text-gray-400">{artist}</div>
      </div>
    </div>
    <div className="flex justify-end items-center min-w-[48px]">
      <span className="text-xs text-gray-400">{duration}</span>
    </div>
  </li>
);

export default TrackItem;
