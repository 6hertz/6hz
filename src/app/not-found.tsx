import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-[50%] text-white">
      <h2 className="text-4xl font-bold text-gold mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-gray-900 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/home">
        <p className="px-6 py-3 text-lg font-semibold bg-gold text-gray-900 rounded-md transition">
        Return to Home
        </p>
      </Link>
    </div>
  );
}
