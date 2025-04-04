import { combineReducers } from "redux";
import authReducer from "./authreducer";
import userReducer from "./userreducer";
import subjectReducer from "./subjectreducer";
import examReducer from "./examreducer";
import resultReducer from "./resultreducer";

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    subjects: subjectReducer,
    exams: examReducer,
    results: resultReducer,
});

export default rootReducer;
