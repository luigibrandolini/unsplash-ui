import { combineReducers } from "redux";

import picturesReducer from "./reducers";

// Import all reducers

const reducers = combineReducers({
    pictures: picturesReducer
})

export default reducers;