import { create } from "zustand";
import { Track } from "@/types/track";

interface PlaylistState {
  tracks: Track[];
  selectedTrack: Track | null;
  setTracks: (tracks: Track[]) => void;
  selectTrack: (track: Track) => void;
}

export const usePlaylistStore = create<PlaylistState>((set) => ({
  tracks: [],
  selectedTrack: null,
  setTracks: (tracks) => set({ tracks }),
  selectTrack: (track) => set({ selectedTrack: track }),
}));
