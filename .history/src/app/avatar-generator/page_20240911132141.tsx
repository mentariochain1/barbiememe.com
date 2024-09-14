import AvatarGenerator from '../../components/AvatarGenerator';

export default function AvatarGeneratorPage() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-pink-400 to-purple-600">
      <div className="max-w-7xl mx-auto h-full">
        <AvatarGenerator />
      </div>
    </div>
  );
}