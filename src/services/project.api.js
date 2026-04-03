import api from "./api";

export const fetchTopProjects = async () => {
  try {
    const response = await api.get("/api/projects/top");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects");
    throw error;
  }
};

export const fetchDataProjects = async () => {
  try {
    const response = await api.get("/api/projects/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects");
    throw error;
  }
};

export const fetchAverageProjects = async () => {
  try {
    const response = await api.get("/api/projects/average");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects");
    throw error;
  }
};

export const fetchFeaturedProjects = async () => {
  try{
    const response = await api.get("/api/projects/featured");
    return response.data;
  }catch (error) {
    console.error("Error fetching projects");
    throw error;
  }
}
