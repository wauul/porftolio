"use client";
import React from 'react';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

const ParallaxSection = ({
  imageSrc,
  altText = 'Digital Landscape', 
  children,
  speed = -20,
  className = '', 
  imagePriority = false, 
  ...parallaxProps 
}) => (
  <div className={`relative min-h-screen flex items-center justify-center ${className}`}>
    <Parallax speed={speed} className="absolute inset-0" {...parallaxProps}>
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover"
        priority={imagePriority}
        onError={(e) => {
          console.error('Image failed to load', e);
        }}
      />
    </Parallax>
    <div className="relative z-10 p-5 text-center">
      <div className="text-white text-4xl font-bold">
        {children}
      </div>
    </div>
  </div>
);

export default ParallaxSection;
