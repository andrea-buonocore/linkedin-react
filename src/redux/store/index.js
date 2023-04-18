import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SaveMyInfoReducer from "../reducers/SaveMyInfoReducer";
import ExperiencesReducer from "../reducers/ExperiencesReducer";
import ProfilesReducer from "../reducers/ProfilesReducer";


const store = configureStore({
    reducer: combineReducers({
        userInfo: SaveMyInfoReducer,
        experiences: ExperiencesReducer,
        profiles: ProfilesReducer
    })
})

export default store;