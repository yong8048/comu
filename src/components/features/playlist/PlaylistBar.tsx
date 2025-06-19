"use client";

import React from "react";
import { tracks } from "./TrackList";
import { FaPause, FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useMusicStore } from "@/store/useMusicStore";

const PlaylistBar = () => {
  const { isPlaying, togglePlay } = useMusicStore();

  return (
    <div className="flex w-[95%] rounded-xl items-center justify-between bg-purple-600 shadow-lg mx-auto my-4">
      <div className="flex w-[97%] justify-between">
        <div className="flex gap-2">
          <div className="w-12">
            <Image
              src="https://picsum.photos/25/25"
              width={48}
              height={48}
              alt="Album cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-bold text-white">{tracks[0].title}</div>
            <div className="text-sm text-white">{tracks[0].artist}</div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-xl text-white" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistBar;
