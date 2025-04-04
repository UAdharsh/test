import api from "./api";

export const fetchSubjects = async () => {
  const response = await api.get("/subjects");
  return response.data;
};

export const addSubject = async (subjectData) => {
  const response = await api.post("/subjects", subjectData);
  return response.data;
};

export const deleteSubject = async (subjectId) => {
  const response = await api.delete(`/subjects/${subjectId}`);
  return response.data;
};
