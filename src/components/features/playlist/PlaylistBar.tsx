import React from 'react';
import { tracks } from './TrackList';

const PlaylistBar = () => {
  return (
    <div className="fixed bottom-12 w-[380px] mt-auto bg-purple-600 rounded-xl flex items-center m-4 shadow-lg">
      <img src={tracks[0].img} className="w-12 h-12 rounded-md mr-4" />
      <div className="flex-1">
        <div className="text-white font-bold">{tracks[0].title}</div>
        <div className="text-white text-sm">{tracks[0].artist}</div>
      </div>
      <button className="mr-4 text-white text-3xl">{'▶️'}</button>
    </div>
  );
};

export default PlaylistBar;
