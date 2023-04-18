import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SaveMyInfoReducer from "../reducers/SaveMyInfoReducer";
import ExperiencesReducer from "../reducers/ExperiencesReducer";


const store = configureStore({
    reducer: combineReducers({
        userInfo: SaveMyInfoReducer,
        experiences: ExperiencesReducer
    })
})

export default store;