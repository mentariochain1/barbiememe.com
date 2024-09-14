import AvatarGenerator from '../../components/AvatarGenerator';

export default function AvatarGeneratorPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
      <div className="w-full h-full max-w-[2056px] max-h-[1329px]">
        <AvatarGenerator />
      </div>
    </div>
  );
}