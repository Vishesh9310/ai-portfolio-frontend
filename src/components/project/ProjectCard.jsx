import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    return (
        <div className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl transition-all cursor-pointer h-fit">
            <div className="project-body h-full w-full card rounded-2xl overflow-hidden flex flex-col">
                <NavLink to={`/projects/${project.id}`} >
                    <img src={`${BASE_URL}${project.img.src}`} alt={project.img.alt} className="h-52 w-full object-cover" />
                    <div className="p-4 flex-1 space-y-2">
                        <h3 className="text-center font-bold italic text-lg orbitron">{project.title}</h3>
                        <p className="text-sm text-blue-500">{project.description}</p>
                        <p className="orbitron text-sm italic">Tech Stack: {project.tech}</p>
                        <p className="orbitron text-sm">Date: {project.date}</p>
                    </div>
                </NavLink>
                <div className='text-center w-full pb-4 flex justify-between px-4 gap-5'>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-10 rounded-full text-center w-full">Code</a>
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-10 rounded-full text-center w-full">Preview</a>}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;