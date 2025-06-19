"use client";

import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { useMusicStore } from "@/store/useMusicStore";
import toast from "react-hot-toast";

const AppHeader = () => {
  const { isPlaying, togglePlay } = useMusicStore();
  const [isShareDisabled, setIsShareDisabled] = useState(false);

  const clickShare = async () => {
    if (isShareDisabled) return;

    setIsShareDisabled(true);
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("링크가 복사되었습니다!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } catch (err) {
      toast.error("링크 복사에 실패했습니다." + err, {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }

    setTimeout(() => {
      setIsShareDisabled(false);
    }, 800);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-5 w-3/5">
        <h1 className="text-7xl font-bold text-white">Coding Music</h1>
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-gray-400">
            코딩할 때 듣는 음악 플레이리스트
          </p>
          <p className="text-lg text-gray-400">
            #playlist #코딩 #음악 #개발자 #카페느낌
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-4 w-full">
        <button
          className={`${
            isPlaying ? "bg-gray-500" : "bg-green-500"
          } w-[200px] h-10 rounded-md flex items-center justify-center gap-2 text-white py-2`}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <>
              <FaPause />
              <span>Pause</span>
            </>
          ) : (
            <>
              <FaPlay />
              <span>Play</span>
            </>
          )}
        </button>
        <button
          className="flex justify-center items-center gap-2 bg-white w-[150px] text-black px-6 py-3 rounded-md transition-colors"
          onClick={clickShare}
        >
          <CiShare2 />
          Share
        </button>
      </div>
    </section>
  );
};

export default AppHeader;
