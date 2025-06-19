"use client";
import React from "react";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistCategory from "./PlaylistCategory";
import TrackList from "./TrackList";
import PlaylistBar from "./PlaylistBar";

const Playlsit = () => {
  return (
    <section className="flex justify-center items-center w-2/5 max-h-full">
      <div className="flex flex-col justify-between items-center w-[400px] h-full border-1 border-gray-600 rounded-2xl">
        <div className="flex flex-col w-full">
          <PlaylistHeader />
          <PlaylistCategory />
          <div className="flex flex-col items-center w-full">
            <TrackList />
            <div className="flex justify-center w-full">
              <PlaylistBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlsit;
