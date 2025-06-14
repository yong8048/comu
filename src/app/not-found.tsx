import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold text-white mb-4">404</h2>
      <p className="text-white mb-4">페이지를 찾을 수 없습니다</p>
      <Link
        href="/"
        className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
