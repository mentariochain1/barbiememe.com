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
      width: '100%',
      maxWidth: '400px',
      margin: '0.5rem auto',
    }}
  >
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2 h-12">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-4 flex-grow">{description}</p>
      <Link href={link}>
        <a className="text-blue-500 hover:text-blue-600 text-xs sm:text-sm mt-auto inline-block">Узнать больше</a>
      </Link>
    </div>
  </motion.div>
);

const Roadmap = () => {
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
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Наш путь развития</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;