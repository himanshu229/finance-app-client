import { combineReducers } from "@reduxjs/toolkit";
import AuthuserSlice from "./reducers/authSlice";

const rootReducer = combineReducers({
  authInfo: AuthuserSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
