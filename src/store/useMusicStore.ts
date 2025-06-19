import { create } from "zustand";

interface MusicState {
  isPlaying: boolean;
  togglePlay: () => void;
  setPlaying: (isPlaying: boolean) => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  isPlaying: false,
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setPlaying: (isPlaying) => set({ isPlaying }),
}));
