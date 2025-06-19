"use client";

import Playlsit from "@/components/features/playlist/Playlsit";
import AppHeader from "@/components/layout/AppHeader";
import { fetchRandomTrack } from "@/lib/jamendo";
import { useEffect } from "react";
import { usePlaylistStore } from "@/store/usePlaylistStore";

export default function Home() {
  const setTracks = usePlaylistStore((state) => state.setTracks);

  useEffect(() => {
    fetchRandomTrack()
      .then((result) => {
        console.log("받아온 트랙:", result);
        // result가 배열이면 그대로, 단일 객체면 배열로 감싸서 저장
        if (Array.isArray(result)) {
          setTracks(result);
        } else if (result) {
          setTracks([result]);
        }
        setTimeout(() => {
          console.log(
            "setTracks 후 tracks 상태:",
            usePlaylistStore.getState().tracks
          );
        }, 0);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setTracks]);

  return (
    <main className="w-full h-screen bg-black">
      <div className="container mx-auto h-full">
        <div className="flex justify-center items-center p-10">
          <AppHeader />
          <Playlsit />
        </div>
      </div>
    </main>
  );
}
