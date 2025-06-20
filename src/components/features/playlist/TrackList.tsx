"use client";
import React, { useEffect, useState } from "react";
import TrackItem from "./TrackItem";
import { usePlaylistStore } from "@/store/usePlaylistStore";

function formatDuration(duration: number | string) {
  if (typeof duration === "string") return duration;
  const min = Math.floor(duration / 60)
    .toString()
    .padStart(2, "0");
  const sec = Math.floor(duration % 60)
    .toString()
    .padStart(2, "0");
  return `${min}:${sec}`;
}

const skeletonArray = Array.from({ length: 5 });

const TrackList = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const tracks = usePlaylistStore((state) => state.tracks);
  const selectTrack = usePlaylistStore((state) => state.selectTrack);

  useEffect(() => {
    if (tracks.length > 0) {
      setSelectedIdx(0);
      selectTrack(tracks[0]);
      console.log(tracks[0].image);
    }
  }, [tracks, selectTrack]);

  useEffect(() => {
    if (tracks.length > 0) {
      console.log(tracks[0].image);
    }
  }, [tracks]);

  return (
    <div className="w-[350px] h-[75%] overflow-hidden">
      <h2 className="text-2xl text-white font-cursive">재생목록</h2>
      <div className="flex justify-center">
        <ul className="h-[300px] w-full overflow-y-auto ">
          {tracks.length === 0
            ? skeletonArray.map((_, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between w-full rounded-lg px-2 py-1 bg-black/20 animate-pulse mb-2"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-11 h-11 bg-gray-700 rounded-md" />
                    <div className="flex flex-col gap-2">
                      <div className="w-24 h-4 bg-gray-700 rounded" />
                      <div className="w-16 h-3 bg-gray-700 rounded" />
                    </div>
                  </div>
                  <div className="w-10 h-3 bg-gray-700 rounded" />
                </li>
              ))
            : tracks.map((track, idx) => (
                <TrackItem
                  key={track.id ? track.id : idx}
                  img={track.image}
                  title={track.name}
                  artist={track.artist_name}
                  duration={formatDuration(track.duration)}
                  selected={selectedIdx === idx}
                  onClick={() => {
                    setSelectedIdx(idx);
                    selectTrack(track);
                  }}
                />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackList;
