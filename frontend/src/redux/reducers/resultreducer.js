import { FETCH_RESULTS, ANALYZE_RESULTS } from "../types";

const initialState = {
    results: [],
    analysis: {},
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESULTS:
            return { ...state, results: action.payload };
        case ANALYZE_RESULTS:
            return { ...state, analysis: action.payload };
        default:
            return state;
    }
};

export default resultReducer;
