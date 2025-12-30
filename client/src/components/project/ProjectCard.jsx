import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    return (
        <div className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl transition-all cursor-pointer h-fit" onClick={() => setActiveProject(project)}>
            <div className="project-body h-full w-full card rounded-2xl overflow-hidden flex flex-col">
                <NavLink to={`/projects/${project.id}`} >
                    <img src={`${BASE_URL}${project.img.src}`} alt={project.img.alt} className="h-52 w-full object-cover" />
                    <div className="p-4 flex-1 space-y-2">
                        <h3 className="text-center font-bold italic text-lg orbitron">{project.title}</h3>
                        <p className="text-sm">{project.description}</p>
                        <p className="orbitron text-sm">{project.date}</p>
                    </div>
                </NavLink>
                <div className='text-center w-full pb-4 mx-auto'>
                    <a href={project.codebtn} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-10 rounded-full text-center w-full">Code</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;