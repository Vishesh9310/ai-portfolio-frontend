import React, { useState, useEffect } from 'react';
import { fetchFeaturedProjects } from '../services/project.api';
import { Link, NavLink } from 'react-router-dom';

const Projects = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchFeaturedProjects();
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
      <h2 id='projects' className="text-3xl sm:text-4xl text-center font-bold orbitron bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-10">My Projects</h2>
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
            <div className="project-body h-full w-full rounded-2xl overflow-hidden flex flex-col bg-gray-900">
             <NavLink to={`/projects/${project.id}`} >
            
           <img
                src={`${BASE_URL}${project.img.src}`}
                alt={project.img.alt}
                className="h-52 w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col space-y-2">
                <h3 className="text-center font-bold text-2xl orbitron">{project.title}</h3>
                <p className="text-sm px-2 py-1 rounded-full bg-gray-700/70 text-slate-300 w-fit">
                  {project.status}
                </p>
                <p className="text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-gray-700/70 text-slate-300 hover:bg-blue-500/20 hover:text-blue-300 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="orbitron text-sm">{project.date}</p>
              </div>
              
            </NavLink>
              <div className="flex gap-4 justify-center pb-4 px-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 rounded-full text-center text-white font-semibold transition hover:opacity-90"
                >
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 rounded-full text-center text-white font-semibold transition hover:opacity-90"
                  >
                    Preview
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects