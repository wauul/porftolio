import React, { useState } from 'react';
import Slider from 'react-slick'; // Import Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaUniversity, FaCamera, FaGamepad, FaPlane, FaBook, FaFilm, FaDatabase, FaBrain } from 'react-icons/fa';
import { DiDocker, DiGit, DiMarkdown, DiJava } from 'react-icons/di';
import { SiPython, SiGitlab, SiSwagger, SiXstate, SiBuefy, SiDart, SiIntegromat, SiTailwindcss, SiAirtable, SiNextdotjs, SiElixir, SiFlask, SiKotlin, SiFlutter, SiSymfony, SiSpring, SiTensorflow, SiScikitlearn, SiPytorch, SiPandas, SiSoundcharts, SiPysyft, SiLatex, SiJavascript, SiPhp, SiAngular, SiReact, SiNodedotjs, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiMicrosoftazure } from 'react-icons/si';

const AboutMe = () => {
  const timelineEvents = [
    { year: '2016', icon: <FaGraduationCap />, title: 'Baccalauréat in Applied Maths', description: 'Obtained my Baccalauréat in Applied Mathematics from a high school in Annaba, Algeria.' },
    { year: '2016-2019', icon: <FaUniversity />, title: 'Licence Degree in Information Systems', description: 'Completed my Licence Degree in Information Systems at Badji Mokhtar University, Annaba.' },
    { year: '2019-2021', icon: <FaUniversity />, title: 'Master\'s Degree in Information Systems and Decisions', description: 'Earned my Master\'s Degree in Information Systems and Decisions from Badji Mokhtar University, Annaba.' },
    { year: '2016-2021', icon: <FaLaptopCode />, title: 'Freelance Web and Mobile Developer', description: 'Worked on various freelance projects in web and mobile development during my university years.' },
    { year: '2022-Present', icon: <FaBriefcase />, title: 'MSc Pro at Epitech & Fullstack AI/No-Code Developer at ROKI TEAM', description: 'Pursuing an MSc Pro in Web/Mobile/Desktop Development with a speciality in AI at Epitech Marseille and working as a Fullstack AI/No-Code Developer at ROKI Team.' },
  ];

  const skillsCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Java', icon: <DiJava /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'Elixir', icon: <SiElixir /> },
        { name: 'Kotlin', icon: <SiKotlin /> },
        { name: 'Dart', icon: <SiDart /> },
      ],
    },
    {
      category: 'Front-end Frameworks',
      skills: [
        { name: 'ReactJS', icon: <SiReact /> },
        { name: 'NextJS', icon: <SiNextdotjs /> },
        { name: 'AngularJS', icon: <SiAngular /> },
        { name: 'Compose', icon: <SiKotlin /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'React Native', icon: <SiReact /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
      ],
    },
    {
      category: 'Back-end Frameworks',
      skills: [
        { name: 'NodeJS', icon: <SiNodedotjs /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'Symfony', icon: <SiSymfony /> },
        { name: 'Spring', icon: <SiSpring /> },
      ],
    },
    {
      category: 'AI Libraries',
      skills: [
        { name: 'Tensorflow', icon: <SiTensorflow /> },
        { name: 'Scikit-learn', icon: <SiScikitlearn /> },
        { name: 'Pytorch', icon: <SiPytorch /> },
        { name: 'Keras', icon: <SiTensorflow /> },
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'Numpy', icon: <FaBrain /> },
        { name: 'Matplotlib', icon: <SiSoundcharts /> },
        { name: 'NLTK', icon: <SiPysyft /> },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'SQLite', icon: <FaDatabase /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Firebase', icon: <SiFirebase /> },
      ],
    },
    {
      category: 'NO-Code',
      skills: [
        { name: 'Bubble.io', icon: <SiBuefy /> },
        { name: 'Airtable', icon: <SiAirtable /> },
        { name: 'Xano', icon: <SiXstate /> },
        { name: 'Make', icon: <SiIntegromat /> },
      ],
    },
    {
      category: 'DevOps',
      skills: [
        { name: 'Azure', icon: <SiMicrosoftazure /> },
        { name: 'Docker', icon: <DiDocker /> },
      ],
    },
    {
      category: 'Versioning',
      skills: [
        { name: 'Git', icon: <DiGit /> },
        { name: 'Gitlab', icon: <SiGitlab /> },
      ],
    },
    {
      category: 'Documentation',
      skills: [
        { name: 'Markdown', icon: <DiMarkdown /> },
        { name: 'LaTeX', icon: <SiLatex /> },
        { name: 'Swagger', icon: <SiSwagger /> },
      ],
    },
  ];

  const hobbies = [
    { hobby: 'Photography', icon: <FaCamera /> },
    { hobby: 'Gaming', icon: <FaGamepad /> },
    { hobby: 'Traveling', icon: <FaPlane /> },
    { hobby: 'Reading', icon: <FaBook /> },
    { hobby: 'Movies', icon: <FaFilm /> },
  ];

  const sliderSettings = {
    dots: true, // Show dot indicators at the bottom
    infinite: false, // Don't loop back to the beginning/end
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For devices less than 1024px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For devices less than 600px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // Enable dot indicators for smaller devices
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="w-32 h-32 rounded-full mx-auto mb-4">
          <Image
            src="/Images/Avatar.jpg"
            alt="Your Name"
            width={128}
            height={128}
            className="rounded-full"
          />
        </div>
        <ReactTyped
          strings={['Hello!', 'Wael Fezari.', '27 Years Old.', 'Fullstack Developer.', 'AI Enthusiast.', 'Tech Geek.', 'Mythology Lover.']}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="text-2xl font-bold" />

        <p className="mt-2 text-lg ">
          Welcome! I&apos;m excited to have you here exploring my portfolio. It&apos;s a collection of my work and experiences in the tech world, from the first line of code I wrote to the latest project I&apos;ve completed. Dive in to see the technologies I&apos;ve worked with and the projects I&apos;m proud of.
        </p>

      </div>


      <div className="mb-8 w-full">
        <h3 className="text-2xl font-bold mb-4">My Journey</h3>

        {/* Slider - Visible on small screens */}
        <div className="block md:hidden">
          <Slider {...sliderSettings}>
            {timelineEvents.map((event, index) => (
              <div key={index} className="p-4">
                <div className="border rounded-lg p-4 flex flex-col items-center justify-center h-full">
                  <div className="flex-shrink-0">{event.icon}</div>
                  <div className="text-center mt-2">
                    <div className="text-xl font-semibold">{event.title}</div>
                    <div>{event.year}</div>
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Original Layout - Visible on larger screens */}
        <div className="hidden md:flex items-center justify-between">
          {timelineEvents.map((event, index) => (
            <div key={index} className="border rounded-lg p-4 flex flex-col items-center" style={{ flexGrow: 1, margin: '0 10px', maxWidth: `calc(100% / ${timelineEvents.length} - 20px)` }}>
              <div className="flex-shrink-0">{event.icon}</div>
              <div className="text-center mt-2">
                <div className="text-xl font-semibold">{event.title}</div>
                <div>{event.year}</div>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, catIndex) => (
            <CategoryCard key={catIndex} title={category.category} skills={category.skills} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Hobbies & Interests</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {hobbies.map(({ hobby, icon }, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg">
              <div className="text-3xl mb-2">{icon}</div>
              <div>{hobby}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <a href="/CV-Wael Fezari.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Download My Resume
        </a>
      </div>

    </div>
  );
};

const CategoryCard = ({ title, skills }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`border rounded-lg p-4 shadow-lg mb-4 transition-all ${isOpen ? 'max-h-[1000px]' : 'max-h-20'}`} onClick={() => setIsOpen(!isOpen)}>
      <h4 className="text-xl font-semibold mb-2 cursor-pointer">{title}</h4>
      <div className={`grid grid-cols-2 gap-2 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="text-2xl mr-2">{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

