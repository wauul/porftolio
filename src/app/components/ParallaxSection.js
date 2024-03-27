"use client";
import React from 'react';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

const ParallaxSection = ({ imageSrc, children, speed = -20 }) => (
  <div className="relative min-h-screen flex items-center justify-center">
    <Parallax speed={speed} className="absolute inset-0">
      <Image src={imageSrc} alt="Digital Landscape" fill className="object-cover" priority />
    </Parallax>
    <div className="relative z-10 p-5 text-center">
      <div className="text-white text-4xl font-bold">
        {children}
      </div>
    </div>
  </div>
);

export default ParallaxSection;
