import AvatarGenerator from '../../components/AvatarGenerator';
import Link from 'next/link';

export default function AvatarGeneratorPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-gray-100 border-b border-gray-200 p-4">
        <Link href="/" className="text-pink-500 hover:text-pink-600 transition-colors">
          ← Back to Home
        </Link>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center pixel-font">
          Barbie Pixel Avatar Creator
        </h1>
        <AvatarGenerator />
      </main>
    </div>
  );
}