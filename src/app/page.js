"use client";
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider, useTheme } from './ThemeProvider'; // Import ThemeProvider and useTheme
import Navbar from './components/Navbar';
import ParallaxSection from './components/ParallaxSection';
import Home from './pages/Home';
import AboutMe from './pages/Waul'; // Ensure the correct import path
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const SectionWithParallax = ({ id, title, component: Component }) => {
  const { theme } = useTheme();
  const imageIndex = id === 'home' ? '01' : id === 'about' ? '02' : id === 'projects' ? '03' : '04';
  const imageSrc = `/Images/${theme.toUpperCase()}${imageIndex}.jpg`;

  const titleClass = `text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`;


  return (
    <section id={id}>
      <ParallaxSection imageSrc={imageSrc} speed={-10}>
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className={titleClass}>
          {title}
        </motion.h1>
      </ParallaxSection>
      <motion.div
        className="p-10"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="z-10 p-5 text-center"><Component /></div>
      </motion.div>
    </section>
  );
};

export default function Index() {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Navbar />
        {/* Sections */}
        <SectionWithParallax id="home" title="Welcome to My Portfolio" component={Home} />
        <SectionWithParallax id="about" title="About Me" component={AboutMe} />
        <SectionWithParallax id="projects" title="Projects" component={Projects} />
        <SectionWithParallax id="contact" title="Contact Me" component={Contact} />
      </ParallaxProvider>
    </ThemeProvider>
  );
}
