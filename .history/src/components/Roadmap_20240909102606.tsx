"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
}

const roadmapData: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Launch",
    description: "Token launch and initial marketing"
  },
  {
    phase: "Phase 2",
    title: "DApp",
    description: "Barbie's Dreamhouse DApp for staking"
  },
  {
    phase: "Phase 3",
    title: "NFTs",
    description: "Exclusive Barbie-themed NFT collection"
  },
  {
    phase: "Phase 4",
    title: "Metaverse",
    description: "Barbie's virtual world launch"
  },
  {
    phase: "Phase 5",
    title: "Expansion",
    description: "Cross-chain $BARBIE expansion"
  }
];

const Card = ({ title, description, image, link }: CardProps) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
    style={{
      width: 'calc(100% - 1rem)',
      maxWidth: '400px',
      margin: '0.5rem',
    }}
  >
    <div className="relative h-40 sm:h-48 md:h-56 lg:h-64">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-3 sm:p-4 flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-3 flex-grow">{description}</p>
      <Link href={link}>
        <a className="text-blue-500 hover:text-blue-600 text-xs sm:text-sm mt-auto">Узнать больше</a>
      </Link>
    </div>
  </motion.div>
);

const Roadmap: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="w-full py-16 px-4 relative overflow-hidden" ref={roadmapRef}>
      <Image
        src="/assets/roadmapbarbie.png"
        alt="Roadmap Barbie"
        width={550}
        height={550}
        className={`pixelated absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isMobile ? 'opacity-10' : ''}`}
        style={{ maxWidth: 'none' }}
      />
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-12 sega-barbie-title relative z-10">
        Roadmap
      </h2>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500 transform -translate-x-1/2"
          style={{ scaleY, originY: 0 }}
        />
        {roadmapData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={item.phase}
              className={`flex items-center mb-12 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'pl-8'}`}>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-lg pixel-border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-pink-500 mb-2 pixel-font">{item.phase}</h3>
                  <h4 className="text-lg font-semibold text-purple-700 mb-2 pixel-font">{item.title}</h4>
                  <p className="text-sm text-gray-600 pixel-font">{item.description}</p>
                </motion.div>
              </div>
              <div className="w-2/12 flex justify-center">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-white z-10 pixel-border"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                />
              </div>
              <div className={`w-5/12 ${isEven ? 'pl-8' : 'pr-8'}`}></div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-12 text-center relative z-10">
        <Link href="#community">
          <button 
            className="px-8 py-4 bg-purple-500 text-white font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ 
              fontFamily: '"Press Start 2P", cursive',
              boxShadow: '0 0 0 4px #8A2BE2, 0 0 0 8px #4B0082, 0 6px 0 8px #4B0082',
              textShadow: '2px 2px 0px #4B0082',
              border: '4px solid #9370DB'
            }}
          >
            JOIN COMMUNITY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Roadmap;