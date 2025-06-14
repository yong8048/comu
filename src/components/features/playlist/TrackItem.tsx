import React from 'react';
import { tracks } from './TrackList';

const TrackItem = () => {
  return (
    <li className={`flex items-center justify-between p-2 rounded-lg w-[100%]`}>
      <div className="">
        <img src={tracks[0].img} className="w-12 h-12 rounded-md mr-4" />
      </div>
      <div className="flex-1">
        <div className="text-white font-bold">{tracks[0].title}</div>
        <div className="text-gray-400 text-sm">{tracks[0].artist}</div>
      </div>
      <div className="text-gray-400">{tracks[0].duration}</div>
    </li>
  );
};

export default TrackItem;
