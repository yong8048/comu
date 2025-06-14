import React from 'react';

const AppHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-3/5 pr-12">
      <div className="flex flex-col gap-5">
        <h1 className="text-7xl font-bold text-white">Coding Music</h1>
        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-2xl">코딩할 때 듣는 음악 플레이리스트</p>
          <p className="text-gray-400 text-lg">#playlist #코딩 #음악 #개발자 #카페느낌</p>
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <button className="bg-green-500 text-black px-8 py-3 rounded-md">Play</button>
        <button className="bg-white text-black px-6 py-3 rounded-md">??</button>
      </div>
    </div>
  );
};

export default AppHeader;
