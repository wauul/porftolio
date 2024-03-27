// pages/index.js
"use client";
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
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

export default function Index() {

  return (
    <ParallaxProvider>
      <Navbar />

      {/* Welcome Section */}
      <section id="home">
        <ParallaxSection imageSrc="/Images/PARALLAX_BACKGROUND.webp">
          <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
        </ParallaxSection>
        <motion.div
          className="p-10 z-10 relative" // Ensure this div appears above the parallax background
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <Home />
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about">
        <ParallaxSection imageSrc="/Images/aboutme.webp">
          <h1 className="text-4xl font-bold text-center">About Me</h1>
        </ParallaxSection>
        <motion.div
          className="p-10 z-10 relative"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <AboutMe />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ParallaxSection imageSrc="/Images/projects.webp">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
        </ParallaxSection>
        <motion.div
          className="p-10 z-10 relative"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <Projects />
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ParallaxSection imageSrc="/Images/contact.webp">
          <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        </ParallaxSection>
        <motion.div
          className="p-10 z-10 relative"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <Contact />
        </motion.div>
      </section>
    </ParallaxProvider>
  );
}
