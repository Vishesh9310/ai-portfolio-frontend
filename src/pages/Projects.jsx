import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/project/ProjectCard';
import { fetchAverageProjects, fetchDataProjects, fetchTopProjects } from '../services/project.api';
import ScrollToTop from '../components/common/ScrollToTop';

const Projects = () => {
  const [topprojects, setTopProjects] = useState([]);
  const [dataprojects, setDataProjects] = useState([]);
  const [averageprojects, setAverageProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const topprojects = await fetchTopProjects();
        setTopProjects(Array.isArray(topprojects) ? topprojects : []);
        
        const dataprojects = await fetchDataProjects();
        setDataProjects(Array.isArray(dataprojects) ? dataprojects : []);
        
        const averageprojects = await fetchAverageProjects();
        setAverageProjects(Array.isArray(averageprojects) ? averageprojects : []);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='projects-body'>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] md:w-[520px] h-[50vh] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="flex justify-center items-center h-[50vh] z-10 text-center max-w-4xl mx-auto">
        <span className="block text-cyan-300 tracking-widest uppercase text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
          My Projects
        </span>
      </div>

      {/* Top Projects */}
      <h2 className='text-4xl p-[5%] orbitron'>## Web Dev Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-24">
        {topprojects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Data Projects */}
      <h2 className='text-4xl p-[5%] orbitron'>## Data Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-24">
        {dataprojects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        )) && <span>Coming soon...</span>}
      </div>

      {/* Normal Projects */}
      <h2 className='text-4xl p-[5%] orbitron'>## Other Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-24">
        {averageprojects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Projects