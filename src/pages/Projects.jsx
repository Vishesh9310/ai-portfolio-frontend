import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { fetchProjects } from '../services/project.api';
import ScrollToTop from '../components/common/ScrollToTop';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(Array.isArray(data) ? data : []);

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
        <div className="w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="flex justify-center items-center h-screen z-10 text-center max-w-4xl mx-auto">
        <span className="block text-cyan-300 tracking-widest uppercase text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
          Projects
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-24">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Projects