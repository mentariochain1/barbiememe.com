import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1c1e] text-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>
          Connect with us
        </h3>
        <div className="flex justify-center space-x-8 mb-12">
          <a href="#" className="transform hover:scale-110 transition-transform duration-300">
            <Image src="/assets/x-icon.svg" alt="X (Twitter)" width={48} height={48} />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform duration-300">
            <Image src="/assets/telegram-icon.svg" alt="Telegram" width={48} height={48} />
          </a>
        </div>
        <p className="text-sm text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          $Barbie is an entertainment-based cryptocurrency with no formal affiliations. Any elements inspired by internet culture are for comedic purposes only. Investing in meme tokens, including $Barbie, carries several risks. Please conduct thorough research and consult with financial advisors before making any investment decisions.
        </p>
        <div className="flex justify-center space-x-6 text-xs">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;