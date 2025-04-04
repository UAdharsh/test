import api from "./api";

export const fetchExams = async () => {
  const response = await api.get("/exams");
  return response.data;
};

export const createExam = async (examData) => {
  const response = await api.post("/exams", examData);
  return response.data;
};

export const deleteExam = async (examId) => {
  const response = await api.delete(`/exams/${examId}`);
  return response.data;
};
