import { combineReducers } from "@reduxjs/toolkit";
import AuthuserSlice from "./reducers/authSlice";
import loadingSlice from "./reducers/loadingSlice";

const rootReducer = combineReducers({
  authInfo: AuthuserSlice,
  loading: loadingSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
