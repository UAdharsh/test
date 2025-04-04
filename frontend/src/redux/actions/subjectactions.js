import { FETCH_SUBJECTS, ADD_SUBJECT, DELETE_SUBJECT } from "../types";
import axios from "axios";

export const fetchSubjects = () => async (dispatch) => {
    const res = await axios.get("/api/subjects");
    dispatch({ type: FETCH_SUBJECTS, payload: res.data });
};

export const addSubject = (subject) => async (dispatch) => {
    const res = await axios.post("/api/subjects", subject);
    dispatch({ type: ADD_SUBJECT, payload: res.data });
};

export const deleteSubject = (subjectId) => async (dispatch) => {
    await axios.delete(`/api/subjects/${subjectId}`);
    dispatch({ type: DELETE_SUBJECT, payload: subjectId });
};
