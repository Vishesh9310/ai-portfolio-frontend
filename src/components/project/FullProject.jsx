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
          <p className="text-gray-400">
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

        {/* Description */}
        <p className="text-center text-purple-400">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <a
            href={project.github}
            target="_blank"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold"
          >
            View Code
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold"
            >
              Live Preview
            </a>
          )}
        </div>

      </div>
      <ScrollToTop />
    </div>
  );
};

export default FullProject;