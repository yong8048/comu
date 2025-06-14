'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold text-white mb-4">문제가 발생했습니다</h2>
      <p className="text-white mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">
        다시 시도
      </button>
    </div>
  );
}
