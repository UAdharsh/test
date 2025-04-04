import { FETCH_EXAMS, CREATE_EXAM, DELETE_EXAM } from "../types";
import axios from "axios";

export const fetchExams = () => async (dispatch) => {
    const res = await axios.get("/api/exams");
    dispatch({ type: FETCH_EXAMS, payload: res.data });
};

export const createExam = (exam) => async (dispatch) => {
    const res = await axios.post("/api/exams", exam);
    dispatch({ type: CREATE_EXAM, payload: res.data });
};

export const deleteExam = (examId) => async (dispatch) => {
    await axios.delete(`/api/exams/${examId}`);
    dispatch({ type: DELETE_EXAM, payload: examId });
};
