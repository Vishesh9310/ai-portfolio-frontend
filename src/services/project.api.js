import api from "./api";

export const fetchProjects = async () => {
  const response = await api.get("/api/projects");
  return response.data;
};