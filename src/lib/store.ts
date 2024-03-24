import { applyMiddleware, legacy_createStore as createStore } from "redux";

// Import thunk middleware
import { thunk } from "redux-thunk";

// Import all reducers created
import reducers from "./index";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
