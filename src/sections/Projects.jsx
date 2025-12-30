import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/project/ProjectCard'
import { fetchProjects } from '../services/project.api';
import { Link } from 'react-router-dom';

const Projects = () => {
  // const topThreeProjects = projects.slice(0, 3);
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

  const topThreeProjects = projects.slice(0,3);


  return (
    <div className='h-fit py-10'>
      <h2 className="text-3xl sm:text-4xl text-center font-bold orbitron bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-10">Projects</h2>
      <div className='flex justify-between px-24 orbitron mb-10'>
        <h2 className="text-2xl font-bold">Top Three Projects</h2>
        <Link to='/project' className='text-xl'>Show More</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-24">
        {topThreeProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects