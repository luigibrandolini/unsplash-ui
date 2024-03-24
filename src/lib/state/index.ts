import { combineReducers } from "redux";

import favoritePicturesReducer from "./reducers";

// Import all reducers

const reducers = combineReducers({
    favorites: favoritePicturesReducer
})

export default reducers;