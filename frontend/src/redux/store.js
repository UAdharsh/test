import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authreducer";
import userReducer from "./reducers/userreducer";
import subjectReducer from "./reducers/subjectreducer";
import examReducer from "./reducers/examreducer";
import resultReducer from "./reducers/resultreducer";

const store = configureStore({
    reducer: {
        auth: authreducer,
        users: userreducer,
        subjects: subjectreducer,
        exams: examreducer,
        results: resultreducer
    },
});

export default store;
