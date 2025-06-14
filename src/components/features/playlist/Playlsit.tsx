import React from 'react';
import PlaylistHeader from './PlaylistHeader';
import PlaylistCategory from './PlaylistCategory';
import TrackList from './TrackList';
import PlaylistBar from './PlaylistBar';

const Playlsit = () => {
  return (
    <div className="flex justify-center items-center w-2/5 ">
      <div className="flex flex-col  justify-start items-center w-[400px] h-[90vh] border-1 border-gray-600 rounded-2xl">
        <PlaylistHeader />
        <PlaylistCategory />
        <TrackList />
        <PlaylistBar />
      </div>
    </div>
  );
};

export default Playlsit;
