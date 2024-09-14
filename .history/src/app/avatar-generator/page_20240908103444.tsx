import AvatarGenerator from '../../components/AvatarGenerator';

export default function AvatarGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>
        Barbie Meme Avatar Generator
      </h1>
      <AvatarGenerator />
    </div>
  );
}