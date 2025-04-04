import { FETCH_RESULTS, ANALYZE_RESULTS } from "../types";
import axios from "axios";

export const fetchResults = () => async (dispatch) => {
    const res = await axios.get("/api/results");
    dispatch({ type: FETCH_RESULTS, payload: res.data });
};

export const analyzeResults = (examId) => async (dispatch) => {
    const res = await axios.get(`/api/results/analyze/${examId}`);
    dispatch({ type: ANALYZE_RESULTS, payload: res.data });
};
