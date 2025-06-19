"use client";
import React, { useState } from "react";
import TrackItem from "./TrackItem";

export const tracks = [
  {
    img: "/img1.jpg",
    title: "Beautiful Day",
    artist: "Purrple Cat",
    duration: "03:21",
  },
  {
    img: "/img2.jpg",
    title: "A New Day",
    artist: "Purrple Cat & Leap of Faith",
    duration: "02:18",
  },
  {
    img: "/img3.jpg",
    title: "A Short Walk With You",
    artist: "Purrple Cat",
    duration: "01:31",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img4.jpg",
    title: "Afterglow",
    artist: "Purrple Cat, Mindeliq, Neele Harder",
    duration: "02:30",
  },
  {
    img: "/img5.jpg",
    title: "Dreams Come True",
    artist: "Purrple Cat & Gerardo Millán",
    duration: "03:00",
    active: true,
  },
];

const TrackList = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="w-[350px] h-[75%] overflow-hidden">
      <h2 className="text-2xl text-white font-cursive">재생목록</h2>
      <div className="flex justify-center">
        <ul className="h-[350px] w-[350px] overflow-y-auto ">
          {tracks.map((track, idx) => (
            <TrackItem
              key={idx}
              {...track}
              selected={selectedIdx === idx}
              onClick={() => setSelectedIdx(idx)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackList;
