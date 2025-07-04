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
        if (Array.isArray(result)) {
          setTracks(result);
        } else if (result) {
          setTracks([result]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setTracks]);

  return (
    <main className="w-full h-screen bg-black">
      <div className="container mx-auto h-full">
        <div className="flex justify-around items-center p-0 lg:p-10 h-full">
          <div className="hidden lg:block">
            <AppHeader />
          </div>
          <div>
            <Playlsit />
          </div>
        </div>
      </div>
    </main>
  );
}
