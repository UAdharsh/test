import api from "./api";

export const fetchResults = async () => {
  const response = await api.get("/results");
  return response.data;
};

export const analyzeResults = async (examId) => {
  const response = await api.get(`/results/analyze/${examId}`);
  return response.data;
};
