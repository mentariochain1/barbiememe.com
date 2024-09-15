import React from 'react';
import { FaXTwitter, FaTelegram, FaDiscord, FaReddit, FaTiktok } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-200 text-pink-800 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: '"Press Start 2P", cursive' }}>
          Join the Barbie Party!
        </h3>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://x.com/BarbieMemeSol" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
            <FaXTwitter size={36} />
          </a>
          <a href="https://t.me/BarbiePortal" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
            <FaTelegram size={36} />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform duration-300">
            <FaDiscord size={36} />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform duration-300">
            <FaReddit size={36} />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform duration-300">
            <FaTiktok size={36} />
          </a>
        </div>
        {/* Удален блок с вводом email и кнопкой подписки */}
        <p className="text-sm text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          $Barbie is a fun meme token, not affiliated with any official Barbie brand. Investing in meme tokens can be risky. DYOR and consult a financial advisor before investing. Stay fabulous and smart!
        </p>
        <div className="flex justify-center space-x-6 text-xs mb-6">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">FAQ</a>
        </div>
        <div className="text-center text-xs">
          Current $Barbie holders: <span className="font-bold">42,069</span> | Price: <span className="font-bold">$0.000042</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;