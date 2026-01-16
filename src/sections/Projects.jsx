import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { fetchProjects } from '../services/project.api';
import { Link } from 'react-router-dom';

const Projects = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
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

  const topThreeProjects = projects.slice(0, 3);


  return (
    <div className='h-fit py-10 projects-body'>
      <h2 id='projects' className="text-3xl sm:text-4xl text-center font-bold orbitron bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-10">Projects</h2>
      <div className='flex justify-between px-[10%] orbitron mb-10'>
        <h2 className="text-2xl font-bold">Top Three Projects</h2>
        <Link to='/project' className='text-xl'>Show More</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-24">
        {topThreeProjects.map((project, index) => (
          <div
              key={index}
              className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl transition-all cursor-pointer"
            >
              <div className="project-body h-full w-full rounded-2xl overflow-hidden flex flex-col">
                <img
                  src={`${BASE_URL}${project.img.src}`}
                  alt={project.img.alt}
                  className="h-52 w-full object-cover"
                />
                <div className="p-4 flex-1 space-y-2">
                  <h3 className="text-center font-bold italic text-lg orbitron">{project.title}</h3>
                  <p className="text-sm">About: {project.description}</p>
                  <p className="orbitron text-sm">Date: {project.date}</p>    
                </div>
                <div className='text-center w-full pb-4 flex justify-between px-4 gap-5'>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-10 rounded-full text-center w-full">Code</a>
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-10 rounded-full text-center w-full">Preview</a>}
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects