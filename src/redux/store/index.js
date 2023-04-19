import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SaveMyInfoReducer from "../reducers/SaveMyInfoReducer";
import ExperiencesReducer from "../reducers/ExperiencesReducer";
import ProfilesReducer from "../reducers/ProfilesReducer";
import SavePost from "../reducers/SavePost";


const store = configureStore({
    reducer: combineReducers({
        userInfo: SaveMyInfoReducer,
        experiences: ExperiencesReducer,
        profiles: ProfilesReducer,
        post: SavePost
    })
})

export default store;