import { FETCH_SUBJECTS, ADD_SUBJECT, DELETE_SUBJECT } from "../types";

const initialState = {
    subjects: [],
};

const subjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUBJECTS:
            return { ...state, subjects: action.payload };
        case ADD_SUBJECT:
            return { ...state, subjects: [...state.subjects, action.payload] };
        case DELETE_SUBJECT:
            return {
                ...state,
                subjects: state.subjects.filter(
                    (subject) => subject.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default subjectReducer;
