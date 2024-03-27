import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Dropdown from '../components/Dropdown';
import FilterTag from '../components/Tag'; // Ensure the Tag component is correctly implemented
import Modal from '../components/Modal'; // Ensure the Modal component is correctly implemented

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]); // Projects fetched from GitHub
  const [filteredProjects, setFilteredProjects] = useState([]); // Projects filtered by user criteria
  const [projectTypeFilter, setProjectTypeFilter] = useState([]);
  const [technologyFilter, setTechnologyFilter] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch projects from GitHub
  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_VERCEL_ENV_GITHUB_TOKEN;
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/search/repositories?q=user:wauul', {
          headers: {
            'Authorization': 'Bearer ' + token,
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const repos = await response.json();
        console.log(repos.items);
        const projectsData = repos.items.map(repo => ({
          name: repo.name,
          shortDescription: repo.description || "No description",
          description: repo.description || "No detailed description available",
          githubLink: repo.html_url,
          screenshot: "/path-to-default-screenshot.jpg",
          techno: repo.language
        }));
        setProjects(projectsData);
        setFilteredProjects(projectsData); // Initially, all projects are shown
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Detect screen size for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter projects based on selected filters
  useEffect(() => {
    const filtered = projects.filter((project) =>
      (projectTypeFilter.length === 0 || projectTypeFilter.includes(project.type)) &&
      (technologyFilter.length === 0 || technologyFilter.includes(project.techno)) // Modified to use `techno`
    );
    setFilteredProjects(filtered);
  }, [projectTypeFilter, technologyFilter, projects]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleTypeFilterChange = (type) => {
    const newFilter = projectTypeFilter.includes(type)
      ? projectTypeFilter.filter((t) => t !== type)
      : [...projectTypeFilter, type];
    setProjectTypeFilter(newFilter);

  };

  const handleTechnologyFilterChange = (tech) => {
    const newFilter = technologyFilter.includes(tech)
      ? technologyFilter.filter((t) => t !== tech)
      : [...technologyFilter, tech];
    setTechnologyFilter(newFilter);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {projectTypeFilter.map((type) => (
          <FilterTag
            key={type}
            label={type}
            onRemove={() => handleTypeFilterChange(type)}
          />
        ))}

        {technologyFilter.map((tech) => (
          <FilterTag
            key={tech}
            label={tech}
            onRemove={() => handleTechnologyFilterChange(tech)}
          />
        ))}
      </div>

      {/* Filter Dropdowns */}
      <div className="flex justify-center gap-4 mb-6">
        <Dropdown
          title="Project Type"
          options={['Front End', 'Back End', 'Mobile', 'Desktop', 'Fullstack', 'AI']}
          selectedOptions={projectTypeFilter}
          onChange={handleTypeFilterChange}
        />
        <Dropdown
          title="Technology"
          options={['React', 'Kotlin', 'Vue', 'Symfony', 'Python', 'Java', 'React Native', 'Flutter', 'Flask', 'NodeJS', 'TensorFlow', 'Keras', 'Scikit Learn']}
          selectedOptions={technologyFilter}
          onChange={handleTechnologyFilterChange}
        />
      </div>

      {/* Projects Display */}
      {isMobile ? (
        <Slider {...settings}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
          <ProjectModalContent project={selectedProject} />
        </Modal>
      )}
    </>
  );
};

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    className="p-4 bg-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <img src={project.screenshot} alt={project.name} className="object-cover h-32 w-full" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      <p className="mb-4">{project.shortDescription}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
    </div>
  </motion.div>
);

const ProjectModalContent = ({ project }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <img src={project.screenshot} alt={project.name} className="rounded-lg mb-4 w-full h-auto" />
    <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
    <p className="mb-4">{project.description}</p>
    {/* Additional project details */}
  </motion.div>
);


export default Projects;
