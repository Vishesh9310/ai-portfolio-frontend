import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProjects } from "../../services/project.api";
import ScrollToTop from "../common/ScrollToTop";

const FullProject = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <p className="pt-24 text-center">Loading...</p>;
  if (error) return <p className="pt-24 text-center text-red-500">{error}</p>;

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="pt-24 text-center text-red-500 text-xl font-semibold">
        Project not found
      </div>
    );
  }

  return (
    <div className="project-body h-fit">
      <div className="pt-24 px-4 max-w-6xl mx-auto space-y-8 pb-10 ">

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-purple-600">
            {project.title}
          </h1>

          <div className="flex justify-between">
            <h3 className="text-lg text-gray-300">{project.status} Project</h3>
            <h3 className="italic text-lg">{project.date}</h3>
          </div>
          <p className="text-gray-300">
            Tech Stack: {project.tech.join(", ")}
          </p>
        </div>

        {/* Main Image */}
        <div className="space-y-6">
          <img
            src={`${BASE_URL}${project.img.src}`}
            alt={project.img.alt}
            className="w-full rounded-xl object-cover"
          />

          {/* Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.imageList.map((image) => (
              <img
                key={image.id}
                src={`${BASE_URL}${image.src}`}
                alt={image.alt}
                className="h-40 w-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Heading & Description */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-600">
            {project.title}
          </h1>
          <h3 className="text-lg text-purple-500 text-left">{project.description}</h3>
          <div className="leading-relaxed space-y-2 text-left">
            {Array.isArray(project.about)
              ? project.about.map((line, index) => (
                <p key={index}>{line}</p>
              ))
              : <p>{project.about}</p>}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-3 px-6 rounded-full text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            View Code
          </a>
          {project.live && project.live != project.codebtn
            && (<a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-3 px-6 rounded-full text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >Live Preview</a>)
          }
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default FullProject;