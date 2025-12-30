import api from "./api";

export const fetchCertificates = async () => {
  const response = await api.get("/api/certificates");
  return response.data;
};