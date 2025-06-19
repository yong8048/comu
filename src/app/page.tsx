import Playlsit from "@/components/features/playlist/Playlsit";
import AppHeader from "@/components/layout/AppHeader";
import { fetchRandomTrack } from "@/lib/jamendo";

export default async function Home() {
  let track = null;
  try {
    track = await fetchRandomTrack();
  } catch (e) {
    console.log(e);
  }

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
