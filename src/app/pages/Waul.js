"use client"
import React from 'react';
import dynamic from 'next/dynamic'; // Import the dynamic function from next/dynamic
import { FaSchool, FaBriefcase } from 'react-icons/fa';
import { ReactTyped } from "react-typed";


const AboutMe = () => {
  const timelineEvents = [
    { year: '2020', icon: <FaSchool />, title: 'Graduated from XYZ University', description: 'Bachelor’s Degree in Computer Science.' },
    { year: '2021', icon: <FaBriefcase />, title: 'Joined ABC Company', description: 'Worked as a Front-end Developer, focusing on React applications.' },
  ];

  const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'];
  const hobbies = ['Coding', 'Hiking', 'Photography', 'Traveling'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <img src="/Images/Avatar.jpg" alt="Your Name" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <ReactTyped
          strings={['Hello!', ' Wael Fezari ', 'A passionate Front-end Developer.']}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="text-2xl font-bold"
        />
        <p className="mt-2">Welcome to my portfolio. Let's dive into my journey.</p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">My Journey</h3>
        <div className="space-y-4">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0">
                {event.icon}
              </div>
              <div className="ml-4">
                <div className="text-xl font-semibold">{event.title}</div>
                <div>{event.year}</div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="px-4 py-2 border rounded-lg shadow">{skill}</div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Hobbies & Interests</h3>
        <ul className="list-disc list-inside">
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
<div className="text-center mt-8">
  <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Download My Resume</a>
</div>

      </div>
    </div>
  );
};

export default AboutMe;
