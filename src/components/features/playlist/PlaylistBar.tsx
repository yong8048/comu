"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { useMusicStore } from "@/store/useMusicStore";
import { usePlaylistStore } from "@/store/usePlaylistStore";

const PlaylistBar = () => {
  const { isPlaying, togglePlay } = useMusicStore();
  const [isLoading, setIsLoading] = useState(true);
  const tracks = usePlaylistStore((state) => state.tracks);
  const selectedTrack = usePlaylistStore((state) => state.selectedTrack);
  const selectTrack = usePlaylistStore((state) => state.selectTrack);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, selectedTrack]);

  useEffect(() => {
    if (tracks.length > 0 && !selectedTrack) {
      selectTrack(tracks[0]);
      console.log(tracks[0].id);

      setIsLoading(false);
    }
  }, [tracks, selectedTrack, selectTrack]);

  if (isLoading) {
    return (
      <div className="flex w-[95%] h-[72px] rounded-xl items-center justify-between bg-purple-600 shadow-lg mx-auto my-4 animate-pulse">
        <div className="flex w-[97%] justify-between">
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-gray-500 rounded-md" />
            <div className="flex flex-col justify-center gap-2">
              <div className="w-24 h-4 bg-gray-500 rounded" />
              <div className="w-16 h-3 bg-gray-500 rounded" />
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="w-8 h-8 bg-gray-500 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!selectedTrack) return null;

  return (
    <div className="flex w-[95%] rounded-xl items-center justify-between bg-purple-600 shadow-lg mx-auto my-4">
      <div className="flex w-[97%] justify-between">
        <div className="flex gap-2">
          <div className="w-12">
            <img
              src={selectedTrack.image || selectedTrack.album_image}
              className="w-12 h-12 rounded-md"
              alt="Album cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-bold text-white">{selectedTrack.name}</div>
            <div className="text-sm text-white">
              {selectedTrack.artist_name}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-xl text-white" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={selectedTrack.audio}
        preload="auto"
        style={{ display: "none" }}
      />
    </div>
  );
};
export default PlaylistBar;
