import Playlsit from '@/components/features/playlist/Playlsit';
import AppHeader from '@/components/layout/AppHeader';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center bg-black">
      <div className="w-full mx-auto px-8 py-12">
        <div className="flex items-center">
          <AppHeader />
          <Playlsit />
        </div>
      </div>
    </main>
  );
}
