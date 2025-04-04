import { FETCH_EXAMS, CREATE_EXAM, DELETE_EXAM } from "../types";

const initialState = {
    exams: [],
};

const examReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXAMS:
            return { ...state, exams: action.payload };
        case CREATE_EXAM:
            return { ...state, exams: [...state.exams, action.payload] };
        case DELETE_EXAM:
            return {
                ...state,
                exams: state.exams.filter((exam) => exam.id !== action.payload),
            };
        default:
            return state;
    }
};

export default examReducer;
